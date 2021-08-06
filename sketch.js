var runner,running ;
var path,paths ;
var line ;
function preload(){
  running = loadAnimation("Runner-1.png","Runner-2.png") ;

  paths = loadImage("path.png") ;
}

function setup(){
  createCanvas(1000,700);
  line  = createSprite(350,350,5,700) ;

  path = createSprite(200,200) ;
  path.addImage(paths) ;

  runner = createSprite(200,500) ;
  runner.addAnimation("running",running) ;
  runner.scale = 0.1 ;
}

function draw() {
  console.log(runner.x) ;
  background("white");
  path.velocityY = 3 ;
  if (path.y>450) {
    path.y= 325 ;
  }

  if (keyDown(LEFT_ARROW)){
    runner.x = runner.x-2 ;
  }

  if (keyDown(RIGHT_ARROW)) {
    runner.x = runner.x+2 ;
  }

  if (runner.x<130) {
    runner.x =130 ;
  }

  if (runner.x>270) {
    runner.x = 270 ;
  }
  drawSprites() ;
}
