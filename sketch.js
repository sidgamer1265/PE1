const  Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var engine,world,ground,eclipse;
function setup() {
  createCanvas(400,400);
  engine=Engine.create();
  world=engine.world;
  var options={
    isStatic:true
  }
  var optionscircle={
    restitution:2.0
  }

ground=Bodies.rectangle(200,390,200,20,options);
World.add(world,ground);
eclipse = Bodies.circle(200,200,40,optionscircle);
World.add(world,eclipse);
}

function draw() {
  background(0);
  Engine.update(engine);
  rectMode(CENTER);
    rect(ground.position.x,ground.position.y,200,20); 
  ellipseMode(RADIUS);
    ellipse(eclipse.position.x,eclipse.position.y,40);
 
   
}