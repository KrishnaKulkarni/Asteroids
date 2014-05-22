(function (root){
   var Asteroids = root.Asteroids = (root.Asteroids || {});

   var Asteroid = Asteroids.Asteroid = function (pos, vel, size){
		this.size = size;
    Asteroids.MovingObject.call(this, pos, vel, Asteroid.RADIUS[size], Asteroid.COLOR);
   };

    Asteroid.inherits(Asteroids.MovingObject); //Do we need Asteroids.MovingObject vs. just MovingObject
    // Asteroid.RADIUS = 30;
		Asteroid.RADIUS = {
			'big' : 35,
			'medium' : 24,
			'small' : 12
		}
    Asteroid.COLOR = "transparent";
		Asteroid.SIZES = ['big', 'medium', 'small']

    Asteroid.randomAsteroid = function(dimX, dimY, posX, posY, size){
      var y = posY || Math.random() * dimY;
      var x = posX || Math.random() * dimX;
      var v = _randomVec();
			var s = size || Asteroid.SIZES[Math.floor((Math.random() * 3))]
      return new Asteroid([x, y], v, s);
    };

    function _randomVec(){
      var scale1 = 2;
      var scale2 = 2;
      return [Math.random() * scale1, Math.random() * scale2];
    }; // => [5, 7]


})(this);