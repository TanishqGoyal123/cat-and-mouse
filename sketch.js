var bg;
var cat,catImg1,catImg2,catImg3;
var mouse,mouseImg1,mouseImg2,mouseImg3;
function preload() {
    bg=loadImage("images/garden.png");
    catImg1=loadAnimation("images/cat1.png");
    catImg2=loadAnimation("images/cat2.png","images/cat3.png");
    catImg3=loadAnimation("images/cat4.png");
    mouseImg1=loadAnimation("images/mouse1.png");
    mouseImg2=loadAnimation("images/mouse2.png","images/mouse3.png");
    mouseImg3=loadAnimation("images/mouse4.png");
}

function setup(){
    createCanvas(1000,800);
    cat=createSprite(800,600);
    cat.addAnimation("sleepingcat",catImg1);
    cat.scale=0.1;

    mouse=createSprite(200,600);
    mouse.addAnimation("standingmouse",mouseImg1);
    mouse.scale=0.1;
    
}

function draw() {

    background(bg);
    //Write condition here to evalute if tom and jerry collide
 if(cat.x-mouse.x<(cat.width-mouse.width)/2){
     cat.x=300;
     cat.velocityX=0
     cat.addAnimation("catstop",catImg3);
     cat.changeAnimation("catstop");
     mouse.addAnimation("mouserunning",mouseImg3);
     mouse.changeAnimation("mouserunning");
 }
    drawSprites();
}


function keyPressed(){

  if(keyCode === LEFT_ARROW){
      mouse.addAnimation("mouseteasing",mouseImg2);
      mouse.changeAnimation("mouseteasing");
      mouse.frameDelay= 25;
  }


}
