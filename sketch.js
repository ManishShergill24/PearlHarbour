const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine,world,canvas;
var player, playerName, formstart;

function setup(){
canvas = createCanvas(1200,1200)

engine = Engine.create();
world = engine.world;

//player = new pc(300,300,50,50)
formstart = new Form();

}

function draw(){
background("white")
Engine.update(engine);

//player.display();
formstart.display();

drawSprites();
}