function SeekingBoid(game, target) {
	Boid.call(this, game); // call super constructor
	this.avoidanceTarget = target;
	this.maxSeekSpeed = 70;  //70
	this.maxSeekForce = 50;  //50
	this.minSeekForce = 10;  //10

}

// subclass extends superclass
SeekingBoid.prototype = Object.create(Boid.prototype);
SeekingBoid.prototype.constructor = Boid;

SeekingBoid.prototype.create = function(pos,vel,angle, debug){
	Boid.prototype.create.call(this, pos,vel,angle, debug);
}

SeekingBoid.prototype.updateAvoidance = function(target){
	this.avoidanceTarget = target;
}

SeekingBoid.prototype.debugUpdate = function(){
	Boid.prototype.debugUpdate.call(this);
}

SeekingBoid.prototype.debugRender = function(){
	Boid.prototype.debugRender.call(this);

}

