function MovingObject(pos, vel, rad, col){
  this.pos = pos;
  this.vel = vel;
  this.rad = rad;
  this.col = col;
};
//

// maybe assumed that dt = 1
// pos1 = [2, 7];
// v1 = [1.5, 0.5];
MovingObject.prototype.move = function(){
  // pos += vel * dt
  this.pos[0] += this.vel[0];
  this.pos[1] += this.vel[1];
};

MovingObject.prototype.draw = function(ctx){
  // draw circle w/ circle_radius = this.rad
  // and circle_position = this.pos
};


MovingObject.prototype.isCollidedWith = function(otherObject){
  //compute distance between centers
  var dx = this.pos[0] - otherObject.pos[0];
  var dy = this.pos[1] - otherObject.pos[1];
  var dist = Math.sqrt((dx * dx) + (dy * dy));
  return (dist <= (this.rad + otherObject.rad));
};
