
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var boy,boyI;
var tree,treeI;
var tree;
var ground;
var stone;
var m1,m2,m3,m4,m5,m6,m7;
var slingshot;

/*Universal law of gravity 
Free fall
Calculate the value g
Difference between mass and weight 
Weight of object on moon is 1/6 to weight on earth 
Numerical*/

function preload(){
  boyI=loadImage("boy.png")
  treeI=loadImage("tree.png")
}

function setup() {
	createCanvas(1500, 700);

  engine = Engine.create();
  world = engine.world;

  ground=new Ground(750,680,1500,35)

  stone=new Stone(120,360,2)

  boy=createSprite(250,580);
  boy.addImage(boyI);
  boy.scale=0.15;

  //tree=new Tree(1100,80)
  //World.add(world,boy)

  tree=createSprite(1100,360)
  tree.addImage(treeI)
  tree.scale=0.5;

  m1=new Mango(1000,200,20)
  m2=new Mango(1100,250,20)
  m3=new Mango(1200,300,20)
  m4=new Mango(1250,150,20)
  m5=new Mango(1300,240,20)
  m6=new Mango(950,290,20)
  m7=new Mango(1150,120,20)

  slingshot=new Chain(stone.body,{x:160,y:490})
	//Create the Bodies Here.

}


function draw() {
  background("#A0EEC7");
  Engine.update(engine);

  rectMode(CENTER);

  fill(0)
  textSize(20)
  text("PRESS SPACE TO GET A SECOND CHANCE!",200,50)

  ground.display()

  //tree.display()
  drawSprites();

  m1.display()
  m2.display()
  m3.display()
  m4.display()
  m5.display()
  m6.display()
  m7.display()

  if(m1.body.position.y>=600 && m2.body.position.y>=600 && m3.body.position.y>=600 
    && m4.body.position.y>=600 && m5.body.position.y>=600
    && m6.body.position.y>=600 && m7.body.position.y>=600 ){
    fill(0)
    text("ALL THE MANGOES HAVE BEEN COLLECTED🍈,WELL PLAYED!",200,100)
  }

  slingshot.display()
  stone.display()

  detectCollision(stone,m1)
  detectCollision(stone,m2)
  detectCollision(stone,m3)
  detectCollision(stone,m4)
  detectCollision(stone,m5)
  detectCollision(stone,m6)
  detectCollision(stone,m7)

}

function mouseDragged(){
  Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY})
}

function mouseReleased(){
  slingshot.fly()
}

function keyPressed(){
  if(keyCode==32){
    Matter.Body.setPosition(stone.body,{x:160,y:470})
    slingshot.attach(stone.body)
  }
}

function detectCollision(lstone,lmango){
  mangoBodyPosition=lmango.body.position
  stoneBodyPosition=lstone.body.position
  
  var distance=dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)
    if(distance<=lmango.radius+lstone.radius){
      Matter.Body.setStatic(lmango.body,false);
    }
 }
