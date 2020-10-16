using Microsoft.AspNetCore.Mvc;
using PropertyRental.Models; //Use our backend object!!
using System.Linq;

namespace PropertyRental.Controllers
{
    public class CatalogController : Controller
    {
        private DataContext dbContext; // our db variable object


        //Constructor for Controller
        public CatalogController(DataContext db)
        {
            dbContext = db;
        }

        public IActionResult Index()
        {
            return View(); // Catalog Page
        }

        public IActionResult Register()
        {
            return View(); // Register Page
        }

        //Get our Properties from our DB to display on screen!
        [HttpGet]
        public IActionResult GetProperties()
        {
            //Get everything from the table to a list
            var data = dbContext.Properties.ToList();
            return Json(data); //return the listt/array
        }
        
        // Function to Delete a Property
        [HttpDelete]
        public IActionResult DeleteProperty(int id)
        {
            //Find our ID
            var theProperty = dbContext.Properties.Find(id);
            dbContext.Properties.Remove(theProperty);
            dbContext.SaveChanges();

            return Ok();
        }

        // Backend API that receives Object
        //[Frombody] 'From the body of the request I expect to receive a Property obj'
        [HttpPost]
        public IActionResult SaveProperty( [FromBody] Property prop)
        {

            //Strong theProperty into the DB
            dbContext.Properties.Add(prop); //Receive Object and send to DB. Save our object on Table
            dbContext.SaveChanges(); //save the changes!!!
 
            return Json(prop); //return object back to client
        }
    }
}