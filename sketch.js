var  wall, thickness;
var bullet, speed, weight;

function setup() {
  createCanvas(1600,400);

  speed=random(223,321)
  weight=random(30,78)
  thickness = random(22,90);

  bullet = createSprite(50, 200, 50, 10);
  bullet.velocityX = speed;
  bullet.shapeColor="white"

  wall = createSprite(1200,200,thickness,height/2)
  wall.shapeColor ="yellow"
  
}

function draw() {
  background(0,0,0);  

  if(wall.x-bullet.x < (bullet.width+wall.width)/2){
    bullet.velocityX=0;
    var damage=0.5 * weight * speed * speed/(thickness * thickness * thickness);
    if (damage>10)
    {
      wall.shapeColor="red";
    }
    if(damage<10 )
    {
      wall.shapeColor="yellow"
    }
  }
  drawSprites();
}