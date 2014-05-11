(function (root){
   var Asteroids = root.Asteroids = (root.Asteroids || {});

   //Should asteroid take pos, vel as parameters?
   var Ship = Asteroids.Ship = function (pos, vel){
    Asteroids.MovingObject.call(this, pos, vel, Ship.RADIUS, Ship.COLOR);
		this.angle = 0;
    };

		
	 
   Ship.RADIUS = 12;
   Ship.COLOR = "transparent";

   Ship.inherits(Asteroids.MovingObject);

	 Ship.prototype.direction = function(){
		 return ([ parseFloat(Math.sin(this.angle).toFixed(2)),
		 -1 * parseFloat(Math.cos(this.angle).toFixed(2))]);
	 };

   Ship.prototype.power = function(impulse){
		 var dir = this.direction();
     this.vel[0] += (impulse[0] * dir[0]);
     this.vel[1] += (impulse[1] * dir[1]);
   };
	 
	 Ship.prototype.decelerate = function(brake){
		 // var dir = this.direction();
     this.vel[0] *= brake;
		 // if(this.vel[0] < 0) this.vel[0] = 0;
     this.vel[1] *= brake;
		 // if(this.vel[1] < 0) this.vel[1] = 0;
	 };

   Ship.prototype.fireBullet = function(){
		 
		 var bulletDir = this.direction();
		 var bulletPos = this.pos.slice(0);
		 bulletPos[0] += (13 * bulletDir[0]);
		 bulletPos[1] += (13 * bulletDir[1]);
		      var bullet = new Asteroids.Bullet(bulletDir, bulletPos);
		 return bullet;

   };
	 
   Ship.prototype.draw = function(ctx){
     // draw circle w/ circle_radius = this.rad
     // and circle_position = this.pos
    ctx.fillStyle = this.col;
 		ctx.strokeStyle = this.stroke
		ctx.lineWidth = 1;
		
		ctx.save();
		ctx.translate(this.pos[0], this.pos[1]);
		
		ctx.rotate(this.angle);
    ctx.beginPath();
 		ctx.moveTo(0, -13);
		ctx.lineTo(8, 11);
		ctx.lineTo(-8, 11);
		ctx.closePath();
		ctx.fill();
		ctx.stroke(); 
		
		ctx.restore();
		 
   };
	 
	 Ship.prototype.rotateRight = function(){
		 this.angle += (Math.PI / 16);
		 this.angle %= (Math.PI * 2);
	 }
	 
	 Ship.prototype.rotateLeft = function(){
		 this.angle -= (Math.PI / 16);
		 this.angle += (Math.PI * 2);
		 this.angle %= (Math.PI * 2);
	 }


})(this);