/**
* Enemy class which is at the core of the project
* @author Joshua Small [smalljh@aston.ac.uk]
* @version 1.0
*
* @constructor
* @param {Game} game The created game object
*/
function GroupChild(child){

	this.child = child;

	this.setVelocityX = function(x) {
		if(this.child != null)
			this.child.body.velocity.x = x;
	}

	this.setVelocityY = function(y) {
		if(this.child != null)
			this.child.body.velocity.y = y;
	}

	this.getX = function() {
		return this.child.body.x;
	}
	
	this.getY = function() {
		return this.child.body.y;
	}
	//http://docs.phaser.io/Phaser.Physics.Arcade.html#moveToObject
	this.moveTowards = function(player, speed) {
		this.child.game.physics.arcade.moveToObject(this.child,player.character,speed);
	}

	this.setWidth = function(width) {	
  		
  		this.child.body.width = width;
  		this.child.width = width;

	}

	this.setHeight = function(height) {

  	  	this.child.body.height = height;
  	  	this.child.height = height;

	}

	this.setImmovable = function(immovable) {
		this.child.body.immovable = immovable;
	}

}