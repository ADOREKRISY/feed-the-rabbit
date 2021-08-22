var garden,rabbit;
var gardenImg,rabbitImg;

var apple, appleImg;

var grass, grassImg;

var leaf, leafImag

var redleaf, redleafImg

var orangeleaf, orangeleafImg

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png");
  grassImg = loadImage("grass.png");
  leafImg = loadImage("leaf.png");
  orangeleafImg = loadImage("orangeLeaf.png")
  redleafImg = loadImage("redImage.png")
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);


}


function draw() {
  background(0);
  
  edges= createEdgeSprites();
  rabbit.collide(edges);

spawnapples()
spawngrass();
spawnleaf();
spawnorangeleaf();
spawnredleaf();
  drawSprites();
}


function spawnapples() {
  //write code here to spawn the clouds
  if (frameCount % 60 === 0) {
    apple = createSprite(random(0,400),0,40,10);
    apple.addImage(appleImg)
    //apple.x = Math.round(random(10,60))
    apple.scale = 0.05;
    apple.velocityY = 3;
    
    
    //assigning lifetime to the variable
    apple.lifetime = 200;
    
    //adjust the depth
    apple.depth = rabbit.depth
    rabbit.depth = rabbit.depth + 1;
    }
}

function spawngrass() {
  //write code here to spawn the clouds
  if (frameCount % 60 === 0) {
    grass = createSprite(random(0,400),random(300,400));
    grass.addImage(grassImg)
    grass.scale = 0.4;
    
    
    //assigning lifetime to the variable
    //grass.lifetime = 200;
    
    //adjust the depth
    grass.depth = rabbit.depth
    rabbit.depth = rabbit.depth + 1;
    }
}

function spawnleaf() {
  //write code here to spawn the clouds
  if (frameCount % 60 === 0) {
    leaf = createSprite(random(0,400),0,40,10);
    leaf.addImage(leafImg)
    //apple.x = Math.round(random(10,60))
    leaf.scale = 0.05;
    leaf.velocityY = 3;
    
    
    //assigning lifetime to the variable
    leaf.lifetime = 200;
    
    //adjust the depth
    leaf.depth = rabbit.depth
    rabbit.depth = rabbit.depth + 1;
    }
}

function spawnorangeleaf() {
  //write code here to spawn the clouds
  if (frameCount % 60 === 0) {
    orangeleaf = createSprite(random(0,400),0,40,10);
    orangeleaf.addImage(orangeleafImg)
    //apple.x = Math.round(random(10,60))
    orangeleaf.scale = 0.05;
    orangeleaf.velocityY = 3;
    
    
    //assigning lifetime to the variable
    orangeleaf.lifetime = 200;
    
    //adjust the depth
    orangeleaf.depth = rabbit.depth
    rabbit.depth = rabbit.depth + 1;
    }
}

function spawnredleaf() {
  //write code here to spawn the clouds
  if (frameCount % 60 === 0) {
    redleaf = createSprite(random(0,400),0,40,10);
    redleaf.addImage(redleafImg)
    //apple.x = Math.round(random(10,60))
    redleaf.scale = 0.05;
    redleaf.velocityY = 3;
    
    
    //assigning lifetime to the variable
    redleaf.lifetime = 200;
    
    //adjust the depth
    redleaf.depth = rabbit.depth
    rabbit.depth = rabbit.depth + 1;
    }
}