
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;



function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    roof = new Roof(390,200,420,20)
    bobObject1 = new Bob(200,420,40);
	bobObject2 = new Bob(280,420,40);
	bobObject3 = new Bob(360,420,40);
	bobObject4 = new Bob(440,420,40);
	bobObject5 = new Bob(520,420,40);
	
	rope1 = new Rope(bobObject1.body,roof.body,-180,0);
	rope2 = new Rope(bobObject2.body,roof.body,-100,0);
	rope3 = new Rope(bobObject3.body,roof.body,-20,0);
	rope4 = new Rope(bobObject4.body,roof.body,60,0);
	rope5 = new Rope(bobObject5.body,roof.body,140*1,0);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("lightgreen");
  roof.display();
  bobObject1.display(); 
  bobObject2.display();  
  bobObject3.display();  
  bobObject4.display(); 
  bobObject5.display();  
  
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
 
}
function keyPressed(){
	if(keyCode=== RIGHT_ARROW){
	     Matter.Body.applyForce(bobObject5.body,bobObject5.body.position,{x:150,y:150});
	}

	if(keyCode=== LEFT_ARROW){
		Matter.Body.applyForce(bobObject1.body,bobObject1.body.position,{x:-150,y:-150});
	}
  }


