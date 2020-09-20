var movingrect,fixedrect;

function setup() {
  createCanvas(1200,800);
  fixedrect=createSprite(600,400,50,80);
  fixedrect.shapeColor="green";
  movingrect=createSprite(400,20,80,30);
  movingrect.shapeColor="green";
  fixedrect.debug=true;
  movingrect.debug=true;

}

function draw() {
  background(0);  

  movingrect.x=mouseX;
  movingrect.y=mouseY;

  console.log(movingrect.x-fixedrect.x);
  collision();

  drawSprites();
}

function collision(){
  if(movingrect.x-fixedrect.x < fixedrect.width/2+movingrect.width/2){
    fixedrect.shapeColor="red";
    movingrect.shapeColor="red";
  }
  else{
    movingrect.shapeColor="green";
    fixedrect.shapeColor="green";
  }
}