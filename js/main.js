var images = [
  "http://placekitten.com/g/800/800",
  "http://placekitten.com/g/700/700",
  "http://placekitten.com/g/600/600",
  "http://placekitten.com/g/500/500",
  "http://placekitten.com/g/400/400",
  "http://placekitten.com/g/300/300",
  "http://placekitten.com/g/900/900",
  "http://placekitten.com/g/950/950"
];

var productTypes = [
  "T-SHIRTS & CLOTHING",
  "HOME",
  "HOBBIES",
  "DRINKWARE",
  "WALL ART",
  "ACCESSORIES",
  "STATIONERY",
  "CASES & COVERS"
];

var colors = [
  "red",
  "blue",
  "green",
  "yellow",
  "orange",
  "purple",
  "white",
  "black"
];

var sortBy = [
  "Price (low to high)",
  "Price (high to low)",
  "Popularity"
];

var boxesPerRow = 4;

$(document).ready(function() {
  generateRows(".page", 5);
  fillContent();
  fillDropdownFromArray("Product Type", "#ddlProductType", productTypes);
  fillDropdownFromArray("Color", "#ddlColor", colors);
  fillDropdownFromArray("Sort By", "#ddlSortBy", sortBy);
});


function randomPick(array) {
  return Math.floor(Math.random() * array.length);
}

function addBackgroundimages(div, images) {
  var rand = randomPick(images);
  console.log(images[rand]);
  div.css("background-image", "url(" + images[rand] + ")");
}

function fillContent() {
  $('.product.module').each(function() {
    addBackgroundimages($(this), images);
  });


  $('.price').each(function() {
    $(this).text("$24.99");
  });

}

function generateBoxes(location, quantity) {
  for (var i = 0; i < quantity; i++) {
    $(location).append("<div class='col1-4'><div class='product module'><div class='textBox'><span class='price'></span></div></div></div>");
  }
}

function generateRows(location, quantity) {
  for (var i = 0; i < quantity; i++) {
    $(location).append("<div class='row' data-row='" + i + "'></div>");
    generateBoxes("[data-row=" + i + "]", boxesPerRow);
  }
}

function fillDropdownFromArray(listName, dropdown, array) {
  $(dropdown).append("<option value=" + listName + ">" + listName + "</option>");
  for (var i = 0; i < array.length; i++) {
    $(dropdown).append("<option value=" + array[i] + ">" + array[i] + "</option>");
  }
}