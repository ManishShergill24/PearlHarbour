class pc{
constructor(x,y,width,height){

var options={

isStatic: true

}

this.body = Bodies.circle(x,y,5,options);
this.width = 50;
this.height = 50;

World.add(world,this.body)
}

display(){

var xpos = this.body.position.x;
var ypos = this.body.position.y;

push();
ellipseMode(CENTER);
ellipse(xpos,ypos,this.width,this.height);
pop();

}

}