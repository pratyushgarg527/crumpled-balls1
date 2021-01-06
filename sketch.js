var paperObject,paper,ground,box1,box2,box3;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	
	paper = new Paper(100,0,30)
	ground = new Ground(600,600,1200,20)
	box1 = new Dustbin(620,580,200,20)
	box2 = new Dustbin(520,540,20,100)
	box3 = new Dustbin(720,540,20,100)
	




	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  ground.display();
  paper.display();
  box1.display();
  box2.display();
  box3.display();


  drawSprites();
 
}
function keyPressed(){
 
	if(keyCode === UP_ARROW) {


		Body.applyForce(paper.body,paper.body.position,{x:150,y:-120});

	}


}


