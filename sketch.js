const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var score;
var score =0;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

// bodies 
ground = new Ground(580,370,300,30)
 


//Pyramid


//base

a = new Box(480,329,40,50)
b= new Box(521,329,40,50)
c= new Box(562,329,40,50)
d = new Box(603,329,40,50)
e  = new Box(644,329,40,50)
f  = new Box(685,329,40,50)
//2 floor
g = new Box(521,278,40,50)
h =new Box(562,278,40,50)
i  =new Box(603,278,40,50)
j =new Box(644,278,40,50)
//3 floor
k =new Box(562,227,40,50)
l =new Box(603,227,40,50)
//top
m = new Box(603-21,177,40,50)



newball = new Ball(20,20,20)
//slingShot = new SlingShot(this.polygon,{x:200,y:100})
s = new SlingShot(newball.body,{x:200,y:200})


   
}

function draw(){
    background("cyan");
 

    // noStroke();
    textSize(35)
    fill("white")
    text("Score " + score, width-300, 50)
    Engine.update(engine);

console.log(score)
   ground.display();
   fill("cyan")
   a.display();
   a.score();

   b.display();
   b.score();
   c.display();
   c.score();
   d.display();
   d.score();
e.display();
e.score();
f.display();
f.score();
fill("white")
g.display();
g.score();
i.display();
i.score();
h.display();
h.score();
j.display();
j.score();
fill("red")
k.display();
k.score();
l.display();
l.score();
fill("blue")
m.display();
m.score();
newball.display();
//slingShot.display();
s.display();

}

    
function mouseDragged(){
    Matter.Body.setPosition(newball.body, {x: mouseX , y: mouseY});
}
function mouseReleased(){
    s.fly();
}
function keyPressed(){
    if(keyCode === 32){
       s.attach(newball.body);
    }
}
async function getBackgroundImg(){
var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
    var responseJSON = await response.json();

    var datetime = responseJSON.datetime;
    var hour = datetime.slice(11,13);
    
    if(hour>=0600 && hour<=1900){
        
        background("cyan");
       
    }
    else{
        background("black");
    }
}