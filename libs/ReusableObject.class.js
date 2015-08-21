/**
* ReusableObject class which is at the core of the project
* It is a class that is used to create all of the elements on the screen
* apart from the background which is handled by the game object.
*
* The ReusableObjec Class creates and stores ChildObjects which are the actual
* object that is created on screen. Each function here invokes a function on the
* child object, this allows the manipulation of multiple objects with just one
* function call.
*
* @author Joshua Small [joshuahugh94@gmail.com/smalljh@aston.ac.uk]
* @version 2.0
*
* @constructor
* Calls on this.constructor
*
* @param {String} image String reference of an image to use
* @param {number} spriteWidth The width of one frame of the sprite
* @param {number} spriteHeight The height of one frame of the sprite
* @param {boolean} autoManage If the object should be managed. By having the object managed all children
* are given the same values such as animations even if they are created after an animation is set. By
* default it is set to true.
* @param {String} name The name to give the object, by default it is ReusableObject plus the number so far created
*/
function ReusableObject(image, spriteWidth, spriteHeight, autoManage, name){

	/** @member {Phaser.Game} */
	this.game;
	/** @member {Game} */
	this.parentGame;
	/** @member {Phaser.Group} */
	this.group;
	/** @member {String} */
	this.name;
	/** Load the image */
	this.body;
	/** @member {Array} */
	this.children;
	/** @member {boolean} */
	this.autoManage;
	/** @member {Array} */
	this.animations;

	/**
	* The constructor used to encapsulate the code run when the object
	* is first instanciated. It is called at the botttom of the file.
	* So it does not need to be called as it has already been called.
	*/
	this.constructor = function() {

		//Set up a counter to give unique names to each object
		if ( typeof ReusableObject.counter == 'undefined' ) {

			ReusableObject.counter = 1;

		} else {

			ReusableObject.counter++;

		}


		//store a reference to our custom game object
		this.parentGame = Game.GET_INSTANCE();
		//set game to game.world which is the Phaser.Game
		this.game = this.parentGame.world;
		//create a group to store the child object, this is used internally to
		//decide the group z position
		this.group = this.game.add.group(null, '', true, false, 0);

		//set up a default name if one is not given
		if(typeof name === 'undefined' )
			this.name = "ReusableObject" + ReusableObject.counter;
		else
			this.name = name;

		//load the spritesheet used into memory.
		this.body = this.game.load.spritesheet(this.name, image, spriteWidth, spriteHeight);

		this.children = [];
		this.animations = [];

		//by default set automanage to true
		if(typeof autoManage === 'undefined')
			this.autoManage = true;
		else
			this.autoManage = autoManage;

		this.createReusables();

	}

	/**
	* Create the reusable objects for use, called automatically
	* Theses are common settings that are always used and do
	* not matter too much
	*
	* Used Internally.
	*/
	this.createReusables = function() {

		this.group.enableBody = true;
		this.group.physicsBodyType = Phaser.Physics.ARCADE;
		this.group.setAll('anchor.x', 0.5);
		this.group.setAll('anchor.y', 1);
		this.group.setAll('outOfBoundsKill', true);
		this.group.setAll('checkWorldBounds', true);

	}

	/**
	* Create your object at the given x and y coordinates
	* Width and height is used from the image if not specified
	*
	* @param {number} x The x coordinate of the object
	* @param {number} y The y coordinate of the object
	* @param {number|string} width The width of the object
	* @param {number|string} height The height of the object
	*
	* @return {GroupChild} child The created GroupChild Object
	*/
	this.create = function(x, y, width, height) {

		width = width || 0;
		height = height || 0;

		if(width == 0 || height == 0) {

			//get the image from cache so we can get its dimensions
			var image = this.game.cache.getImage(this.name);

			width = image.width;
			height = image.height;

			//custom functions to ensure values are okay
			width = this.parseWidth(width);
			height = this.parseHeight(height);
			x = this.parseX(x, width);
			y = this.parseY(y, height);

			//create our new child
			var child = this.group.create(x, y, this.name);
			this.children.push(new GroupChild(child, this.game));

			var index = this.children.length - 1;

			//return the child incase the user wants to store it in a var
			return this.children[index];

		} else {
			//quick fix for now
			return this.createWidthHeight(x, y, width, height);

		}

	}
	/**
	* Create your object at the given x and y coordinates
	*
	* @param {number} x The x coordinate of the object
	* @param {number} y The y coordinate of the object
	* @param {number|string} width The width of the object
	* @param {number|string} height The height of the object
	*
	* @return {GroupChild} child The created child
	*/
	this.createWidthHeight = function(x, y, width, height) {

		width = this.parseWidth(width);
		height = this.parseHeight(height);

		y = this.parseY(y, height);
		x = this.parseX(x, width);

		var obj = this.create(x, y);
		obj.setWidth(width);
		obj.setHeight(height);

		return obj;
	}

	/**
	* Add an animation to all enemies
	*
	* @param {String} name The name of an animation, required for referencing later.
	* @param {number[]} frames An array of the frames that the animation plays
	* @param {number} fps The frame rate of the animation, a higher value plays the animation faster
	*/
	this.addAnimation = function(name, frames, fps) {

		var index = this.animations.length;

		//create our 2D array
		this.animations[index] = {};

		//add to our array for the autoManager
		this.animations[index]['name'] = name;
		this.animations[index]['frames'] = frames;
		this.animations[index]['fps'] = fps;

		//go through each enemy in the array and add an animation to it
		for(var i = 0; i < this.children.length; i++)
			this.children[i].addAnimation(name, frames, fps);

	}

	/**
	* Plays a predefined animation on all of the children
	*
	* @param {String} name The name of the animation to play,
	* this animation must have been created with {@link Player#addAnimation} beforehand
	*/
	this.playAnimation = function(name) {

		for(var i = 0; i < this.children.length; i++)
	  		this.children[i].playAnimation(name);

	}

	/**
	* Set the y velocity of all of the children
	*
	* @param {number} y The y velocity to give the children
	*/
	this.setVelocityY = function(y) {

		for(var i = 0; i < this.children.length; i++)
	  		this.children[i].setVelocityY(y);
	}

	/**
	* Set the x velocity of all of the children
	*
	* @param {number} x The x velocity to give the children
	*/
	this.setVelocityX = function(x) {

		for(var i = 0; i < this.children.length; i++)
	  		this.children[i].setVelocityX(x);
	}

	/**
	* Set the y position of all of the children
	*
	* @param {number} y The y position to give the children
	*/
	this.setY = function(y) {

		for(var i = 0; i < this.children.length; i++)
	  		this.children[i].setY(y);
	}

	/**
	* Set the y velocity of the child
	*
	* @param {number} y the y velocity to give the child
	*/
	this.setX = function(x) {

		for(var i = 0; i < this.children.length; i++)
	  		this.children[i].setX(x);
	}

	/**
	* Stops the animation that is currently being played
	* and shows the stop frame for all of the children.
	*/
	this.stop = function() {

		for(var i = 0; i < this.children.length; i++)
	  		this.children[i].stop();

	}

	/**
	* Sets the stop frame for the children, this is the frame that is
	* shown when the children are stopped.
	*
	* @param {number} frame The number of the frame to be set as the stop frame
	*/
	this.setStopFrame = function(frame) {

		for(var i = 0; i < this.children.length; i++)
	  		this.children[i].setStopFrame(frame);

	}

	/**
	* Return a value of x, useful if specified as a string (percentage)
	* Requires the width of the object to work out
	*
	* @param {number} x The x value
	* @param {number} width The width of the object
	*
	* @return {number} x
	*/
	this.parseX = function(x, width) {

		if((typeof x === "string") || (x < 0)) {

  			var newX = parseInt(x);

  			if(!(newX > -1)) {
  				console.log("Your value for x: " + x + " is not a valid number!");
  				x = 0;
  			}
   			else {

   				var div = newX/100;

  				x = this.parentGame.gameWidth() * div;

  				var minWidth = this.parentGame.gameWidth() - width;

  				if(minWidth < x)
  					x = minWidth;

  			}

  		}

  		return x;

	}

	/**
	* Return a value of y, useful if specified as a string (percentage)
	* Requires the height of the object to work out
	*
	* @param {number} y The y value
	* @param {number} height The height of the object
	*
	* @return {number} y
	*/
	this.parseY = function(y, height) {

		if((typeof y === "string") || (y < 0)) {

  			var newY = parseInt(y);

  			if(!(newY > -1)) {
  				console.log("Your value for y: " + y + " is not a valid number!");
  				y = 0;
  			}
   			else {

   				var div = newY/100;

  				y = this.parentGame.gameHeight() * div;

  				var minHeight = this.parentGame.gameHeight() - height;

  				if(minHeight < y) {
  					y = minHeight;
  				}

  			}

  		}

  		return y;
	}

	/**
	* Return a value of the width, useful if specified as a string (percentage)
	*
	* @param {number} width The width value
	*
	* @return {number} width
	*/
	this.parseWidth = function(width) {

		if((typeof width === "string") || (width < 0)) {

  			var newWidth = parseInt(width);

  			if(!(newWidth > -1)) {
  				console.log("Your value for width for: " + width + " is not a valid number!");
  				width = 0;
  			}
  			else {

  				var div = newWidth/100;

  				width = this.parentGame.gameWidth() * div;

  			}

  		}

  		return width;

	}

	/**
	* Return a value of the height, useful if specified as a string (percentage)
	*
	* @param {number} height The height value
	*
	* @return {number} height
	*/
	this.parseHeight = function(height) {

		if((typeof height === "string") || (height < 0)) {

			var newHeight = parseInt(height);

			if(!(newHeight > -1)) {
				console.log("Your value for height: " + height + " is not a valid number!");
				height = 0;
			}
			else {

				var div = newHeight/100;

				height = this.parentGame.gameHeight() * div;

			}

  	  	}

  	  	return height;

	}

	/**
	* Sets all of the children to immovable or not
	*
	* @param {boolean} immovable If they should be able to move, true means the children won't move
	*/
	this.setImmovable = function(immovable) {

		for(var i = 0; i < this.children.length; i++)
			this.children[i].setImmovable(immovable);

	}

	/**
	* If the object should collide with the world boundaries.
	*
	* @param {boolean} collide If it should collide
	*/
	this.collideWorldBounds = function(collide) {

		for(var i = 0; i < this.children.length; i++)
			this.children[i].collideWorldBounds(collide);

	}

	/**
	* Sets teh angle on all of the children
	*
	* @param {number} angle The angle to set the children
	*/
	this.setAngle = function(angle) {

		for(var i = 0; i < this.children.length; i++)
			this.children[i].setAngle(angle);
	}

	/**
	* Allows all of the children to be dragged with the mouse.
	*
	* @param draggable If the children can be dragged
	*/
	this.setDraggable = function(draggable) {

		for(var i = 0; i < this.children.length; i++)
			this.children[i].setDraggable(draggable);

	}

	/**
	* Sets if the children collide with over object (only ones that were
	* already set with setCollision).
	*
	* @param collisionOnDrag If the children should collide when being dragged
	*/
	this.setCollisionsOnDrag = function(collisionOnDrag) {

		for(var i = 0; i < this.children.length; i++)
			this.children[i].setCollisionsOnDrag(collisionOnDrag);

	}

	/**
	* Set the x gravity on the child
	*
	* @param {number} gravityX The x gravity to give the children
	*/
	this.setGravityX = function(gravityX) {

		for(var i = 0; i < this.children.length; i++)
			this.children[i].setGravityX(gravityX);

	}

	/**
	* Set the y gravity on the child
	*
	* @param {number} gravityY The y gravity to give the children
	*/
	this.setGravityY = function(gravityY) {

		for(var i = 0; i < this.children.length; i++)
			this.children[i].setGravityY(gravityY);

	}

	/**
	* Set the alpha(transparency) of the children.
	*
	* @param alpha The alpha value to set between 0 and 1.
	*/
	this.setAlpha = function(alpha) {

		for(var i = 0; i < this.children.length; i++)
			this.children[i].setAlpha(alpha);

	}

	/**
	* Add a function to call when an animation on the children has finished playing.
	* Note: This will only work if loop is set to false on the animation!
	*
	* @param {function} action The function to call
	*/
	this.addActionOnAnimationComplete = function(action) {

		for(var i = 0; i < this.children.length; i++)
			this.children[i].addActionOnAnimationComplete(action);

	}

	//set everything up when the object is instansiated.
	this.constructor();

}
