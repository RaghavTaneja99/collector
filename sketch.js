var path,boy,cash,diamonds,jwellery,sword,score,reset,r
var pathImg,boyImg,cashImg,diamondsImg,jwelleryImg,swordImg;
var treasureCollection = 0;
var cashG,diamondsG,jwelleryG,swordGroup,gamestage

function preload(){
  pathImg = loadImage("Road.png");
  boyImg = loadAnimation("runner1.png","runner2.png");
  cashImg = loadImage("cash.png");
  diamondsImg = loadImage("diamonds.png");
  jwelleryImg = loadImage("jwell.png");
  swordImg = loadImage("sword.png");
  endImg =loadAnimation("gameOver.png");
  r=loadImage("gameOver.png")
}

function setup(){
score=0  
  createCanvas(400,400);
// Moving background
path=createSprite(200,200);
path.addImage(pathImg);
path.velocityY = 4;
  boy = createSprite(70,330,20,20);
boy.addAnimation("SahilRunning",boyImg);
boy.scale=0.08
 reset=createSprite(200,100,0,10)
 reset.addImage(r)
  reset.scale=0.7
//creating boy running

  
  gamestage="serve"
cashG=new Group();
diamondsG=new Group();
jwelleryG=new Group();
swordGroup=new Group();

}

function draw() {

  background("green");
  boy.x = World.mouseX;
  
  edges= createEdgeSprites();
  boy.collide(edges);
  
  //code to reset the background
  if(path.y > 400 ){
    path.y = height/2;
  }
  if(gamestage==="serve"){
    createCash();
    createDiamonds();
    createJwellery();
    createSword();
    boy.visible=true
    path.velocityY=4
    boy.y=330
    reset.visible=false
   
}
   drawSprites();
    if (cashG.isTouching(boy)) {
      cashG.destroyEach();
      score=score+100
    }
    else if (diamondsG.isTouching(boy)) {
      diamondsG.destroyEach();
      score=score+200
      
    }else if(jwelleryG.isTouching(boy)) {
      jwelleryG.destroyEach();
      score=score+150
      
      
    }else{
      if(swordGroup.isTouching(boy)) {
        swordGroup.destroyEach();
      
      gamestage="play"
    }
    

   
  }
if(gamestage==="play"){
    fill("Red")
  textSize(20)
        text("You have loss the game",100,200)
        jwelleryG.setVelocityYEach(0);
         diamondsG.setVelocityYEach(0);
         cashG.setVelocityYEach(0);
         swordGroup.setVelocityYEach(0);
  jwelleryG.setLifetimeEach(-1);
         diamondsG.setLifetimeEach(-1);
      cashG.setLifetimeEach(-1);
         swordGroup.setLifetimeEach(-1);
        path.velocityY=0
  boy.visible=false
 
  reset.visible=true
  text("press space bar to play again",90,220)
  boy.y=1000
}
 
  textSize(20);
  fill(255);
  text("Treasure: "+ score,150,30);
  if(score>1000){
    gamestage="win"
  }
  if(gamestage==="win"){
            jwelleryG.setVelocityYEach(0);
         diamondsG.setVelocityYEach(0);
         cashG.setVelocityYEach(0);
         swordGroup.setVelocityYEach(0);
  jwelleryG.setLifetimeEach(-1);
         diamondsG.setLifetimeEach(-1);
      cashG.setLifetimeEach(-1);
         swordGroup.setLifetimeEach(-1);
        path.velocityY=0
        fill("red")
    text("you have win the game",100,200)
    text("press R to play again",120,220)
    boy.visible=false
    reset.visible=false
         
  }
  if(keyDown("space")&&gamestage==="play"){
    gamestage="serve"
    diamondsG.setVelocityYEach(5);
         cashG.setVelocityYEach(6);
         swordGroup.setVelocityYEach(7);
     jwelleryG.setVelocityYEach(4);
    score=0
  }
   if(keyDown("R")&&gamestage==="win"){
    gamestage="serve"
      diamondsG.setVelocityYEach(5);
         cashG.setVelocityYEach(6);
         swordGroup.setVelocityYEach(3);
      jwelleryG.setVelocityYEach(6);
     score=0
  }

}

function createCash() {
  if (World.frameCount % 50 == 0) {
  var cash = createSprite(Math.round(random(50, 350),40, 10, 10));
  cash.addImage(cashImg);
  cash.scale=0.12;
  cash.velocityY = 3;
  cash.lifetime = 150;
  cashG.add(cash);
  }
}

function createDiamonds() {
  if (World.frameCount % 80 == 0) {
  var diamonds = createSprite(Math.round(random(50, 350),40, 10, 10));
  diamonds.addImage(diamondsImg);
  diamonds.scale=0.03;
  diamonds.velocityY = 3;
  diamonds.lifetime = 150;
  diamondsG.add(diamonds);
}
}

function createJwellery() {
  if (World.frameCount % 80 == 0) {
  var jwellery = createSprite(Math.round(random(50, 350),40, 10, 10));
  jwellery.addImage(jwelleryImg);
  jwellery.scale=0.13;
  jwellery.velocityY = 3;
  jwellery.lifetime = 150;
  jwelleryG.add(jwellery);
  }
}

function createSword(){
  if (World.frameCount % 150 == 0) {
  var sword = createSprite(Math.round(random(50, 350),40, 10, 10));
  sword.addImage(swordImg);
  sword.scale=0.1;
  sword.velocityY = 3;
  sword.lifetime = 150;
  swordGroup.add(sword);
  }
}