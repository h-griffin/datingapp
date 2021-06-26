namespace API.Entities
{
    public class UserLike
    {
        public AppUser SourceUser { get; set; } // user liking other users
        public int SourceUserId { get; set; }

        public AppUser LikedUser { get; set; } // other user that is liked
        public int LikedUserId { get; set; }
    }
}