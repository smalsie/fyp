/**
* GroupChild class, these are the actual objects created when
* the ReusableObject.create is called. This allows for specific
* control over each object.
*
* @author Joshua Small [joshuahugh94@gmail.com/smalljh@aston.ac.uk]
* @version 2.0
*
* @constructor
* Calls on this.constructor
*
* @param {PIXI.DisplayObject} child The child object
*/
function GroupChild(child){

	/** @member {PIXI.DisplayObject} */
	this.child = child;
	/** @member {number} */
	this.stillFrame;
	/** @member {Game} */
	this.game;

	/**
	* The constructor used to encapsulate the code run when the object
	* is first instanciated. It is called at the botttom of the file.
	* So it does not need to be called as it has already been called.
	*/
	this.constructor = function() {

		this.child = child;

		this.stillFrame = 0;

		this.game = Game.GET_INSTANCE();

	}

	/**
	* Set the x velocity of the child
	*
	* @param {number} velocityX The x velocity to give the child
	*/
	this.setVelocityX = function(velocityX) {

		this.child.body.velocity.x = velocityX;

	}

	/**
	* Set the y velocity of the child
	*
	* @param {number} velocityY The y velocity to give the child
	*/
	this.setVelocityY = function(velocityY) {

		this.child.body.velocity.y = velocityY;

	}

	/**
	* Set the x position of the child
	*
	* @param {number} x The x position to give the child
	*/
	this.setX = function(x) {

		this.child.body.x = x;

	}

	/**
	* Set the y position of the child
	*
	* @param {number} y The y position to give the child
	*/
	this.setY = function(y) {

		this.child.body.y = y;

	}

	/**
	* Set the x gravity on the child
	*
	* @param {number} gravityX The x gravity to give the child
	*/
	this.setGravityX = function(gravityX) {

		this.child.body.gravity.x = gravityX;

	}

	/**
	* Set the y gravity on the child
	*
	* @param {number} gravityY The y gravity to give the child
	*/
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
	* @return {number} x The x position of the child
	*/
	this.getX = function() {

		return this.child.body.x;

	}

	/**
	* Get the y position of the child
	*
	* @return {number} y The y position of the child
	*/
	this.getY = function() {

		return this.child.body.y;

	}

	/**
	* Set the width of the child
	*
	* @param {number} width the width of the child
	*/
	this.setWidth = function(width) {

  		this.child.body.width = width;
  		this.child.width = width;

	}

	/**
	* Set the height of the child
	*
	* @param {number} height the height of the child
	*/
	this.setHeight = function(height) {

		this.child.body.height = height;
		this.child.height = height;

	}

	/**
	* Set if the child can move
	*
	* @param {boolean} immovable If the child is immovable, true means the child won't move
	*/
	this.setImovable = function(immovable) {
		this.child.body.immovable = immovable;
	}

	/**
	* Add an animation to the child
	*
	* @param {String} name The name of an animation, required for referencing later.
	* @param {number[]} frames An array of the frames thae animation playes in the order that they are played
	* @param {number} fps The frame rate of the animetion, higher plays the animation faster
	* @param {boolean} loop If the animation should loop, true by default
	*/
	this.addAnimation = function(name, frames, fps, loop) {

		if(typeof loop === 'undefined')
			loop = true;

		this.child.animations.add(name, frames, fps, loop);

	}

	/**
	* Sets the stop frame for the player,
	* this is the frame that is shown when the player is stopped
	*
	* @param {number} frame The number of the frame to be set as the stop frame
	*/
	this.setStopFrame = function(frame) {

		this.stillFrame = frame;

	}

	/**
	* Plays a predefined animation
	*
	* @param {String} name The name of the animation to play, this animation
	* must have been created with {@link Player#addAnimation} beforehand.
	*/
	this.playAnimation = function(name) {

		this.child.animations.play(name);

	}

	/**
	* Kill the child, removing it from the game
	*/
	this.kill = function() {

		this.child.kill();

	}

	/**
	* Set the alpha(transparency) of the child.
	*
	* @param alpha The alpha value to set between 0 and 1.
	*/
	this.setAlpha = function(alpha) {

		this.child.alpha = alpha;

	}

	/**
	* Sets the childs angle
	*
	* @param {number} angle The angle to set the child
	*/
	this.setAngle = function(angle) {
		this.child.angle = angle;
	}

	/**
	* Sets if the child should be dragged with the mouse.
	*
	* @param draggable If the child can be dragged
	*/
	this.setDraggable = function(draggable) {

		if(draggable) {

			this.child.inputEnabled = true;
			this.child.input.enableDrag();

		} else {

			this.child.inputEnabled = false;
			this.child.input.disableDrag();

		}

	}

	/**
	* Sets if the child will collide with over objects (only ones that were
	* already set with setCollision).
	*
	* @param collisionOnDrag If the child should collide when being dragged
	*/
	this.setCollisionsOnDrag = function(collisionOnDrag) {

		if(this.child.input != null) {

			//setting the body.moves to false causes collisions to work
			this.child.body.moves = !collisionOnDrag;

		} else {

			console.log("You need to call setDraggable(true) first!");

		}

	}

	/**
	* Sets the child to immovable or not
	*
	* @param {boolean} immovable If they should be able to move, true means the children won't move
	*/
	this.setImmovable = function(immovable) {

		this.child.body.immovable = immovable;

	}

	/**
	* If the object should collide with the world boundaries.
	*
	* @param {boolean} collide If it should collide
	*/
	this.collideWorldBounds = function(collide) {

		this.child.body.collideWorldBounds = collide;

	}

	/**
	* Add a function to call when an animation has finished playing.
	* Note: This will only work if loop is set to false on the animation!
	*
	* @param {function} action The function to call
	*/
	this.addActionOnAnimationComplete = function(action) {

		this.child.events.onAnimationComplete.add(action, this);

	}

	/**
	* States if the object is touching the ground.
	*
	* @return {boolen} onGround
	*/
	this.onGround = function() {

		return this.child.body.touching.down;

	}

	//set everything up when the object is instansiated.
	this.constructor();

};
