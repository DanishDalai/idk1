const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ball;

function setup() {
 var canvas = createCanvas(1200,400);
  engine = Engine.create();
  world = engine.world;
  
  ball = new Ball(100,100,50,50);
}

function draw() {
  background(0);  
  Engine.update(engine);
  strokeWeight(4);
  ball.display();
}

function mouseDragged(){
  Matter.body.setPosition(ball.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  slingshot.fly();
}