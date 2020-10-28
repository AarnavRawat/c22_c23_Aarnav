

//Declare variables for game objects and behaviour indicators(FLAGS)
const Engine = Matter.Engine;
const World  = Matter.World;
const Bodies = Matter.Bodies;

var userEngine, userWorld, userBody;

var box1, box2;
var ground;

//define the intial environment of the software(before it is used) by defining the declared variables with 
//default values and executed only once at the start of the program
function setup() {
  createCanvas(800, 800);

  userEngine = Engine.create();
  userWorld  = userEngine.world;
  
  userBody   = Bodies.rectangle(500, 500, 50, 75);
  World.add(userWorld, userBody);
  console.log(userBody);

  var ground_options = {
     isStatic: true
  }
  ground = Bodies.rectangle(400,750,700,10,ground_options);
  World.add(userWorld,ground);
  console.log(ground);

}

//All modifications, changes, conditions, manipulations, actions during the course of the program are written inside function draw.
//All commands to be executed, checked continously or applied throughout the program are written inside function draw.
//function draw is executed for every frame created since the start of the program till the program is stopped.
function draw() {
  background(255, 255, 255);
  
  Engine.update(userEngine);

  rectMode(CENTER);
  rect(ground.position.x, ground.position.y, 700, 10);

  ellipseMode(CENTER);
  ellipse(userBody.position.x, userBody.position.y, 50,90);

}