using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace AngularArchitect.Controllers
{
    public class TemplateController : Controller
    {
        // GET: Template
        [OutputCache(Duration = 0), AllowAnonymous]
        public ActionResult Index(string feature, string template)
        {
            return PartialView($"~/app/{feature}/{template}.cshtml");
        }
    }
}