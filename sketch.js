const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1;
var backgroundImg,platform;
var bird, slingshot;

function preload() {
    backgroundImg = loadImage("download.png");
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
    
    
   
 box3 = new Box(700,240,70,70);
    box4 = new Box(920,240,70,70);
    box1 = new Box(700,320,70,70);
    box2 = new Box(920,320,70,70);
    pig1 = new Pig(810, 350);
    log1 = new Ground(810,260,300, 20);
    log2 = new Ground(510,100,300, 20);
    //up pllatform
    box6 = new Box(430,60,70,70);
    box7 = new Box(570,60,70,70);

   
    pig3 = new Pig(810, 220);

   

    box5 = new Box(810,160,70,70);
    

    bird = new Bird(100,50);

    //log6 = new Log(230,180,80, PI/2);
    slingshot = new SlingShot(bird.body,{x:200, y:50});
}

function draw(){
    background(backgroundImg);
    Engine.update(engine);
    strokeWeight(4);
    box1.display();
    box2.display();
    ground.display();
    
    log1.display();
    log2.display();

    box3.display();
    box4.display();
    box6.display();
    box7.display();
    
   
   

    box5.display();
    

    bird.display();
    
    //log6.display();
    slingshot.display();    
}

function mouseDragged(){
    Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}