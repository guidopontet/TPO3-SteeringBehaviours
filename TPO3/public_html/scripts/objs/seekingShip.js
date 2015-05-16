function SeekingShip(game,target) {
  SeekingBoid.call(this,game,target); // call super constructor
  
}

// subclass extends superclass
SeekingShip.prototype = Object.create(SeekingBoid.prototype);
SeekingShip.prototype.constructor = SeekingShip;

