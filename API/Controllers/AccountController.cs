using System.Security.Cryptography;
using System.Text;
using System.Threading.Tasks;
using API.Data;
using API.DTOs;
using API.Entities;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers
{
    public class AccountController : BaseApiController
    {
        private readonly DataContext _context;
        public AccountController(DataContext context)
        {
            _context = context;
        }

        //endpoint 
        [HttpPost("register")]
        public async Task<ActionResult<AppUser>> Register(RegisterDto registerDto){

            // check for matching username
            if(await UserExists(registerDto.Username)) return BadRequest("Username is taken");

            using var hmac = new System.Security.Cryptography.HMACSHA512();

            var user = new AppUser{
                UserName = registerDto.Username.ToLower(),
                PasswordHash = hmac.ComputeHash(Encoding.UTF8.GetBytes(registerDto.Password)),
                PasswordSalt = hmac.Key
            };

            _context.Users.Add(user);          // *tracking* not added yet
            await _context.SaveChangesAsync(); // calling database saved to table
            return user;
        }

        [HttpPost("login")]
        public async Task<ActionResult<AppUser>> Login(LoginDto loginDto){
            // get user from db
            var user = await _context.Users.SingleOrDefaultAsync(x => x.UserName == loginDto.Username);

            if(user == null)return Unauthorized("Invalid Username");

            // these should be same if correct password
            using var hmac = new HMACSHA512(user.PasswordSalt);
            var computedHash = hmac.ComputeHash(Encoding.UTF8.GetBytes(loginDto.Password));

            // loop through hash
            for (int i = 0; i < computedHash.Length; i++){
                if(computedHash[i] != user.PasswordHash[i]) return Unauthorized("Invalid Password");
            }
            return user;
        }

        private async Task<bool> UserExists(string username){

            // check if theres already an entry with this name
            return await _context.Users.AnyAsync(x => x.UserName == username.ToLower());
        }
    }
}