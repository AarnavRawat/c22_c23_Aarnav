

//Declare variables for game objects and behaviour indicators(FLAGS)
const Engine = Matter.Engine;
const World  = Matter.World;
const Bodies = Matter.Bodies;

var userEngine, userWorld, userBody;

var box1, box2;
var ground;
var pig1;
var bird;
var log1;

//define the intial environment of the software(before it is used) by defining the declared variables with 
//default values and executed only once at the start of the program
function setup() {
  var canvas = createCanvas(1200,400);

  userEngine = Engine.create();
  userWorld  = userEngine.world;
  
  ground = new Ground(600,height,1200,20);


  //pig1 = new Pig(810, 350);
  //log1 = new Log(810,260,300, PI/2);
  box1 = new Box(700,320,70,70);
  box2 = new Box(920,320,70,70);
  pig1 = new Pig(810,300);

  bird = new Bird(300,200);

 log1 = new Log(810,280,220,PI * 0.5);//PI in radians = 180 degrees
 

}

//All modifications, changes, conditions, manipulations, actions during the course of the program are written inside function draw.
//All commands to be executed, checked continously or applied throughout the program are written inside function draw.
//function draw is executed for every frame created since the start of the program till the program is stopped.
function draw() {
  background(255, 255, 255);

  Engine.update(userEngine);

  box1.display();
  box2.display();
  ground.display();
  pig1.display();
  bird.display();
  log1.display();

}