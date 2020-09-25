//Global variables
let circleRadius = 100;
let x, y;
let score = 0;
let r, g, b;
let level = 1;
  

// Makes an function to see if the user has clicked on the circle or not
function mousePressed() {
  //calculate the distance between the x, y location of the mouse and the x, y location of the circle
  let d = dist(mouseX, mouseY, x, y);

  //Checks to see if the distance stored in 'd' is less than the radius of the circle
  if (d < circleRadius) {
    // Assigns new random values to X and Y so the circle can move around when the user clicks it
    x = random(windowWidth);
    y = random(windowHeight);
    //Adds one 'point' to the variable score if the user clicks the circle
    score++;
    //Changes the radius of the circle to random when it's clicked
    circleRadius = Math.floor( Math.random() * 300);

    // Changes the RBG value of the circle when clicked to a new random RBG value
    r = random(255);
    g = random(255);
    b = random(255);      
  }
}


// Set-ups the canvas
function setup() {
  createCanvas(windowWidth, windowHeight);

  // Return a random floating-point number inside windowHeight and windowWidth and assigns it to the variable X and Y 
  x = random(windowWidth);
  y = random(windowHeight);

    // adds random values to variable R, G, B that I then output in the fill function to circle
   r = random(255);
   g = random(255);
   b = random(255);

   
}

function draw() {
  background(192, 188, 181);


  //Draws the circle. Here Im using the random color generator
  noStroke();
  fill(r , g , b);
  circle(x, y, circleRadius);


  textSize(30);
  text('Your Score: ' + score, 10, 30);

  if (score == 10) {
    background('white');
    textSize(40)
    fill('black');
    text('Thanks for playing! :)', 500, 500);
    
  }
}