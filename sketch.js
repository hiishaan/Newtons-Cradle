const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var roof;
var ball1
var ball2
var ball3
var ball4
var ball5
var con1
var con2
var con2
var con3
var con4
var con5


//Create multiple bobs, mulitple ropes varibale here


function setup() {
	createCanvas(800, 600);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	var roof_options={
		isStatic:true			
	}

	roof = Bodies.rectangle(400,20,230,20,roof_options);
    World.add(world,roof);

	ball1 = Bodies.circle(300,400,40,roof_options);
	World.add(world,ball1);

	ball2 = Bodies.circle(350,400,40,roof_options);
	World.add(world,ball2);

	ball3 = Bodies.circle(400,400,40,roof_options);
	World.add(world,ball3);

	ball4 = Bodies.circle(450,400,40,roof_options);
	World.add(world,ball4);

	ball5 = Bodies.circle(500,400,40,roof_options);
	World.add(world,ball5);

	con1 = Matter.Constraint.create({
		pointA:{x:300,y:20},
		bodyB:ball1,
		pointB:{x:0,y:0},
		length:100,
		stiffness:0.3
	  });

	  con2 = Matter.Constraint.create({
		pointA:{x:350,y:20},
		bodyB:ball2,
		pointB:{x:0,y:0},
		length:100,
		stiffness:0.3
	  });

	  con3 = Matter.Constraint.create({
		pointA:{x:400,y:20},
		bodyB:ball3,
		pointB:{x:0,y:0},
		length:100,
		stiffness:0.3
	  });

	  con4 = Matter.Constraint.create({
		pointA:{x:450,y:20},
		bodyB:ball4,
		pointB:{x:0,y:0},
		length:100,
		stiffness:0.3
	  });

	  con5 = Matter.Constraint.create({
		pointA:{x:500,y:20},
		bodyB:ball5,
		pointB:{x:0,y:0},
		length:100,
		stiffness:0.3
	  });


	Engine.run(engine);
	
  
}

function draw() {
  rectMode(CENTER);
  background("#99004d");

  rect(roof.position.x,roof.position.y,230,20);

  //call display() to show ropes here

  
  //create ellipse shape for multiple bobs here
  
  ellipse(ball1.position.x,ball1.position.y,40);
  ellipse(ball2.position.x,ball2.position.y,40);
  ellipse(ball3.position.x,ball3.position.y,40);
  ellipse(ball4.position.x,ball4.position.y,40);
  ellipse(ball5.position.x,ball5.position.y,40);
  
  if(keyCode==UP_ARROW)
  {
	Matter.Body.applyForce(ball1,ball1.position,{x:-50,y:-45});
  }

  push();
  strokeWeight(2);
  stroke(255);
  line(con1.pointA.x,con1.pointA.y,ball1.position.x,ball1.position.y);
  line(con2.pointA.x,con2.pointA.y,ball2.position.x,ball2.position.y);
  line(con3.pointA.x,con3.pointA.y,ball3.position.x,ball3.position.y);
  line(con4.pointA.x,con4.pointA.y,ball4.position.x,ball4.position.y);
  line(con5.pointA.x,con5.pointA.y,ball5.position.x,ball5.position.y);
  pop();
}


//Write keyPressed function and apply force on pressing up_arrow key on the first bob.

function keyPressed() {
	if (keyCode === RIGHT_ARROW) {
		Matter.Body.applyForce(ball1,ball1.position,{x:-50,y:-45});
	}
}
	