using System;

namespace API.Entities
{
    public class Message
    {
        public int Id { get; set; } // each message generated by DB
        public int SenderId { get; set; }
        public string SenderUsername { get; set; }

        // relationship between app user and the message
        public AppUser Sender { get; set; } 
        public int RecipientId { get; set; }
        public string RecipientUsername { get; set; }
        public AppUser Recipient { get; set; }

        // message specific properties
        public string Content { get; set; }
        public DateTime? DateRead { get; set; } // optional to be null if not read
        public DateTime MessageSent { get; set; } = DateTime.UtcNow;

        // only delete message from server if both parties have deleted it
        public bool SenderDeleted { get; set; }
        public bool RecipientDeleted { get; set; }

        
    }
}