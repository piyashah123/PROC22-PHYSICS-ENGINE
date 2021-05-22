const Engine= Matter.Engine;
const World  =Matter.World;
const Bodies =Matter.Bodies;
var engine,box,world,ball;



function setup()


{   var canvas=createCanvas(400,400);
    
       engine= Engine.create();
       world=engine.world;
      var options={
        isStatic:true
      }

       box=Bodies.rectangle(200,380,400,20,options)
       World.add(world,box)
       var option={
         restitution:1
       }
       
       ball=Bodies.circle(200,100,50,option)
       World.add(world,ball)
       console.log(ball)
}

function draw(){
background(0);
Engine.update(engine)
rectMode(CENTER)
rect(box.position.x,box.position.y,400,20)
ellipseMode(RADIUS)
ellipse(ball.position.x,ball.position.y,50,50)
}
