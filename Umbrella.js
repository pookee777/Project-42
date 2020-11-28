class Umbrella
{
    constructor(x,y)
    {
        var options =
        {
            isStatic:true
        }
        this.image = loadImage("Walking/1.png");
        this.umbrellas = Bodies.circle(x,y,55,options);
        this.radius = 55;
        this.y = y;
        this.x = x;
        World.add(world,this.umbrellas);
    }
    display()
    {
        var pos = this.umbrellas.position
        push();
        imageMode(CENTER);
        image(this.image,pos.x,pos.y+71,300,300);
        pop();
    }
}