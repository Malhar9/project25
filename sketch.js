const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var trash
var bin,bin2,bin3
var ground

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

trash = new Trash(700,320,30);
bin = new Bin(700,320,30);
bin2 = new Bin(700,320,30);
bin3 = new Bin(700,320,30);
ground= new Ground(690,10,1000,20)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);
  trash.display();
  drawSprites();
 
}

function key (){
	if(keyCode=== UP_ARROW){
	Matter.Body.applyForce(trash.body,paper.body.position,{x:85,y:-85})
}
}