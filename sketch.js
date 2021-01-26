const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine,world,canvas;
var player, playerName;

function setup(){
canvas = createCanvas(1200,1200)

engine = Engine.create();
world = engine.world;

//player = new pc(300,300,50,50)

}

function draw(){
background("lime")
Engine.update(engine);

//player.display();

drawSprites();
}