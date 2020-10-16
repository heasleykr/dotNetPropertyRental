// Imports
using Microsoft.EntityFrameworkCore;

namespace PropertyRental.Models
{   
    
    
    /******** You need to run this when you update something on your Project Object!!!!
        EVERY TIME YOU CHANGE
        Run migrations everytime something changes on the models


        - dotnet ef migrations add <someName>
        - dotnet ef database update
    */
    
    public class DataContext : DbContext //inherit from DbContext functionality
    {
        //Receive in the constructor and send to parent. Recieving and passing 'options'
        public DataContext(DbContextOptions<DataContext> options) : base(options)
        {

        }
        //specifiy WHICH of your Models/Classes will become tables on the DB (database)
        public DbSet<Property> Properties {get; set;}
    }
}