class Bob{
    constructor(x,y,r){
        var options = {
            'isStatic':false,
            'restitution':1.0,
            'friction':0,
            'density':0.5
        }
        this.x = x;
        this.y = y;
        this.r = r;
        this.body = Bodies.circle(this.x, this.y, this.r,options);
      
        World.add(world,this.body);
    }
    display(){
            var angle = this.body.angle
			var pos=this.body.position;		
		    push()															
            translate(pos.x,pos.y);
            rotate(angle)
			ellipseMode(RADIUS)
			fill("red")
			ellipse(0,0,this.r, this.r);
			pop()
    }
}