Function.prototype.inherits = function(superClass) {
  //var callingObject = this; // typeof this === 'Function'
  function Surrogate() {}; // initialize
  Surrogate.prototype = superClass.prototype; // Surrogate < superClass


  this.prototype = new Surrogate();

  //superClass.call(this, arguments);

}

// Poodle.inherits(Dog);
function MovingObject() {
};

MovingObject.prototype.boom = function(){
    console.log('BOOM!');
  };
//Animal.call(this, name);

function Ship () {};
Ship.inherits(MovingObject);

function Asteroid () {};
Asteroid.inherits(MovingObject);

object = new MovingObject();
object.boom();

ship = new Ship();
ship.boom();




function Animal(name) {
  this.name = name;

};

Animal.prototype.makeSound = function(){
    console.log("Boommo");
  }

Animal.prototype.sayHello = function () {
  console.log("Hello, my name is " + this.name);
};

function Dog(name, coatColor) {

  //Animal.call(this, name);

  // `Dog`-specific initialization

};

// The surrogate will be used to construct `Dog.prototype`.
function Surrogate() {};
// A `Surrogate` instance should delegate to `Animal.prototype`.
Surrogate.prototype = Animal.prototype;

// Set `Dog.prototype` to a `Surrogate` instance.
// `Surrogate.__proto__` is `Animal.prototype`, but `new
// Surrogate` does not invoke the `Animal` constructor function.
Dog.prototype = new Surrogate();

Dog.prototype.bark = function () {
  console.log("Bark!");
};

d = new Dog();
d.makeSound();