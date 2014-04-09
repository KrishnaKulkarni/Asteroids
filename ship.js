(function (root){
   var Asteroids = root.Asteroids = (root.Asteroids || {});

   //Should asteroid take pos, vel as parameters?
   var Ship = Asteroids.Ship = function (pos, vel){
    Asteroids.MovingObject.call(this, pos, vel, Ship.RADIUS, Ship.COLOR);
    // console.log("thiss pos:");
    // console.log(this.pos);
    // console.log("thiss :");
    // console.log(this);


    };

   Ship.RADIUS = 15;
   Ship.COLOR = "blue";

   Ship.inherits(Asteroids.MovingObject);

   Ship.prototype.power = function(impulse){
     this.vel[0] += impulse[0];
     this.vel[1] += impulse[1];
   };

   Ship.prototype.fireBullet = function(){

     if(this.vel[0] !== 0 || this.vel[1] !== 0){

        var bVel = this.vel.slice(0);
        var bPos = this.pos.slice(0);


        var bullet = new Asteroids.Bullet(bVel, bPos);
        return bullet;
     }
     else{
       return null;
     };

   };


})(this);