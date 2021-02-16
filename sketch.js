const Engine = Matter.Engine;//NameSpacing or ALIAS name 
const World = Matter.World;
const Bodies = Matter.Bodies ;

var myEngine , myWorld;
var ball;
function setup() {
  createCanvas(400,400);
  myEngine = Engine.create();
  myWorld= myEngine.world;

  
  
ball = Bodies.rectangle(200,200,50,100,{isStatic:false})
console.log(ball)
}


function draw() {
  background(0);
  Engine.update(myEngine);
 
rectMode(CENTER)
rect(ball.position.x,ball.position.y,50,100)
  
}