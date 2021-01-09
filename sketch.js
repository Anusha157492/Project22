var helicopterIMG, helicopterSprite, packageSprite,packageIMG, package2sprite, package2IMG, package3sprite,package3IMG;
var packageBody, packageBody2, packageBody3, ground;
var line1, line2, line3;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
    package2IMG=loadImage("package.png")
	package3IMG=loadImage("package.png")
	

}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	package2sprite=createSprite(400,80,10,10);
	package2sprite.addImage(packageIMG)
	package2sprite.scale-0.2

	package3sprite=createSprite(330,80,10,10);
	package3sprite.addImage(package2IMG)
	package3sprite.scale-0.6

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)



	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:3, isStatic:true});
	World.add(world, packageBody);
	

	

	 line1 - createSprite(width/2, height-35, width,10);
	 line1.shapeColor="red"
	 line2 - createSprite(510,610,20,100);
	 line2.shapeColor="red"
	 line3.createSprite(310,610,20,100);
     line3.shapeColor="red"

	engine = Engine.create();
	world = engine.world;
  
	packageBody = Bodies.circle(width/2, 200, 10, {isStatic:true});
	World.add(world, packageBody);

	packageBody2= Bodies.circle(width/2, 200, 10, {isStatic:true});
	World.add(world, packageBody2);

	pakcageBody3 = Bodies.circle(width/2, 200, 15, {isStatic:true})
    World.add(world, packaageBody3);
	
	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);

    Engine.run(engine);


}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 

  package2sprite.x= packageBody2.position.x
  package2sprite.y= packageBody2.position.y

  package3sprite.x= packageBody3.position.x
  package3sprite.y= packageBody3.position.y


   
  packageSprite.collide(line1);
  packageSprite.collide(line2);
  packageSprite.collide(line3);

  package2sprite.collide(line1);
  packageSprite.collide(line2);
  package2sprite.collide(line3);

  package3sprite.collide(line1);
  package3sprite.collide(line2);
  package3sprite.collide(line3);


  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
	Matter.Body.setStatic(packageBody, false);
}
 if (keyCode === DOWN_ARROW) {
	 Matter.Body.setStatic(packageBody2, false);
 }

if (keyCode === DOWN_ARROW){
	Matter.Body.setStatic(packageBody3, false);
}

}



