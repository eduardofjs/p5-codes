//var xoff = 1;
var start = 0;
var inc = 0.01

function setup() {
  createCanvas(800, 800);
}

function draw() { 
  background(60);

  //Perlin noise values varying along the X axis
  /*
  var x = map(noise(xoff), 0, 1, 0, width)
  xoff +=0.01;
  console.log(x);
  ellipse(x, 200, 24, 24);
  */ 

  //Graphic with Perlin noise values along the Y axis
  stroke(255);
  noFill();
  beginShape();
  var xoff = start;
  for (var x = 0; x<width; x++){
    stroke(255);
    //var y = map(noise(xoff), 0, 1, 0, height); 
    var n = map(noise(xoff), 0, 1, -50, 50); 
    var s = map(sin(xoff), -1, 1, 0, height); //create a sine wave values
    var y = (s + n); //add noise to sine values
    vertex(x, y); // create a sine wave with Perlin noise

    xoff += inc;
  }
  endShape();

  start += inc;
}
