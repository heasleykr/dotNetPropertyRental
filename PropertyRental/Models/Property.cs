using Microsoft.AspNetCore.Mvc;

namespace PropertyRental.Models
{
 
    public class Property
    {
        //Everyone can read/write (get/post) these variables
        public int Id {get;set;} //Unique and set by database
        public string Title {get; set;}
        public decimal Price {get; set;}
        public string ImageUrl {get; set;}
        public int Bedrooms {get; set;}
        public int Bathrooms {get; set;}
        public int Area {get; set;}
        public string Description {get; set;}
        public bool Parking {get; set;}
        
    }

}