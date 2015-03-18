/**
* Text Class used to add information to the screen
* @author Joshua Small [smalljh@aston.ac.uk]
* @version 1.0
*
* @constructor
* @param {int} width Width of the game
* @param {int} height Height of the game
* @param {String} name The name of the game
*/
function Text(game, string, x, y, size, font, colour) {

	/** @member {Phaser.Game} */
	this.game = game.world;
	/** @member {int} */	
	this.size = size;
	/** @member {Phaser.Text} */	
	this.text = this.game.add.text(x, y, string, { font: size + " " + font, fill: colour });
	
	/**
	* Change the colour of the text
	*
	* @param {String} colour String hex representation of a colour
	*/
	this.changeColour = function(colour) {
	
		this.text.fill = colour;
	
	}
	
	/**
	* Set the x position of the text
	*
	* @param {int} x X position to set the text
	*/	
	this.changeX = function(x) {
	
		this.text.x = x;
	
	}
	
	/**
	* Set the y position of the text
	*
	* @param {int} y Y position to set the text
	*/	
	this.changeY = function(y) {
	
		this.text.y = y;
	
	}
	
	/**
	* Change the colour of the text
	*
	* @param {int} size Size of the text
	*/	
	this.changeFontSize = function(size) {
	
		this.text.fontSize = size + "px";
	
	}
	
	/**
	* Change the text font
	*
	* @param {String} font Font to change to
	*/	
	this.changeFont = function(font) {
	
		this.text.font = font;
	
	}
	
	/**
	* Set if the text is visible
	*
	* @param {boolean} visible If the text should be visible
	*/	
	this.setVisible = function(visible) {
	
		this.text.visible = visible;
	
	}
	
	/**
	* Change the text to display
	*
	* @param {String} text The text to change to
	*/	
	this.changeText = function(text) {
	
		this.text.setText(text)
	
	}
}

