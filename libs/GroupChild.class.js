/**
* GroupChild class class
* A helper class used to allow functions on a child of a group
* @author Joshua Small [smalljh@aston.ac.uk]
* @version 1.0
*
* @constructor
* @param {PIXI.DisplayObject} child The child object
*/
function GroupChild(child){
	/** @member {PIXI.DisplayObject} */
	this.child = child;
	/** @member {int} */
	this.stillFrame = 0;

	/**
	* Set the x velocity of the child
	*
	* @param {int} x the x velocity to give the child
	*/
	this.setVelocityX = function(x) {

		//ensure the child is not null
		if(this.child != null)
			this.child.body.velocity.x = x;
	}

	/**
	* Set the y velocity of the child
	*
	* @param {int} y the y velocity to give the child
	*/
	this.setVelocityY = function(y) {

		//ensure the child is not null
		if(this.child != null)
			this.child.body.velocity.y = y;
	}

	this.setGravityX = function(gravityX) {
		this.child.body.gravity.x = gravityX;
	}

	this.setGravityY = function(gravityY) {
		this.child.body.gravity.y = gravityY;

	}

	/**
	* Stops the animation that is currently being played
	* and shows the stop frame for the character.
	*/
	this.stop = function() {

		this.child.animations.stop();
		this.child.frame = this.stillFrame;

	}

	/**
	* Get the x position of the child
	*
	* @return {int} x position of the child
	*/
	this.getX = function() {
		return this.child.body.x;
	}

	/**
	* Get the y position of the child
	*
	* @return {int} y position of the child
	*/
	this.getY = function() {
		return this.child.body.y;
	}

	/**
	* Move the child towards the player, needs to be updated to allow moving towards other objects
	*
	* @see http://docs.phaser.io/Phaser.Physics.Arcade.html#moveToObject
	* @param {Player} player the player to move towards
	* @param {int} speed the speed to move the child
	*/
	this.moveTowards = function(player, speed) {
		this.child.game.physics.arcade.moveToObject(this.child,player.character,speed);
	}

	/**
	* Set the width of the child
	*
	* @param {int} width the width of the child
	*/
	this.setWidth = function(width) {

  		this.child.body.width = width;
  		this.child.width = width;

	}

	/**
	* Set the height of the child
	*
	* @param {int} height the height of the child
	*/
	this.setHeight = function(height) {

  	  	this.child.body.height = height;
  	  	this.child.height = height;

	}

	/**
	* Set if the child can move
	*
	* @param {boolean} immovable if the child is immovable, true means the child won't move
	*/
	this.setImmovable = function(immovable) {
		this.child.body.immovable = immovable;
	}

	/**
	* Add an animation to a specific enemy, for all enemies @see addAnimationToAll
	*
	* @param {String} name The name of an animation, required for referencing later.
	* @param {int[]} frames An array of the frames thae animation playes in the order that they are played
	* @param {int} fps The frame rate of the animetion, higher plays the animation faster
	* @param {int} index the specific enemy to add the animation to
	*/
	this.addAnimation = function(name, frames, fps) {

		this.child.animations.add(name, frames, fps, true);

	}

	/**
	* Sets the stop frame for the player,
	* this is the frame that is shown when the player is stopped
	*
	* @param {int} frame The number of the frame to be set as the stop frame
	*/
	this.setStopFrame = function(frame) {

		this.stillFrame = frame;

	}

	/**
	* Plays a predefined animation
	*
	* @param {String} name The name of the animation to play,
	* this animation must have been created with {@link Player#addAnimation} beforehand
	*/
	this.playAnimation = function(name) {

		this.child.animations.play(name);

	}

	/**
	* Kill the child
	*/
	this.kill = function() {

		this.child.kill();

	}

}
