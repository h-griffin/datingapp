using System.Collections.Generic;
using System.Threading.Tasks;
using API.DTOs;
using API.Entities;

namespace API.Interfaces
{
    public interface ILikesRepository
    {
        // idividual likes
        Task<UserLike> GetUserLike(int sourceUserId, int likedUserId);

        // user with their likes
        Task<AppUser> GetUserWithLikes(int userId);

        // get likes for a user
        Task<IEnumerable<LikeDto>> GetUserLikes(string predicate, int userId ); // what looking for? been liked or liked by, user id
    }
}