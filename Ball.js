class Ball{
    constructor(x, y, width, height) {
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
        }
        this.body = Bodies.circle(x, y, width, height, options);
        this.width = width;
        this.height = height;

        this.image = loadImage("sprites/ball.png");

        World.add(world, this.body);
      }
      display(){
        
        push();
        
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 50, 50, this.width, this.height);
        pop();
      }
}