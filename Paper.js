class Paper{
    constructor(x,y,r){

var options={
isStatic:false,
restitution:0.3,
friction:0,
density:1.2
}

this.x = x;
this.y = y;
this.r = r;    

this.image=loadImage('paper.png')

this.paper=Bodies.circle(this.x,this.y,this.r,options)
World.add(world,this.paper)
    }


display(){
  var pos = this.paper.position



push()
translate(pos.x,pos.y)
rectMode(CENTER)
image(this.image,0,0,this.r,this.r)
pop()
}
}
