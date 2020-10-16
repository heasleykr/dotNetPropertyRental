// Delete property: AJAX DELETE: /catalog/DeleteProperty/2
function deleteProp(propId){
        var id = propId;
        $.ajax({
          url: "/catalog/DeleteProperty/" + id,
          type: "DELETE",
          success: () => {
            console.log("deleted");
          },
          error: (details) => {
            console.log("Error", details);
          },
        });
}

//function to display Property listing on Register and Index
function displayProperty(property){

    // Use Bootstrap "card!!1"
    
    //Create inner HTML display 
    //TODO: Get property.id from server. 
    var propHtml = `
        <div id="${property.id}" class="property"> 
            <img src="${property.imageUrl}">
            <h2>${property.title}</h2>
            <p>${property.description}</p>
            <p>${property.bedrooms}</p>
            <p>${property.bathrooms}</p>
            <p>${property.parking}</p>
            <p>${property.price}</p>
        </div>
    `;

    //Add to Register.html & Index.html
    var container = $("#listings");
    container.append(propHtml);

}


//Function to grab Properties from DB
function fetchData(){

    // GET ajax  /catalog/getProperties
    $.ajax({
        url: "/catalog/getProperties",
        type: "GET",
        success: (res) => {
            console.log(res);

            //homework Show everything for the property on html
            for(let i = 0; i < res.length; i++){
                displayProperty(res[i]);
            }
        },
        error: (details) => {
            console.log("Error", details);

        }
    });

}



function init(){


    console.log("Catalog Page");

    fetchData();

}

window.onload = init;