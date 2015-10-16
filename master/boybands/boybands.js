var bands = ["Boyz II Men", "NSync", "New Kids on the Block", "98 Degrees", "One Direction"];
var vegetables = ["Carrots", "Kale", "Zucchini", "Broccoli", "Squash"];

// The number of loops to perform (what if the array changes?)
var loopCount = 5;

// Keep track of which band we're on in the loop
var currentBand = "";

// Keep track of which veggie we're on in the loop
var currentVeggie = "";

// Get a reference to the appropriate DOM element for bands
var bandElement = document.getElementById("boy-bands");

// Get a reference to the appropriate DOM element for vegetables
var veggieElement = document.getElementById("vegetables");

// Start looping
var output = "";
for (var i = 0; i < bands.length; i ++) {
	console.log(i);
	var currentBand = bands[1];
 	var currentVeggie = vegetables[1];


	output = output + currentVeggie + " " + currentBand
	var output = output + "<div>";
}

  // Add the band names into the correct <div>
  currentBand = bands[1];


  // Add the veggie names into the correct <div>
  currentVeggie = vegetables[1];

  bandElement.innerHTML + currentBand;
  veggieElement.innerHTML + currentVeggie;

  console.log('currentBand');
  console.log('currentVeggie');