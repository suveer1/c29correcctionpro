
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var p1;
var b1,b2,b3,b4,b5;
function setup() {
	createCanvas(800, 400);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	p1 = new Polygon(200,150);
	var x = 600
	var y = 300
	b1 = new Box(600,300);
	b2 = new Box(x+30,y);
	b3 = new Box(x+60,y);
	b4 = new Box(x+90,y);
	b5 = new Box(x+120,y);
	
	var a = 615;
	var b =270;

	b6 = new Box(a,b);
	b7 = new Box(a+30,b);
    b8 = new Box(a+60,b);
	b9 = new Box(a+90,b);

	var c = 630;
	var d = 240;

	b10 = new Box(c,d);
	b11 = new Box(c+30,d);
	b12 = new Box(c+60,d);
	
	var e = 645;
	var f = 210;

	b13 = new Box(e,f);
	b14 = new Box(e+30,f);

	b15 = new Box(660,190);
	
	g1 = new Ground(400,330);
	
	s1 = new SlingShot(p1.body,{x:180,y:160});
	Engine.run(engine);
  
}


function draw() {
  
  background("pink");
  p1.display();

  b1.display();
  b2.display();
  b3.display();
  b4.display();
  b5.display();

  g1.display();

  b6.display();
  b7.display();
  b8.display();
  b9.display();
 
  b10.display();
  b11.display();
  b12.display();

  b13.display();
  b14.display();

  b15.display();

  s1.display();
}
function mouseDragged(){
    Matter.Body.setPosition(p1.body, {x: mouseX , y: mouseY});
}
function mouseReleased(){
    s1.fly();
}


