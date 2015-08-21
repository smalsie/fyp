/**
* Keyboard class, holds all of the possible keys available
*
* @author Joshua Small [joshuahugh94@gmail.com/smalljh@aston.ac.uk]
* @version 2.0
*
* @constructor
* Calls on this.constructor
*/
function Keyboard() {

	/** @member {Phaser.Game} */
	this.game;
	/** @member {Phaser.Key} */
	this.phaserKeys;
	/** @member {Phaser.Key} */
	this.phaserKeyArrows;
	/** @member {Phaser.Key} */
	this.left;
	/** @member {Phaser.Key} */
	this.right;
	/** @member {Phaser.Key} */
	this.up;
	/** @member {Phaser.Key} */
	this.down;

	/**
	* The constructor used to encapsulate the code run when the object
	* is first instanciated. It is called at the botttom of the file.
	* So it does not need to be called as it has already been called.
	*/
	this.constructor = function() {

		this.game = Game.GET_INSTANCE().world;

		this.phaserKeys = this.game.input.keyboard;

		this.phaserKeyArrows = this.phaserKeys.createCursorKeys();

		this.left = new Key(this.phaserKeyArrows.left);

		this.right = new Key(this.phaserKeyArrows.right);

		this.up = new Key(this.phaserKeyArrows.up);

		this.down = new Key(this.phaserKeyArrows.down);

	}


	/**
	* Create a new input key by specifying its character, only works on the keys a-z
	*
	* @param {String} key The key to create
	*
	* @return {Key} A Key that can be used
	*/
	this.createKey = function(key) {

		//convert to uppercase as lowercase keys differ
		key = key.toUpperCase();

		//get its key code, e.g A is 65
		var keyCode = key.charCodeAt();

		//create a Key object and return
		return new Key(this.phaserKeys.addKey(keyCode));

	}

	/**
	* Create the space bar key
	*
	* @return {Key} The Spacebar key
	*/
	this.createSpaceKey = function() {

		return new Key(this.phaserKeys.addKey(Phaser.Keyboard.SPACEBAR));

	}

	/**
	* Create the Up arrow key
	*
	* @return {Key} The Up key
	*/
	this.createUpKey = function() {

		return this.up;

	}

	/**
	* Create the Down arrow key
	*
	* @return {Key} The Down key
	*/
	this.createDownKey = function() {

		return this.down;

	}

	/**
	* Create the Left arrow key
	*
	* @return {Key} The Left key
	*/
	this.createLeftKey = function() {

		return this.left;

	}

	/**
	* Create the Right arrow key
	*
	* @return {Key} The Right key
	*/
	this.createRightKey = function() {

		return this.right;

	}

	//set everything up when the object is instansiated.
	this.constructor();

};
