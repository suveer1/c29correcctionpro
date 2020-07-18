class Box{
    constructor(x,y){
        var options ={
            isStatic:false
        }
        this.body=Bodies.rectangle(x,y,30,30,options);
        this.width=30;
        this.height=30;
        World.add(world,this.body)
    }
    
        display() { 
            var groundPos=this.body.position; 
            push() 
            translate(groundPos.x, groundPos.y); 
            rectMode(CENTER)
             strokeWeight(2);
             stroke("white");
             fill("magenta") 
             rect(0,0,this.width, this.height); 
             pop() 
            }
        }