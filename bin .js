class Bin{
    constructor(x, y,  height,angle) {
      var options = {
        
          isStatic : true
         
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = this.width;
      this.height = height;
      this.image=loadImage("sprites/bin.png")
      Matter.Body.setAngle(this.body,angle)
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      
      rectMode(CENTER);
      fill("red");
      rect(0, 0, this.width, this.height);
     
     image(this.image,0,0,this.width,this.height) 
     pop();
    }
  };
  