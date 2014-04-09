



MovingObject = {

_proto_: {
  Function: { _proto_: {inherits : function(superClass) {
  var callingObject = this; // typeof this === 'Function'
  function Surrogate() {};
  Surrogate.prototype = superClass.prototype;


  this.prototype = new Surrogate();

  //superClass.call(this, arguments);

} } }

  boom: function(){
    console.log('BOOM!');
  }

  }
}


inherits: function(superClass)....


Ship = {

_proto_: {

  }
}
