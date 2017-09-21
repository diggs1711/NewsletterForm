using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Linq;
using System.Net;
using System.Web;
using System.Web.Mvc;
using NewsletterWebApplication.Models;

namespace NewsletterWebApplication.Controllers
{
    public class NewslettersController : Controller
    {
        private NewsletterDBContext db = new NewsletterDBContext();

        // GET: Newsletters
        public ActionResult Index()
        {
            return View();
        }

        // POST: Newsletters/Create
        [HttpPost]
        public bool Create(Newsletter newsletter)
        {
            if (ModelState.IsValid)
            {
                if (db.Newsletters.Any(x => x.Email.Equals(newsletter.Email)))
                {
                    return false;
                }
                else
                {
                    db.Newsletters.Add(newsletter);
                    db.SaveChanges();
                    return true;
                }
            }

            return false;
        }


        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }
    }
}
