//
// Function.prototype.inherits = function (BaseClass) {
//   function Surrogate () {};
//   Surrogate.prototype = BaseClass.prototype;
//   this.prototype = new Surrogate();
// };
//
//requires Moving object
(function (root){
   var Asteroids = root.Asteroids = (root.Asteroids || {});

   //Should asteroid take pos, vel as parameters?
   var Asteroid = Asteroids.Asteroid = function (pos, vel){
    Asteroids.MovingObject.call(this, pos, vel, Asteroid.RADIUS, Asteroid.COLOR);
   };

    Asteroid.inherits(Asteroids.MovingObject); //Do we need Asteroids.MovingObject vs. just MovingObject
    Asteroid.RADIUS = 30;
    Asteroid.COLOR = "transparent";

    Asteroid.randomAsteroid = function(dimX, dimY){
      var y = Math.random() * dimY;
      var x = Math.random() * dimX;
     // var y = 250;
    //  var x = 250;
      var v = _randomVec();
      return new Asteroid([x, y], v);
    };

    function _randomVec(){
      var scale1 = 2;
      var scale2 = 2;
      return [Math.random() * scale1, Math.random() * scale2];
    }; // => [5, 7]


})(this);