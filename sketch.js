var bullet, wall,thickness
var speed,weight 
var damage



function setup() {
    createCanvas(1600, 400);
    thickness =random(22,83)
  bullet=createSprite(50, 200, 50, 50);
    wall = createSprite(1200, 200, thickness,height / 2);
    wall.shapeColor=color(80,80,80)
    speed = random(223, 321);
    weight = random(30,52)
    bullet.velocityX=speed

}

function draw() {
  background(255,255,255);  
    if (wall.x - bullet.x < bullet.width / 2 + wall.width / 2) {
        damage = 0.5 * weight * speed * speed / thickness*thickness*thickness
bullet.velocityX=0
        if (damage < 10) {
            bullet.shapeColor = "green";
        }

        

        if (damage > 10) {
            bullet.shapeColor = "red";
        }
    }


    drawSprites();
}