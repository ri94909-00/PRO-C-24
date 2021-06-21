class Iron{

constructor(x,y){

var options = {

    "restitution":0.8,
    "density":3,
    "friction":30,


}
this.body = Bodies.rectangle(x, y, 100, 100, options);

this.width = 150;
this.height = 40;

World.add(world,this.body);

}

display(){

    var pos = this.body.position;
    push()
    translate(pos.x, pos.y);
    rectMode(CENTER)
    strokeWeight(3);
    fill('orange')
    rect(0,0,this.width,this.height);
    pop()



}





}