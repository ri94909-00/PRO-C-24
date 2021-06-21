class Rubber{

	constructor(x,y,r)
	{
           var options = {

        "restitution":0.3,
	    "density":5,
		"friction":1,

		   }
		

		this.body=Bodies.circle( x, y, (this.r-20)/2, options);
		
		this.width=50;
		this.height=50;
		
		World.add(world, this.body);

	}
	display()
	{
			var rubberpos=this.body.position;		
			push()
			translate(rubberpos.x, rubberpos.y);
			rectMode(CENTER)
			rect(0,0,this.width,this.height);
			strokeWeight(4);
			stroke("black");
			fill("darkblue");
			eclipse(0,0,this.r,this.r)
			pop()
	}

}