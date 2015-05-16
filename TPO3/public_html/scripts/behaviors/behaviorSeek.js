function BehaviorSeek(boid) {
	Behavior.call(this, boid); // call super constructor.
        boid.sprite.body.collideWorldBounds=true;
}

// subclass extends superclass
BehaviorSeek.prototype = Object.create(Behavior.prototype);
BehaviorSeek.prototype.constructor = BehaviorSeek;

BehaviorSeek.prototype = {

	update:function(){
		console.log('getVelocity', this.boid.getVelocity());
                
		var nuevaVelocidad = this.calcSeek();
                
                //Actualizamos la nueva velocidad en el agente
		this.boid.sprite.body.acceleration.add(nuevaVelocidad.x,nuevaVelocidad.y);
                this.boid.sprite.body.velocity.add(nuevaVelocidad.x,nuevaVelocidad.y);
                
                //Rota la imagen del agente en caso de que éste cambie de dirección
		Behavior.prototype.update.call(this);
                
                //En caso de que el agente salga fuera de los limites del juego, éste método lo introduce nuevamente dentro de los límites
		MovementUtils.loopWalls(this.boid.getPosition(),this.boid.game.world);
	},

	calcSeek:function(){
			
                        var direccion = MovementUtils.seekSteer(this.boid.avoidanceTarget.getPosition(),this.boid.getPosition(),this.boid.getVelocity(),this.boid.maxSeekForce,this.boid.maxSeekSpeed);
                        
                        var velocidad=  MovementUtils.limit(Phaser.Point.add(this.boid.getVelocity(),direccion),this.boid.maxSeekSpeed);
                        
			return velocidad;
	}
}