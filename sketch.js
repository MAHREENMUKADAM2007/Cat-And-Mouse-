var cat,catImage, gardenImage, mouse,mouseImage,garden;


function preload() {
  bg = loadImage("images/garden.png");
  tomImg1= loadAnimation("images/tomOne.png");
  tomImg2=loadAnimation("images/tomTwo.png","images/tomThree.png");
  tomImg3= loadAnimation("images/tomFour.png");
  jerryImg1=loadAnimation("images/jerryOne.png");
  jerryImg2= loadAnimation("images/jerryTwo.png","images/jerryThree.png");
  jerryImg3=loadAnimation("images/jerryFour.png");

}


  function setup(){
    canvas = createCanvas(1000,800);

    tom = createSprite(870, 600);
    tom.addAnimation("tomSleeping", tomImg1);
    tom.scale = 0.2;

    jerry = createSprite(200, 600);
    jerry.addAnimation("jerryStanding", jerryImg1);
    jerry.scale = 0.15;

}



function draw() {

    background(255);
 if (cat.x - mouse.x <(cat.width - mouse.width)/2){
   cat.addAnimation("catLastImage", catImg3);
   cat.changeAnimation("catLastImage");

 }

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
if(keyCode===LEFT_ARROW){
cat.velocityX = -5;
cat.addAnimation("catRunning",catImg2)
cat.chengeAnimation("catRunning");

}

}
