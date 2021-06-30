namespace API.Helpers
{
    public class UserParams : PaginationParams
    {
        // pagination moved to PaginationParams.cs Helper
        public string CurrentUsername { get; set; }
        public string Gender { get; set; }
        public int MinAge { get; set; } = 18;
        public int MaxAge { get; set; } = 150;
        public string OrderBy { get; set; }
    }
}