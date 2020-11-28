var fixedrect, movingrect;

function setup() {
  createCanvas(800,400);
  fixedrect = createSprite(400,200,50,70);
  fixedrect.shapeColor = "green";
  movingrect = createSprite(300,200,50,70);
  movingrect.shapeColor = "green";
  fixedrect.debug = true;
  movingrect.debug = true;
}

function draw() {
  background(255,255,255);
  movingrect.y = mouseY;
  movingrect.x = mouseX; 
  if(Math.abs(movingrect.x-fixedrect.x)<fixedrect.width/2+movingrect.width/2&&Math.abs(movingrect.y-fixedrect.y)<fixedrect.height/2+movingrect.height/2){
    fixedrect.shapeColor = "red";
    movingrect.shapeColor = "red";
  }
  else{
    fixedrect.shapeColor = "green";
    movingrect.shapeColor = "green";
  }
  drawSprites();
} 

