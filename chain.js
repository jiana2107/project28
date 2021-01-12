class Chain{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.005,
            length: 1
        }
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }

    fly(){
        this.sling.bodyA=null;
      }

    attach(body){
      this.sling.bodyA=body;
    }

    display(){
        if(this.sling.bodyA){
        var pointA = this.sling.bodyA.position;
        var pointB = this.sling.pointB;
        strokeWeight(4);
        stroke("grey")
        line(pointA.x, pointA.y, pointB.x, pointB.y);
    }
}
    
}
