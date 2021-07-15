class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
    this.smoke = loadImage("sprites/smoke.png");
    this.dots = []
  }

  display() {
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;
    super.display();
    if(this.body.velocity.x>2&&this.body.position.x>250){
      this.dots.push([this.body.position.x,this.body.position.y])
    }
    
     for(var i = 0;i < this.dots.length;i=i+1)
   image(this.smoke,this.dots[i][0],this.dots[i][1]);
  }
}
