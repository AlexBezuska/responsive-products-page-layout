var image = [
  "http://placekitten.com/g/800/800",
  "http://placekitten.com/g/700/700",
  "http://placekitten.com/g/600/600",
  "http://placekitten.com/g/500/500",
  "http://placekitten.com/g/400/400",
  "http://placekitten.com/g/300/300",
  "http://placekitten.com/g/900/900",
  "http://placekitten.com/g/950/950"
];

function randomPick(array) {
  return Math.floor(Math.random() * array.length);
}

function addBackgroundImage(div, image) {
  var rand = randomPick(image);
  div.css("background-image", "url(" + image[rand] + ")");
}

var boxesPerRow = 4;

generateRows(".page", 5);
fillContent();

function fillContent() {
  $('.product.module').each(function() {
    addBackgroundImage($(this), image);
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