var thickness, wall;
var bullet, speed, weight;

function setup() {
  createCanvas(1600,400);

  speed = random (223,321)
  weight = random (30,52)
  thickness = random (22,83)
  wall = createSprite(1200,200,thickness,height/2);
  wall.shapeColor = color(80,80,80)
  
}


function draw() {
  background(255,255,255); 
  
  drawSprites();
}

function hascollided(Lbullet,Lwall)
{
  bulletRightEdge = lbullet.x + bullet.width;
  wallLeftEdge = lwall.x;
  if(bulletRightEdge >= wallLeftEdge)
  {
    return true
  }
  return false;
}

if(hascollided(bullet,wall))
{
  bullet.velocityx = 0;
  var damage=0.5 * weight * speed * speed/(thickness * thickness * thickness );
}
if(damage>10)
{
  wall.shapeColor=color(255,0,0);
}
 if(damage<10)
 {
   wall.shapeColor=Color(0,255,0)
 }