class Polygon{
    constructor(x,y){
    var options ={
        isStatic:false,
        restitution:0.3,
        friction:0.5,
        density:1.2
    }
    this.body=Bodies.circle(x,y,30,options);
    this.radius=30;
    //this.sides = 6;
    World.add(world,this.body)
    }
    display(){
        var pos = this.body.position;
        fill("blue");
        ellipseMode(CENTER);
        ellipse(pos.x,pos.y,this.radius);
    }

}