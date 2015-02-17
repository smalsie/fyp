/**
* Keys class, holds all of the possible keys available
*
* @author Joshua Small
* @version 1.0
*
* @constructor
* @param {Game} game The game object
*/
function Keys(game) {
	/** @member {Phaser.Game} */
	this.game = game.world;
	/** @member {Phaser.Key} */
	this.phaserKey = this.game.input.keyboard.createCursorKeys();
	/** @member {Phaser.Key} */
	this.left = new Key(this.phaserKey.left);
	/** @member {Phaser.Key} */
	this.right = new Key(this.phaserKey.right);
	/** @member {Phaser.Key} */
	this.up = new Key(this.phaserKey.up);
	/** @member {Phaser.Key} */
	this.down = new Key(this.phaserKey.down);

};
