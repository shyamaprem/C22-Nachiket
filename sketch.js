//namespaceing
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;


var myEngine, box, myWorld;

function setup() {
  createCanvas(800,400);
  //createSprite(400, 200, 50, 50);
  myEngine = Engine.create();
  myWorld = myEngine.world;
  
  var options = { 
    isStatic: true
  }

  box = Bodies.rectangle(400, 390, 800, 20, options);

  World.add(myEngine.world, box);

  console.log(box);

  

  /*JSON Object format - JS Object Notation{ 
    x : 400,
    y : 200

  }*/


}

function draw() {
  Engine.update(myEngine);
  background(255,255,255);  
  //drawSprites();
  rectMode (CENTER);
  rect (box.position.x, box.position.y, 800, 20);
}