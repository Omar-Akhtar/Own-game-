const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ground, engine, world
var sky
var square, skySprite

function preload() {
  sky = loadImage("sky.jpg")
}

function setup() {
  createCanvas(displayWidth, displayHeight)

  engine = Engine.create()
  world = engine.world

  ground = new Base(width/2, height-10, width+500, 20)

  

  rectMode(CENTER)

  skySprite = createSprite(width/2, height/2, 50, 50)
  skySprite.addImage(sky)

  square = Bodies.rectangle(25, height-20, 40, 40)
  World.add(world,square)
}
function draw() {
  background(0)
  Engine.update(engine)

  ground.show()
  drawSprites()
  rect(square.position.x, square.position.y, 40, 40)

}