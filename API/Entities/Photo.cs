using System.ComponentModel.DataAnnotations.Schema;

namespace API.Entities
{
    [Table("Photots")]
    public class Photo
    {
        public int Id { get; set; }
        public string Url { get; set; }
        public bool IsMain { get; set; }
        public string PublicId { get; set; }

        // fully defining relationship
        public AppUser AppUser { get; set; }
        public int AppUserId { get; set; }

    }
}