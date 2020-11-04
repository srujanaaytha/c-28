class Slingshot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            bodyB: pointB,
            stiffness: 0.04,
            length: 10
        }
        //this.pointB = pointB;
        this.slingshot= Constraint.create(options);
        World.add(world, this.slingshot);
    }

    display(){
        var pointA = this.sling.bodyA.position;
        var pointB = this.sling.bodyB.position;
        strokeWeight(4);
        line(pointA.x, pointA.y, pointB.x, pointB.y);
    }
    
}