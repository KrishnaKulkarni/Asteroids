(function (root){
   var Asteroids = root.Asteroids = (root.Asteroids || {});

   //Should asteroid take pos, vel as parameters?
   var Bullet = Asteroids.Bullet = function (dir, position){

     //this.vel --> the same vel that the ship is usingg
    var bVel = [Bullet.normalizeDir(dir)[0]*Bullet.SPEED,
      Bullet.normalizeDir(dir)[1]*Bullet.SPEED];

    Asteroids.MovingObject.call(this, position,
       bVel, Bullet.RADIUS, Bullet.COLOR, Bullet.STROKE);
    };

   Bullet.normalizeDir = function(direction){
     var dx = direction[0];
     var dy = direction[1];
     var mag = Math.sqrt((dx * dx) + (dy * dy));

     return [dx / mag, dy / mag];
   }

   Bullet.RADIUS = 2;
   Bullet.COLOR = "red";
   Bullet.SPEED = 8;
	 Bullet.STROKE = "transparent";

   Bullet.inherits(Asteroids.MovingObject);

   Bullet.prototype.wrapPosition = function(){
     dmX = Asteroids.Game.DIM_X;
     dmY = Asteroids.Game.DIM_Y;

     if(this.pos[0] < (0 - this.rad) || this.pos[0] > (dmX + this.rad)
     || this.pos[1] < (0 - this.rad) || this.pos[1] > (dmY + this.rad)){
       this.pos[0] = null;
       this.pos[1] = null;
     };


   };


})(this);