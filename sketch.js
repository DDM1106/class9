var box 
function setup() {
  createCanvas(800,600);
  box = createSprite(200,200,30,30)
}

function draw() 
{


  background(30);
  if (keyDown("RIGHT_ARROW")){
    box.x=box.x + 4
  }

  if (keyDown("LEFT_ARROW")){
    box.x=box.x - 4
  }

  if (keyDown("UP_ARROW")){
    box.y=box.y - 4
  }

  if (keyDown("DOWN_ARROW")){
    box.y=box.y + 4
  }

drawSprites()

}




