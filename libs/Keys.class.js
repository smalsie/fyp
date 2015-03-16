/**
* Keys class, holds all of the possible keys available
*
* @author Joshua Small
* @version 1.0
*
* @constructor
* @param {Game} game The game object
Phaser.Keyboard.
*/
function Keys(game) {
	/** @member {Phaser.Game} */
	this.game = game.world;
	/** @member {Phaser.Key} */
	this.phaserKeys = this.game.input.keyboard;
	this.phaserKeyArrows = this.phaserKeys.createCursorKeys();
	/** @member {Phaser.Key} */
	this.left = new Key(this.phaserKeyArrows.left);
	/** @member {Phaser.Key} */
	this.right = new Key(this.phaserKeyArrows.right);
	/** @member {Phaser.Key} */
	this.up = new Key(this.phaserKeyArrows.up);
	/** @member {Phaser.Key} */
	this.down = new Key(this.phaserKeyArrows.down);
	
	this.createKey = function(key) {
	
		key = key.toUpperCase();	
	
		var keyCode = key.charCodeAt();
		
		return new Key(this.phaserKeys.addKey(keyCode));
	
	}
	
	this.createSpaceKey = function() {
	
		return new Key(this.phaserKeys.addKey(Phaser.Keyboard.SPACEBAR));
	
	}
	
	this.createUpKey = function() {
	
		return this.up;
	
	}
	
	this.createDownKey = function() {
	
		return this.down;
	
	}
	
	this.createLeftKey = function() {
	
		return this.left;
	
	}
	
	this.createRightKey = function() {
	
		return this.right;
	
	}
};
