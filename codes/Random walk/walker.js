class Walker{
    constructor(x,y){
        this.position = createVector(x,y);
        this.velocity = createVector(1,-1)
    }

    update(){
        this.position.add(this.velocity);
    }

    show(){
        stroke(255);
        strokeWeight(2);
        fill(255, 100);
        ellipse(this.position.x, this.position.y, 32);
    }
}