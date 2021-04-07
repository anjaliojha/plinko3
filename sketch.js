const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
 
var engine , world ;
var ground , divider1;
var score = 0 ;
var turn = 0 ;
var particles = [];
var plinkos = [];
var divisions = [];
//var particle ;
var play = 1;
var end = 0;
var gameState = play ;
var divisionHeight=300;

function preload(){
  
}


function setup() {
 var canvas =  createCanvas(480,800);
 // createSprite(400, 200, 50, 50);


 engine = Engine.create();
 world = engine.world;
  
 ground = new Ground(240,780,480,20);

 divider1 = new Division(475,550,5,450);
 divider2 = new Division(375,550,5,450);
 divider3 = new Division(275,550,5,450);
 divider4 = new Division(175,550,5,450);
 divider5 = new Division(75,550,5,450);
 divider6 = new Division(5,550,5,450);

 for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }

    particle = new Particle(10,10,10)
 //particles = new Particle(0,0,10);
 //divider7 = new Division(375,550,5,450);
}

function draw() {
  Engine.update(engine);

  background(0,0,0);  
  textSize(30);
  fill("white");
  text("Score : "+score,10,40);
  
  textSize(35);
  fill("white");
  text("500",100,450);
  
  textSize(35);
  fill("white");
  text("400",10,450);
  
  textSize(35);
  fill("white");
  text("300",200,450);
   ``
  textSize(35);
  fill("white");
  text("200",300,450);

  textSize(35);
  fill("white");
  text("100",400,450);
 // if (particle!==null){
    // particle.display();
 
//}
  drawSprites();
  
  for (var i = 0; i < plinkos.length; i++) {
     
    plinkos[i].display();
    
    
  }

  ground.display();
  divider1.display();
  divider2.display();
  divider3.display();
  divider4.display();
  divider5.display();
  divider6.display();
 // plinko.display();
  //particles.display()
if (gameState === play){
    
    if (frameCount%60===0){
     // particle.display();
      particles.push(new Particle(random(width/2-30, width/2+30), 10,10));
    }
     

 for (var j = 0; j < particles.length; j++) {
  
    particles[j].display();

    if (particles[j].body.position.y>550){
      if (particles[j].body.position.x>5 && particles[j].body.position.x<175){
          score = score+100 ;
         // particles[j].body = null ;
      }
      else if (particles[j].body.position.x>175 &&particles[j].body.position.x<275){
        score = score+100 ;
       // particles[j].body = null ;
    }
    else if (particles[j].body.position.x>275 &&particles[j].body.position.x<375){
     score = score+100 ;
   //  particles[j].body = null ;
  }
  else if (particles[j].body.position.x>375 &&particles[j].body.position.x<475){
     score = score+100 ;
    // particles[j].body = null ;
  }
  
    else if (particles[j].body.position.x>475){
          score = score+100 ;
        //  particles[j].body = null ;
      }
   }
  }
}

/*if (turn===5){
   textSize(50);
   fill("white");
   text("Gameover",300,300);
}*/
  //divider7.display();
}

function mousePressed(){
   if (gameState!== end){
      turn++ ;
     // particle = new Particle(mouseX,10,10)
      //particle.display();
   }
}