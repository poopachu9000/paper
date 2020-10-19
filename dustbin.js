class dustbin
{
	constructor(x,y,width,height)
	{
		this.x=x;
		this.y=y;
		this.dustbinWidth=width;
		this.dustbinHeight=height;
		
		this.angle=0;	
		
		this.dustbinbody=Bodies.rectangle(this.x, this.y, this.dustbinWidth, this.dustbinHeight, {isStatic:true})
		World.add(world, this.dustbinbody)
		
	}
	display()
	{
			var pos=this.dustbinbody.position;

			
			//Holla
			push()
			translate(pos.x, pos.y);
			rectMode(CENTER)
			//strokeWeight(4);
			angleMode(RADIANS)
			fill(255)
			stroke(255)
			rotate(this.angle)
			rect(0,0,this.dustbinWidth, this.dustbinHeight);
			pop()

		
			
	}

}