class Ground{
    constructor(x,y){
        var options ={
            isStatic:true
        }
        this.body=Bodies.rectangle(x,y,width,10,options);
        this.width=width;
        this.height=10;
        World.add(world,this.body)
    }
    
        display() { 
            var groundPos=this.body.position; 
           
            push() 
            
            translate(groundPos.x, groundPos.y); 
            rectMode(CENTER);
            fill("black") ;
             rect(0,0,this.width, this.height); 
             pop() 
            }
        }