const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var engine, World;

var paperObj, groundObj;
var PaperBody;
var box1, box2, box3
function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);
  rectMode(CENTER);
  
	engine = Engine.create();
  world = engine.world;
  
  box1=createSprite(300,600,20,100);
	box1.shapeColor=color(255,0,0);

	box2=createSprite(410,650,200,20);
	box2.shapeColor=color(255,0,0);

	box3=createSprite(520,600,20,100);
	box3.shapeColor=color(255,0,0);


paperObj= new paper(200, 450, 40);	
groundObj= new ground(width/2, 670,width,20);

  //Create the Bodies Here.
  
  var ground_options={
    isStatic: true
  }

  groundObj = Bodies.rectangle(200,390,200,20,ground_options);
  World.add(world,ground1);

var paperBody_options= {
  restitution: 1.0
  }
  paperBody=Bodies.circle(width/2, 200, 5, {isStatic: true})
World.add(world,paperBody);


  
   Engine.run(engine);
  }


function draw() {
rectMode(center);
   background(230);

   
  paperObj.display();
  groundObj.display();
  drawSprites();
}

function keyPressed(){
  if(keyCode === UP_ARROW){

    Matter.Body.applyForce(paperBody.body, paperBody.body.position,{x:85, y:-85});
  }
}


