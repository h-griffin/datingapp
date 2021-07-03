using API.Entities;
using Microsoft.EntityFrameworkCore;

namespace API.Data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions options) : base(options)
        {
        }
        public DbSet<AppUser> Users { get; set; }
        // dont need dbset for photoclass - gets name from table tag in photo entity

        public DbSet<UserLike> Likes {get; set;}

        public DbSet<Message> Messages { get; set; }


        protected override void OnModelCreating(ModelBuilder builder){
            base.OnModelCreating(builder);

            // likes

            builder.Entity<UserLike>()
                .HasKey(k => new {k.SourceUserId, k.LikedUserId}); // primary key for table

            builder.Entity<UserLike>()  // relationships
                .HasOne(s => s.SourceUser)
                .WithMany(l => l.LikedUsers)
                .HasForeignKey(s => s.SourceUserId)
                .OnDelete(DeleteBehavior.Cascade);
            
            builder.Entity<UserLike>()  // relationships
                .HasOne(s => s.LikedUser)
                .WithMany(l => l.LikedByUsers)
                .HasForeignKey(s => s.LikedUserId)
                .OnDelete(DeleteBehavior.Cascade);


            // messages

            builder.Entity<Message>()
                .HasOne(u => u.Recipient)
                .WithMany(m => m.MessagesReceived)
                .OnDelete(DeleteBehavior.Restrict); // only if both parties have deleted

            builder.Entity<Message>()
                .HasOne(u => u.Sender)
                .WithMany(m => m.MessagesSent)
                .OnDelete(DeleteBehavior.Restrict); // only if both parties have deleted
        
        
        }



    }
}