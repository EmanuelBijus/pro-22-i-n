
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball

function preload()
{
	
}

function setup() {
	createCanvas(900, 800);
	
	var ball_opition={
		isStatic:false,
		restitution:0.3,
		friction:0,
		density:1.2
	}
	

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
 ball.Bodies.circle(100,100,20,20,ball_opition);
 World.add(world,ball);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
}



