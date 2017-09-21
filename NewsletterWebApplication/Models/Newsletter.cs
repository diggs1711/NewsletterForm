using System;
using System.Data.Entity;

namespace NewsletterWebApplication.Models
{
    public class Newsletter
    {
        public int ID {get;set;}
        public string Email { get; set; }
        public string Reason { get; set; }
        public string HearAboutUs { get; set; }
    }

    public class NewsletterDBContext : DbContext
    {
        public DbSet<Newsletter> Newsletters { get; set; }
    }
}