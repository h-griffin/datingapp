namespace API.Helpers
{
    public class MessageParams : PaginationParams
    {
        public string Username { get; set; } // currently logged in
        public string Container { get; set; } = "Unread";
    }
}