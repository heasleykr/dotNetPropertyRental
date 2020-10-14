using Microsoft.AspNetCore.Mvc;
using PropertyRental.Models; //Use our backend object!!

namespace PropertyRental.Controllers
{
    public class CatalogController : Controller
    {

        public IActionResult Index()
        {
            return View(); // Catalog Page
        }

        public IActionResult Register()
        {
            return View(); // Register Page
        }

        // Backend API that receives Object
        //[Frombody] 'From the body of the request I expect to receive a Property obj'
        [HttpPost]
        public IActionResult SaveProperty( [FromBody] Property prop)
        {

            //Remember these are printed on command terminal!! It's backend. 
            System.Console.WriteLine("saving a property");
            System.Console.WriteLine(prop.Title);

            prop.Id = 1;
            return Json(prop);
        }
    }
}