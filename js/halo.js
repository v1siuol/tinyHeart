var haloObj = function() {
  this.x = [];
  this.y = [];
  this.alive = [];
  this.r = [];
}
haloObj.prototype.num = 5;
haloObj.prototype.init = function() {
  for (var i = 0; i < this.num; i++) {
    this.x[i] = 0;
    this.y[i] = 0;
    this.alive[i] = false;
    this.r[i] = 0;
  }
}
haloObj.prototype.draw = function() {
  for (var i = 0; i < this.num; i++) {
    if (this.alive[i]) {
      // draw
    }
  }
}
haloObj.prototype.born = function() {}
