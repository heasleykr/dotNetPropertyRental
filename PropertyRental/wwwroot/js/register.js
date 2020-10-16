/*********** Global Variables **************/
//Create Property array
    // var propertyList = [];

//Cache DOM with an Object
var UI = {};

//Function to clear form
function clearForm(){
    
    //Find all my form values and clear them!
    $(".form-control").val('');

}

// Function to create a Property from Register Form
function saveProperty() {
    //get value into var
    var title = UI.$title.val();
    var price = parseFloat(UI.$price.val());
    var img = UI.$imgUrl.val();
    var beds = parseInt(UI.$beds.val());
    var baths = parseInt(UI.$bath.val());
    var area = parseInt(UI.$area.val());
    var desc = UI.$description.val();
    var parking = $("#radio_0").is(":checked");
    
    
    //Data validation
    if(!price){ //if the price is: Empty, 0, false, Nan
        
        //show an error on screen
        $("#alertMessage").text("Error, Please verify the price.");
        $("#alertError").removeClass("hide");

        //set a timer(mili) to remove 
        setTimeout(function(){
            //hide error to user
            $("#alertError").addClass("hide");
        } , 3000);
  
        return; //Stop and don't go forward with next lines of code
    }
    if(!beds){ //if the price is: Empty, 0, false, Nan

        //show an error on screen
        $("#alertMessage").text("Error, Please verify the number of bedrooms.");
        $("#alertError").removeClass("hide");

        //set a timer(mili) to remove 
        setTimeout(function(){
            //hide error to user
            $("#alertError").addClass("hide");
        } , 3000);
 
        return; //Stop and don't go forward with next lines of code
    }
    if(!baths){ //if the price is: Empty, 0, false, Nan

        //show an error on screen
        $("#alertMessage").text("Error, Please verify the number of bathrooms.");
        $("#alertError").removeClass("hide");

        //set a timer(mili) to remove 
        setTimeout(function(){
            //hide error to user
            $("#alertError").addClass("hide");
        } , 3000);

        return; //Stop and don't go forward with next lines of code
    }
    if(!area){ //if the price is: Empty, 0, false, Nan

        //show an error on screen
        $("#alertMessage").text("Error, Please verify the area.");
        $("#alertError").removeClass("hide");

        //set a timer(mili) to remove 
        setTimeout(function(){
            //hide error to user
            $("#alertError").addClass("hide");
        } , 3000);

        return; //Stop and don't go forward with next lines of code
    }

    //create a Property Object
    var property = new Property(title, price, img, beds, baths, area, desc, parking);

    console.log(property);
    
        //Push to array
        // propertyList.push(property);
        // console.log(propertyList);

    //send object to BE (backend)
    $.ajax({
        url: "/catalog/saveProperty",
        type: "POST",
        data: JSON.stringify(property),
        contentType: "application/json",
        success: (res) => {
            console.log(res);

            //clear the form
            clearForm();

            //show success message to user
            $("#alertSuccess").removeClass("hide");

            //set a timer(mili) to remove 
            setTimeout(function(){
                //hide success to user
                $("#alertSuccess").addClass("hide");
            } , 3000);


        },
        error: (details) => {
            console.log("Error", details);

            //show an error on screen and DONT clear form
            // $('#alertMessage').innerText = "Server Error";
            $("#alertError").removeClass("hide");

            //set a timer(mili) to remove 
            setTimeout(function(){
                //hide error to user
                $("#alertError").addClass("hide");
            } , 3000);
        }
    });

}


function init(){
    console.log("Register Page");

    // UI DOM Object
    UI = {
        //get value into var
        $title: $("#txtTitle"),
        $price: $("#txtPrice"),
        $imgUrl: $("#txtImg"),
        $beds: $("#txtBeds"),
        $bath: $("#txtBath"),
        $area: $("#txtArea"),
        $description: $("#txtDescription"),
    };

    //catch click events on button
    $("#btnSave").click(saveProperty);
}



window.onload = init;