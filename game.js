(function (root){
   var Asteroids = root.Asteroids = (root.Asteroids || {});

   //Should asteroid take pos, vel as parameters?
   var Game = Asteroids.Game = function (ctx){
     this.ctx = ctx;

     numAsteroids = 8; //Change later
     this.asteroids = [];
		 this.addAsteroids(numAsteroids);

     this.ship = new Asteroids.Ship([Game.DIM_X / 2, Game.DIM_Y / 2], [0,0]);
     this.bullets = [];
   };

   Game.DIM_X = 800;//connect this later to canvas size
   Game.DIM_Y = 600;
   Game.FPS = 30;

   Game.prototype.addAsteroids = function(numAsteroids) {
     for(var i = 0; i < numAsteroids; i++){
      this.asteroids.push(
				Asteroids.Asteroid.randomAsteroid(Game.DIM_X, Game.DIM_Y, null, null, 'big'));
     };
   };

   Game.prototype.draw = function(){
     var game = this;
     game.ctx.clearRect(0, 0, Game.DIM_X, Game.DIM_Y);

     game.asteroids.forEach(function (asteroid){
       asteroid.draw(game.ctx);
     });

     game.ship.draw(game.ctx);

     game.bullets.forEach(function (bullet){
       bullet.draw(game.ctx);
     });
   };

   Game.prototype.move = function(){
     this.asteroids.forEach(function (asteroid){
       asteroid.move();
     });

     this.ship.move();

     this.bullets.forEach(function (bullet){
       bullet.move();
     });
   };
	 
	 Game.prototype.applyShipFriction = function(){
		 if(this.ship.vel[0] != 0 || this.ship.vel[1] != 0){
			 var drag = 0.995;
			 this.ship.decelerate(drag);
		 }
		 else {
		 };
	 };

   Game.prototype.step = function(){

     this.move();
     this.draw();
     this.checkCollisions();
     this.removeBullets();
		 this.applyShipFriction();
		 this.replaceAsteroids();
   };

  Game.prototype.start = function(){
    //console.log("This Ctx");
    //console.log(this.ctx);
    var game = this;
    //game.draw();
    // key('down', function(){  game.ship.decelerate(0.98); });
    // key('s', function(){  game.ship.decelerate(0.98); });
    key('down', function(){  game.ship.reverse([0.1, 0.1]); });
    key('s', function(){  game.ship.reverse([0.1, 0.1]); });

    key('up', function(){ game.ship.power([0.35, 0.35]); });
    key('w', function(){ game.ship.power([0.35, 0.35]); });
		

    key('right', function(){  game.ship.rotateRight(); });
    key('d', function(){  game.ship.rotateRight(); });
		

    key('left', function(){ game.ship.rotateLeft(); });
    key('a', function(){ game.ship.rotateLeft(); });
		
    //key('b', game.ship.power([0, 0.25]));
    key('space', function(){ game.fireBullet(); });

    nIntervId = window.setInterval(game.step.bind(game), Game.FPS);
  }

  Game.prototype.checkCollisions = function(){
    var game = this;
    game.asteroids.forEach(function (asteroid){
      if(asteroid.isCollidedWith(game.ship)){
        game.stop();
        alert("Ship hit! All is lost!");
      };
    });
  };

  Game.prototype.stop = function(){
    clearInterval(nIntervId);
  };

  Game.prototype.fireBullet = function(){
    var bullet = this.ship.fireBullet();
    if(bullet){
      this.bullets.push(bullet);
    };
  };

  Game.prototype.removeBullets = function(){
    var destAsts = [];
    var updatedBullets = [];
    for(var i = 0; i < this.bullets.length; i++){
      var survived = true;
      var bullet = this.bullets[i];
      if(bullet.pos[0] || bullet.pos[1]){
        for(var j = 0; j < this.asteroids.length; j++){
          var asteroid = this.asteroids[j];
          if(bullet.isCollidedWith(asteroid)){
            survived = false;
            destAsts.push(asteroid);
          };

        };
      }
      else {
        survived = false;
      };

      if(survived){
        updatedBullets.push(bullet);
      }

    };

    this.bullets = updatedBullets;
    this.removeAsteroids(destAsts);
  };

	Game.prototype.replaceAsteroids = function(){		
		if(this.asteroids.length === 0){
			this.addAsteroids(8);
		}
	};

  Game.prototype.removeAsteroids = function(destAsts){
    updatedAsteroids = [];
    for(var j = 0; j < this.asteroids.length; j++){
      var asteroid = this.asteroids[j];
      var idx = destAsts.indexOf(asteroid);
      if(idx === -1){
         updatedAsteroids.push(asteroid);
      }
			else if(asteroid.size === 'big') {
	      var frag1 = Asteroids.Asteroid.randomAsteroid(null, null, asteroid.pos[0], asteroid.pos[1], 'medium');
	      var frag2 = Asteroids.Asteroid.randomAsteroid(null, null, asteroid.pos[0], asteroid.pos[1], 'medium');
				
				updatedAsteroids.push(frag1, frag2);
			}
			else if(asteroid.size === 'medium') {
	      var frag1 = Asteroids.Asteroid.randomAsteroid(null, null, asteroid.pos[0], asteroid.pos[1], 'small');
	      var frag2 = Asteroids.Asteroid.randomAsteroid(null, null, asteroid.pos[0], asteroid.pos[1], 'small');
				
				updatedAsteroids.push(frag1, frag2);
			}
    }
    this.asteroids = updatedAsteroids;
  };

})(this);