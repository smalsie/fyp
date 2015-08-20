/**
* Sound class allows the playing of sigular or looped sounds
* Unfortunately sound currently does not work on the lab machines
*
* @author Joshua Small [joshuahugh94@gmail.com/smalljh@aston.ac.uk]
* @version 2.0
*
* @constructor
* Calls on this.constructor
*
* @param {Game} game The created game object
* @param {String} name Name of the sound
* @param {String} sound The string reference of the sound to use
* @param {number} volume Optional Value between 0 and 1, the default is 1
* @param {boolean} loop Optional boolean value stating if the audio should loop, default is false
*/
function Sound(game, name, sound, volume, loop){

	/** @member {Phaser.Game} **/
	this.game;
	/** @member {String} **/
	this.name;
	/** @member {String} **/
	this.sound;
	/** @member {Phaser.Sound} **/
	this.audio;

	/**
	* The constructor used to encapsulate the code run when the object
	* is first instanciated. It is called at the botttom of the file.
	* So it does not need to be called as it has already been called.
	*/
	this.constructor = function() {

		this.game = game.world;
		this.name = name;
		this.sound = sound;

		/** load in the audio file **/
		this.game.load.audio(this.name, this.sound);
		this.audio = this.game.add.audio(this.name, volume, loop);

	}

	/**
	* Play the sound
	*/
	this.play = function() {

		this.audio.play();

	}

	/**
	* Pause the sound
	*/
	this.pause = function() {

		this.audio.pause();

	}

	/**
	* Restart the sound
	*/
	this.restart = function() {

		this.audio.restart();

	}


	/**
	* Resume the sound after pausing
	*/
	this.resume = function() {

		this.audio.resume();

	}

	/**
	* Stop the sound
	*/
	this.stop = function() {

		this.audio.stop();

	}

	/**
	* Allow multiple instances of the sound and other sounds.
	*
	* You will need to set this to true if you want multiple
	* sounds paying at once.
	*
	* @param {boolean} allowMultiple If multiple sounds are allowed
	*/
	this.allowMultiple = function(allowMultiple) {

		this.audio.allowMultiple = allowMultiple;

	}

	//set everything up when the object is instansiated.
	this.constructor();

};
