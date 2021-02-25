var fixedRect,movingRect;
var gameObject1;
var gameObject2, gameObject3;

function setup() {
  createCanvas(800,400);
  fixedRect = createSprite(400,200,50,70);
  fixedRect.shapeColor= "green";
  fixedRect.debug = true;

  movingRect= createSprite(200,100,70,30);
  movingRect.shapeColor= "green";
  movingRect.debug= true;

  gameObject1=createSprite(300,120,47,89);
  gameObject1.shapeColor="green";
  gameObject1.debug= true

  gameObject2=createSprite(100,300,30,30)
  gameObject2.shapeColor="blue"
  gameObject2.debug= true
  gameObject2.velocityX=4

  gameObject3=createSprite(600,300,30,30)
  gameObject3.shapeColor="white"
  gameObject3.debug= true
  gameObject3.velocityX=-4

}

function draw() {
  background("slategrey");  

  movingRect.x= mouseX;
  movingRect.y= mouseY;

  bounceOff(gameObject2, gameObject3)
  // console.log(movingRect.x-fixedRect.x);
  // console.log(movingRect.width/2+fixedRect.width/2);

  // function call -- calling the function
  if(isTouching(movingRect,fixedRect)){
    movingRect.shapeColor="red";
    fixedRect.shapeColor="red";
  } else {
    movingRect.shapeColor="green";
    fixedRect.shapeColor="green";
  }
  if(isTouching(movingRect, gameObject1)){
    movingRect.shapeColor="blue";
    gameObject1.shapeColor="blue";
  }else{
    movingRect.shapeColor="green";
    gameObject1.shapeColor="green";
  }



  drawSprites();
}

