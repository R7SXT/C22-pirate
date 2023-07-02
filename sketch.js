const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world, backgroundImg;
var cannon1,cimg,cbimg

var canvas, angle, tower, ground;

function preload() {
  backgroundImg = loadImage("./assets/background.gif");
  towerImage = loadImage("./assets/tower.png");
  cimg = loadImage("./assets/canon.png")
  cbimg = loadImage("./assets/cannonBase.png")
}

function setup() {

  canvas = createCanvas(1200, 600);
  engine = Engine.create();
  world = engine.world;
  
  var options = {
    isStatic: true
  }

  ground = Bodies.rectangle(0, height - 1, width * 2, 1, options);
  World.add(world, ground);

  tower = Bodies.rectangle(160, 350, 160, 310, options);
  World.add(world, tower);

  cannon1 = new Cannon(140,75,100,100,25)
  console.log(cannon1)
}

function draw() {
  image(backgroundImg,0,0,1200,600)
  

  
  rect(ground.position.x, ground.position.y, width * 2, 1);
  


  push();
  imageMode(CENTER);
  image(towerImage,tower.position.x, tower.position.y, 160, 310);
  pop();  

   cannon.display()

   Engine.update(engine);

}
