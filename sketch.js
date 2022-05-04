
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj,groundObject	
var world;
var paper	


function setup() {
	createCanvas(1365, 621);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	
	groundObject=new ground(width/2,629,width,20);
	dustbinObj=new dustbin(1200,615);

	paper=new Paper(100,500,45)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(230);
 

  groundObject.display();
  dustbinObj.display();
  paper.display();
}
function keyPressed(){
	if(keyCode===UP_ARROW){
	Matter.Body.applyForce(paper.paper,paper.paper.position,{x:500,y:-495})
	}
}
