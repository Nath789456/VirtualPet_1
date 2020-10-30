//Create variables here
var dog, happyDog, dogImg; 
var database, foodS, foodStock;

function preload()
{
  //load images here
  dogImg=loadImage("dogImg.png");
  happyDog= loadImage("dogImg1.png");


}

function setup() {
  createCanvas(600, 600);
  dog= createSprite(300,400,4,2);
  dog.addImage(dogImg);
  dog.scale=0.5;


  database= firebase.database();
  foodStock= database.ref('Food');
  foodStock.on("value",readStock);

}


function draw() { 
  background(46, 139, 87); 

  if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage(happyDog);
    dog.scale=0.2;
  }

  drawSprites();
  //add styles here
  textSize(24);
fill("yellow");
stroke(4);
text("Press Up Arrow to feed Romeo the dog milk!!",80,150);

}
 function readStock(data){
   foodS= data.val();

 }

function writeStock(x){

  if(x<=0){
    x=0;
  }
  else{
    x=x-1;
  }
  database.ref('/').update({
    Food:x
  })
}
