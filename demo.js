class Ball{
    constructor(x, y, radius ) {
        var options = {
        
            'restitution':0.8,
            'friction':0.4,
            'density':1.0
        }
       
        this.body = Bodies.circle(x,y,radius, options);
      this.radius=radius
      
        World.add(world, this.body);
      }
      display(){
        //var angle = this.body.angle;
      
        var pos = this.body.position;
       
      
        ellipseMode(CENTER);
        ellipse(pos.x,pos.y,this.radius)
 
      }
      
      }
     
     