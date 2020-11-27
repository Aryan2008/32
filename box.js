class Box{
    constructor(x, y, width, height, angle) {
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.image=loadImage("box.png");
        this.visibility=255;
        this.width = width;
        this.height = height;
        World.add(world, this.body);
      }
      score(){
        if(this.visibility<0&&this.visibility>-105){
          score++;
        }

      }
      display(){
        var angle = this.body.angle;
        var pos=this.body.position;
        if(this.body.speed<3){
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        fill("blue");
        image(this.image,0, 0, this.width, this.height);
        pop();
        }
        else{
          World.remove(world,this.body)
          push();
          this.visibility=this.visibility-5;
          tint(255,this.visibility);
          translate(this.body.position.x, this.body.position.y);
          rotate(angle);
          imageMode(CENTER);
          fill("blue");
          image(this.image,0, 0, this.width, this.height);
          pop(); 
        }
      }
}