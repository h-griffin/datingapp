using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;
using API.DTOs;
using API.Entities;
using API.Extensions;
using API.Helpers;
using API.Interfaces;
using AutoMapper;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    [Authorize]
    public class UsersController : BaseApiController
    {
        private readonly IUserRepository _userRepository;
        private readonly IMapper _mapper;
        private readonly IPhotoService _photoService;

        public UsersController(IUserRepository userRepository, IMapper mapper, IPhotoService photoService)
        {
            _photoService = photoService;
            _mapper = mapper;
            _userRepository = userRepository;
        }

        // == endpoints ==

        // api/users
        [Authorize(Roles = "Admin")] //temp
        [HttpGet]
        public async Task<ActionResult<IEnumerable<MemberDto>>> GetUsers([FromQuery]UserParams userParams)
        {   
            var user = await _userRepository.GetUserByUsernameAsync(User.GetUsername());
            userParams.CurrentUsername = user.UserName;
            
            if(string.IsNullOrEmpty(userParams.Gender))
                userParams.Gender = user.Gender == "male" ? "female" : "male";

            // users = paged list of type member dto (access to pagination info)
            var users = await _userRepository.GetMembersAsync(userParams);
            Response.AddPaginationHeader(users.CurrentPage, users.PageSize, users.TotalCount, users.TotlaPages);

            return Ok(users);
        }

        // api/users/username
        [Authorize(Roles = "Member")]
        [HttpGet("{username}", Name = "GetUser")]
        public async Task<ActionResult<MemberDto>> GetUser(string username)
        {
            return await _userRepository.GetMemberAsync(username);
        }

        [HttpPut] // api/users/updateUser
        public async Task<ActionResult> UpdateUser(MemberUpdateDto memberUpdateDto)
        {    // dont need to send obj back
             // get username from token used to authenticate
            var user = await _userRepository.GetUserByUsernameAsync(User.GetUsername());

            _mapper.Map(memberUpdateDto, user);
            _userRepository.Update(user);       // flag as changed to prev changed in db

            if (await _userRepository.SaveAllAsync()) return NoContent();
            return BadRequest("failed to update user");
        }

        [HttpPost("add-photo")]
        public async Task<ActionResult<PhotoDto>> AddPhoto(IFormFile file)
        {
            var user = await _userRepository.GetUserByUsernameAsync(User.GetUsername());  // get user and photos

            var result = await _photoService.AddPhotoAsync(file);                   // get result from photo service

            if(result.Error != null) return BadRequest(result.Error.Message);       // check if result has error

            var photo = new Photo{                                                  // create new photo
                Url = result.SecureUrl.AbsoluteUri,
                PublicId = result.PublicId
            };

            if (user.Photos.Count == 0){                                            // chick if user already has photo
                photo.IsMain = true;                                                    // if they dont make main
            }

            user.Photos.Add(photo);                                                 // add photo

            if(await _userRepository.SaveAllAsync()){

                return CreatedAtRoute("GetUser",new {username = user.UserName}, _mapper.Map<PhotoDto>(photo));     // return 201 with route to user that has ohotos
            }                               

            return BadRequest("Problem adding photo");
        }

        [HttpPut("set-main-photo/{photoId}")]

        public async Task<ActionResult> SetMainPhoto(int photoId)
        {
            var user = await _userRepository.GetUserByUsernameAsync(User.GetUsername());

            var photo = user.Photos.FirstOrDefault(x => x.Id == photoId);

            if (photo.IsMain) return BadRequest("This is already your main photo");

            var currentMain = user.Photos.FirstOrDefault(x => x.IsMain);
            if (currentMain != null) currentMain.IsMain = false;
            photo.IsMain = true;

            if (await _userRepository.SaveAllAsync()) return NoContent();

            return BadRequest("Failed to set main photo");
        }

        [HttpDelete("delete-photo/{photoId}")]
        public async Task<ActionResult> DeletePhoto(int photoId){
            var user = await _userRepository.GetUserByUsernameAsync(User.GetUsername());
            var photo = user.Photos.FirstOrDefault(x => x.Id == photoId);
            if(photo == null) return NotFound();
            if(photo.IsMain) return BadRequest("you cannot delete your main photo");
            if (photo.PublicId != null){                                                
                var result = await _photoService.DeletePhotoAsync(photo.PublicId);   // delete from cloudinary 
                if(result.Error != null) return BadRequest(result.Error.Message);
            }
            user.Photos.Remove(photo);                              // *tracking* remove from db
            if(await _userRepository.SaveAllAsync()) return Ok();   // update db /delete photo
            return BadRequest("Failed to delete photo");
        }

    }
}