const Engine = Matter.Engine;
const World = Matter.World;
const Events = Matter.Events;
const Bodies = Matter.Bodies;

 
var engine , world ;
var ground ;
var score = 0 ;
var turn = 0 ;
var balls= [];
var plinkos = [];
var divisions = [];
var ball ;

var gameState ="start";
var divisionHeight=300;



function setup() {
 createCanvas(800,800);

 engine = Engine.create();
 world = engine.world;
  
 ground = new Ground(400,780,800,20);

 /*divider1 = new Division(475,550,5,450);
 divider2 = new Division(375,550,5,450);
 divider3 = new Division(275,550,5,450);
 divider4 = new Division(175,550,5,450);
 divider5 = new Division(75,550,5,450);
 divider6 = new Division(5,550,5,450);*/

 for (var k = 0; k <=width; k = k + 80) {
   divisions.push(new Division(k, height-divisionHeight/2, 10, divisionHeight));
 }

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

    
}

function draw() {
 

  background(0,0,0);  
  textSize(30);
  fill("white");
  text("Score : "+score,10,40);
  
  textSize(35)
  fill("white")
  text(" 500 ", 5, 550);
  text(" 500 ", 80, 550);
  text(" 500 ", 160, 550);
  text(" 500 ", 240, 550);
  text(" 100 ", 320, 550);
  text(" 100 ", 400, 550);
  text(" 100 ", 480, 550);
  text(" 200 ", 560, 550);
  text(" 200 ", 640, 550);
  text(" 200 ", 720, 550);

  Engine.update(engine);
  ground.display();
  
  if ( gameState =="end") {
      textSize(100);
      text("GameOver", 150, 250);
  }

  for (var i = 0; i < plinkos.length; i++) {
     
    plinkos[i].display();
    }
    
    if(ball!=null)
    {
       ball.display();
        
        if (ball.body.position.y>760)
        {
              if (ball.body.position.x < 300) 
              {
                  score=score+500;      
                  ball=null;
                  if ( turn>= 5) gameState ="end";                          
              }


              else if (ball.body.position.x < 600 && ball.body.position.x > 301 ) 
              {
                    score = score + 100;
                    ball=null;
                    if ( turn>= 5) gameState ="end";

              }
              else if (ball.body.position.x < 900 && ball.body.position.x > 601 )
              {
                    score = score + 200;
                    ball=null;
                    if ( turn>= 5)  gameState ="end";

              }      
              
        }
  
      }

   for (var k = 0; k < divisions.length; k++) 
   {
     divisions[k].display();
   }
  
 /* divider1.display();
  divider2.display();
  divider3.display();
  divider4.display();
  divider5.display();
  divider6.display();*/
 
}

function mousePressed(){
   if (gameState!== "end"){
      turn++ ;
      ball=new Ball(mouseX, 10, 10, 10);
   }
}