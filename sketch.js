const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{

}

function setup() {
	createCanvas(1200, 800);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	
      ground1 = new Ground(430,590,260,20)
      ground2 = new Ground(850,400,200,20)
    //   layer1
      block1 = new Block(330,550,40,60)
      block2 = new Block(370,550,40,60)
      block3 = new Block(410,550,40,60)
      block4 = new Block(450,550,40,60)
      block5 = new Block(490,550,40,60)
      block6 = new Block(530,550,40,60)
    //   layer2
    block7 = new Block(346,490,40,60)
    block8 = new Block(387,490,40,60)
    block9 = new Block(427,490,40,60)
    block10 = new Block(467,490,40,60)
    block11 = new Block(508,490,40,60)

    // layer3
    block12 = new Block(364,430,40,60)
    block13 = new Block(404,430,40,60)
    block14 = new Block(445,430,40,60)
    block15 = new Block(486,430,40,60)

    // layer4
    block16 = new Block(382,370,40,60)
    block17 = new Block(424,370,40,60)
    block18 = new Block(465,370,40,60)

    // layer5
    block19 = new Block(400,310,40,60)
    block20 = new Block(442,310,40,60)

    // layer6
    block21 = new Block(417,250,40,60)

    // layer7(2)
    block22 = new Block(780,360,40,60)
    block23 = new Block(820,360,40,60)
    block24 = new Block(860,360,40,60)
    block25 = new Block(900,360,40,60)

    // layer8(2)
    block26 = new Block(800,300,40,60)
    block27 = new Block(840,300,40,60)
    block28 = new Block(880,300,40,60)

    // layer9(2)
    block29 = new Block(815,240,40,60)
    block30 = new Block(855,240,40,60)

    // layer10(2)
    block31 = new Block(840,180,40,60)

    polygon = new Polygon();

     slingshot = new Slingshot(polygon.body,{x:60,y:400})

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(100);
text(mouseX+','+mouseY,50,100)
ground1.display()
ground2.display()




block1.display()
block2.display()
block3.display()
block4.display()
block5.display()
block6.display()

polygon.display()




block7.display()
block8.display()
block9.display()
block10.display()
block11.display()


block12.display()
block13.display()
block14.display()
block15.display()


block16.display()
block17.display()
block18.display()


block19.display()
block20.display()



block21.display()


block22.display()
block23.display()
block24.display()
block25.display()


block26.display()
block27.display()
block28.display()


block29.display()
block30.display()


block31.display()

 slingshot.display()
 

  drawSprites();
 
}


function mouseDragged(){
  Matter.Body.setPosition(polygon.body,{x:mouseX,y:mouseY})
}

function mouseReleased(){
  slingshot.fly()
}

