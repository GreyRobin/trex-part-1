
var trex ,trex_running;
var edges;
var ground , groundimg
function preload(){
  trex_running=loadAnimation("trex1.png","trex3.png","trex4.png")
  groundimg=loadImage("ground2.png")

}

function setup(){
  createCanvas(600,200)
  
  //create a trex sprite
 trex= createSprite(50,160,20,50)
 trex.addAnimation("running",trex_running);
 trex.scale = 0.5
 edges= createEdgeSprites();
 //create ground sprite
 ground = createSprite(200,180,400,20)
 ground.addImage("ground",groundimg)
 ground.x=ground.width/2
}

function draw(){
  background("lime")
  console.log(trex.y)
  ground.velocityX = -2
  if(ground.x<0){
    ground.x=ground.width/2
  }
  if(keyDown("space")){
    trex.velocityY=-10;
  }
  trex.velocityY= trex.velocityY+0.5;

  trex.collide(ground)

  drawSprites();
}
