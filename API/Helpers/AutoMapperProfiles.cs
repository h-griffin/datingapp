using API.Entities;
using API.DTOs;
using AutoMapper;
using System.Linq;
using API.Extensions;
using System;

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
            
            CreateMap<RegisterDto, AppUser>();

            CreateMap<Message, MessageDto>()
                .ForMember(dest => dest.SenderPhotoUrl, opt => opt.MapFrom(src =>
                     src.Sender.Photos.FirstOrDefault(x => x.IsMain).Url))
                .ForMember(dest => dest.RecipientPhotoUrl, opt => opt.MapFrom(src =>
                     src.Recipient.Photos.FirstOrDefault(x => x.IsMain).Url));
            
            CreateMap<DateTime, DateTime>().ConvertUsing(d => DateTime.SpecifyKind(d, DateTimeKind.Utc)); 
        }
    }
}