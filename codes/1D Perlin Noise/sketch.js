var xoff = 1;

function setup() {
  createCanvas(400, 400);
}

function draw() { 
  background(60);

 /*for(var x=0; x< width; x++){
    stroke(255);
    point(x, random(height));
    
  }*/
  var x = map(noise(xoff), 0, 1, 0, width)
  xoff +=0.01;
  console.log(x);
  ellipse(x, 200, 24, 24);

}
