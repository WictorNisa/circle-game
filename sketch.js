//Global variables
let circleRadius = 200 * Math.random() + 5;
let x, y;


//Makes a random rbg string for diffrent colors on the circle each time it gets spawned
let r = Math.floor(Math.random() * (255 - 0 + 1) + 0);
let g = Math.floor(Math.random() * (255 - 0 + 1) + 0);
let b = Math.floor(Math.random() * (255 - 0 + 1) + 0);
let rgbString = r + ", " + g + ", " + b;



// Set-ups the canvas
function setup() {
  createCanvas(windowWidth, windowHeight);

  // Return a random floating-point number inside windowHeight and windowWidth and assigns it to the variable X and Y 
  x = random(windowWidth);
  y = random(windowHeight);
}

function draw() {
  background(192, 188, 181);


  //Draw elements
  fill(rgbString);
  noStroke();
  circle(x, y, circleRadius);
}