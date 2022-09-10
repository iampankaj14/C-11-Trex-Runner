
var trex ,trex_running;
var ground,groundImage;
function preload(){
  trex_running = loadAnimation ("trex1.png","trex3.png","trex4.png");

  groundImage = loadImage ("ground2.png");

}

function setup(){
  createCanvas(600,200)

  trex = createSprite(50,50,20,20);
  trex.addAnimation("running",trex_running);
  trex.scale = 0.5;
  
  ground = createSprite(300,180,600,20);
  ground.addImage("ground",groundImage);

  //create a trex sprite
 
}

function draw(){
  background(200);
  
  trex.collide(ground);
  
  if(keyDown("space")){
    trex.velocityY = -9;
  }
  
  //gravity to trex
  trex.velocityY += 0.5;

  drawSprites();
}
