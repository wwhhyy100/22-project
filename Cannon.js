class Cannon {
  constructor(x, y, width, height, angle) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.angle = angle;
    this.CannonImg = loadImage("./assets/canon.png")
    this.CannonBase = loadImage("./assets/cannonBase.png")
  }
  display(){
    push()
    imageMode(CENTER)
    image(this.CannonImg,this.x,this.y,this.width,this.height);
    pop();
    
    image(this.CannonBase,70,20,200,200)

    noFill();
  }
}
