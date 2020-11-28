class Drops
{
    constructor(x,y)
    {
        var options =
        {
            friction: 0.1,
            restitution : 0.01
        }
        this.body = Bodies.circle(x,y,6,options);
        this.x = x;
        this.y = y;  
        this.radius = 6;
        World.add(world,this.body);
    }
    display()
    {
        push();
        fill("blue");
        ellipseMode(CENTER);
        ellipse(this.body.position.x,this.body.position.y,this.radius,this.radius);
        pop();
    }
    update()
    {
        if(this.body.position.y > height)
        {
            Matter.Body.setPosition(this.body,{x:random(0,400),y:random(0,450)})
        }
    }
}