var sum = function() {
  var total = 0;
  for (var i = 0; i < arguments.length; i++) {
    total += arguments[i];
  }

  return total;
}

// console.log(sum(1, 2, 3, 4) == 10);
// console.log(sum(1, 2, 3, 4, 5) == 15);

Function.prototype.myBind = function(object) {
  var that = this;
  var args = Array.prototype.slice.call(arguments, 1);
  // ---> var args = arguments.slice <--- Function which, when executed, returns an array == [object, sound1, sound2]
  // args() --> array of arguments
  // args.forEach(...) ---> iterate through the

  return function(){
    //that.call(object, arguments);

    that.apply(object, args);
  }
  //
  // that.apply(object, arguments);
  //
}

//console.log()

function Dog(name){
  this.name = name;
};

Dog.prototype.bark = function(sound1, sound2){
  console.log(sound1 +", " + sound2 + " Woof "+ this.name);
};

function Cat(name){
  this.name = name;
};

// dog1 = new Dog("Spot");
// cat1 = new Cat("Dot");
//
// dog1.bark("squeal", "yip"); // Woof Spot
// dog1.bark.bind(cat1, "squeal", "yip")(); // Woof Dot
// console.log("----");
// dog1.bark.myBind(cat1, "squeal", "yip")(); // Woof Dot

//cat1.bark(); // ERROR
//Takes an integer(# to sum)
// Returns function
var curriedSum = function(numArgs){
  var numbers = [];

  var _curriedSum = function(num){
    //var currSum = this;
    //this.numArgs = numArgs;
    //console.log("Numargs: " + numArgs);
    //console.log("Prev numbers: " + numbers);
    numbers.push(num);
    if(numbers.length === numArgs){
      sum = 0;
      for(var i = 0; i < numArgs; i++){
        sum += numbers[i];
      }
      return sum;
    }
    else {
      //console.log("This :" + (typeof this))
      return _curriedSum;
    };

  };

  return _curriedSum;
};


//var sum = curriedSum(4);
// var sum2 = curriedSum(5);
// sum = function(numArgs = 4){} <-- line73 return _curriedSum
// sum = [Function ('_curriedSum')]
/* sum = var _curriedSum = function(num){
    //var currSum = this;
    //this.numArgs = numArgs;
    //console.log("Numargs: " + numArgs);
    //console.log("Prev numbers: " + numbers);
    numbers.push(num);
    if(numbers.length === numArgs){
      sum = 0;
      for(var i = 0; i < numArgs; i++){
        sum += numbers[i];
      }
      return sum;
    }
    else {
      //console.log("This :" + (typeof this))
      return _curriedSum;
    };

  };

*/
// sum(5) = _curriedSum(5) <--- line64 checks if(numbers.length === numArgs)
//  //in the above line, how does line64 get executed correctly? how does the
// [Function ('_curriedSum')] contain the information about what 'numArgs' is?
//

//console.log(typeof sum);
// console.log(sum(5)(30)(20)(1)); // => 56
//
Function.prototype.curry = function(numArgs){
  var args = [];
  var funct = this;
  var _curry = function(nextArg){
    args.push(nextArg);

    if(numArgs === args.length){
      return funct.apply(this, args); //Here 'this' will end up being 'WINDOW'
    }
    else{
      return _curry;
    };
  }

  return _curry;

};


function sumThree(num1, num2, num3) {
  return num1 + num2 + num3;
}
console.log('LETS GO');
console.log(sumThree(4, 20, 3)); // == 27

// you'll write `Function#curry`!
var f1 = sumThree.curry(3);


var f2 = f1(4);
var f3 = f2(20);
var result = f3(3); // = 27

// or more briefly:
console.log(sumThree.curry(3)(4)(20)(3)); // == 27


