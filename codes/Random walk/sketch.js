var x;
var y;

function setup() {
  createCanvas(400, 400);
  x = 200;
  y = 200;
  background(51);
}

function draw() {
  stroke(255);
  strokeWeight(1);
  point(x,y);

  var r = floor(random(4));

  switch (r){
    case 0:
      x+=1;
      break;
    case 1:
      x-=1;
      break;
    case 2:
      y+=1;
      break;
    case 3:
      y-=1;
      break;
  }


}
