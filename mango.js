class mango{
    constructor(x,y,width,height){
      
        Option={
            isStatic:true,
            restitution:0,
        friction:1,
    density:1.2        }

    this.body = Bodies.rectangle(x, y, width, height, Option);
    this.width = width;
    this.height = height;
    this.image = loadImage("Plucking mangoes/mango.png");
    World.add(world, this.body);
  }
  display(){
   
    var pos=this.body.position
    var angle=this.body.angle
     push();
     translate(pos.x,pos.y)
     rotate(angle)
    
    
    imageMode(CENTER);
    image(this.image, 0, 0, this.width, this.height);
    pop();
  }
}