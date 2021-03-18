using API.Entities;
using API.DTOs;
using AutoMapper;
using System.Linq;
using API.Extensions;

namespace API.Helpers
{
    public class AutoMapperProfiles : Profile
    {
        public AutoMapperProfiles()
        {
            CreateMap<AppUser, MemberDto>()
                .ForMember(dest => dest.PhotoUrl, opt => opt        // grab from memberdto
                .MapFrom(src => src.Photos                          //
                .FirstOrDefault(x => x.IsMain).Url))                //
                .ForMember(dest => dest.Age, opt => opt             // 
                .MapFrom(src => src.DateOfBirth.CalculateAge()));   // 
            
            CreateMap<Photo, PhotoDto>();

            CreateMap<MemberUpdateDto, AppUser>(); // update user
        }
    }
}