/**
* Game class which is at the core of the project
* @author Joshua Small [smalljh@aston.ac.uk]
* @version 1.0
*
* @constructor
* @param {int} width Width of the game
* @param {int} height Height of the game
* @param {String} name The name of the game
*/
function Text(game, string, x, y, size, font, colour) {


	this.game = game.world;
	this.size = size;
	this.text = this.game.add.text(x, y, string, { font: size + " " + font, fill: colour });
	
	this.text.z = 0;
	
	this.changeColour = function(colour) {
	
		this.text.fill = colour;
	
	}
	
	this.changeX = function(x) {
	
		this.text.x = x;
	
	}
	
	this.changeY = function(y) {
	
		this.text.y = y;
	
	}
	
	this.changeFontSize = function(size) {
	
		this.text.fontSize = size;
	
	}
	
	this.changeFont = function(font) {
	
		this.text.font = font;
	
	}
	
	this.setVisible = function(visible) {
	
		this.text.visible = visible;
	
	}
	
	this.changeText = function(text) {
	
		this.text.setText(text)
	
	}
}

