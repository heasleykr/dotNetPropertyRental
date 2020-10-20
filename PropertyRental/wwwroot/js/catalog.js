// Global Variables
var bedIcon = `<i class="fas fa-bed"></i>`;
var bathIcon = `<i class="fas fa-shower"></i>`;
var carIcon = `<i class="fas fa-car"></i>`;

// Delete property: AJAX DELETE
function deleteProp(propId) {
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
function displayProperty(property) {
  //Display correct parking info
  var parking;

  if (property.parking === true) {
    parking = "Yes";
  } else {
    parking = "No";
  }
  //Create inner HTML display
  var propHtml = `
        <div id="${property.id}" class="property" style="width: 18rem;"> 
            <img src="${property.imageUrl}" id="imageProp">
            <div id="listHead">
                <h2 class="card-title">${property.title}</h2>
                <h3>Palm Beach, USA</h3>
            </div>
            <div id="details">
                <p>${bedIcon}${property.bedrooms} Bed</p>
                <p>${bathIcon}${property.bathrooms} Bath</p>
            </div>
            <div id="parkSec">
                <p>${carIcon}Parking Included: ${parking}</p>
            </div>
                <p id="price"><b>Price: $${property.price}.00</b> $USD</p>
                <p>${property.description}</p>
        </div>
    `;

  //Add to Register.html & Index.html
  var container = $("#listings");
  container.append(propHtml);
}

//Function to grab Properties from DB
function fetchData() {
  // GET ajax  /catalog/getProperties
  $.ajax({
    url: "/catalog/getProperties",
    type: "GET",
    success: (res) => {
      console.log(res);

      //Sort array by price and list highest to lowest
      // res.sort(function (a, b) {
      //   return a - b;
      // });

      //Sort and send to display on HTML
      for (let i = 0; i < res.length; i++) {
        displayProperty(res[i]);
      }
    },
    error: (details) => {
      console.log("Error", details);
    },
  });
}

function init() {
  console.log("Catalog Page");

  fetchData();
}

window.onload = init;
