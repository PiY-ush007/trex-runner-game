var trex, trex_img;
var ground, ground_img;
var invisibleground;
var cloud, cloud_img;
var cloudsGroup;
var obstacleGroup;
var obs1_img;
var obs2_img;
var obs3_img;
var obs4_img;
var obs5_img;
var obs6_img;
var obstacle;

function preload() {
  trex_img = loadAnimation("trex1.png", "trex3.png", "trex4.png");
  ground_img =
    loadAnimation("ground2.png");
  cloud_img =
    loadImage("cloud.png");
  obs1_img =
    loadImage("obstacle1.png");
  obs2_img =
    loadImage("obstacle2.png");
  obs3_img =
    loadImage("obstacle3.png");
  obs4_img =
    loadImage("obstacle4.png");
  obs5_img =
    loadImage("obstacle5.png");
  obs6_img =
    loadImage("obstacle6.png");



}

function setup() {
  createCanvas(600, 200);
  trex = createSprite(50, 180, 20, 20);
  trex.addAnimation("trex", trex_img);
  trex.scale = 0.5;

  ground = createSprite(600, 190, 20, 20);
  ground.addAnimation("ground", ground_img);
  ground.velocityX = -6;

  invisibleground = createSprite(300, 195, 600, 5);
  invisibleground.visible = false;
  cloudsGroup = new Group();
  obstacleGroup = new Group();
}

function draw() {
  background(255);
  trex.collide(invisibleground);

  if (ground.x < 0) {
    ground.x = ground.width / 2;
  }
  if (keyDown("space") && trex.y > 169) {
    trex.velocityY = -12;
  }
  console.log(trex.y)
  trex.velocityY = trex.velocityY + 0.8;
  spawnClouds();
  spawnObstacles();
  drawSprites();
  text(mouseX + ',' + mouseY, 10, 15);


}


function spawnClouds() {
  if (frameCount % 60 === 0) {
    cloud = createSprite(600, 100, 10, 10);
    cloud.addImage(cloud_img);
    cloud.velocityX = -5;
    cloud.y = random(120, 160);
    cloud.scale = 0.5;
    cloud.depth = trex.depth;
    trex.depth = trex.depth + 1;
    cloudsGroup.add(cloud);
    cloud.lifetime = 120;

  }
}

function spawnObstacles() {
  if (frameCount % 60 === 0) {
    obstacle = createSprite(600, 180, 40, 20);
    var rand = Math.round(random(1, 6));
    switch (rand) {
      case 1:
        obstacle.addImage(obs1_img);
        break;
      case 2:
        obstacle.addImage(obs2_img);
        break;
      case 3:
        obstacle.addImage(obs3_img);
        break;
      case 4:
        obstacle.addImage(obs4_img);
        break;
      case 5:
        obstacle.addImage(obs5_img);
        break;
      case 6:
        obstacle.addImage(obs6_img);
        break;
      default:
        break;
    }
    obstacle.scale = 0.5;
    obstacle.velocityX = -6;
    obstacle.lifetime = 100;
    obstacleGroup.add(obstacle);
  }

}