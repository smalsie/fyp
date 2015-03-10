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
function Animation(game, name, spritesheet, spriteX,  spriteY, fps) {


	this.game = game.world;
	this.name = name;
	this.fps = fps;
	this.group;
	
	this.animation = this.game.load.spritesheet(this.name, spritesheet, spriteX, spriteY);
	
	this.createAnimation = function() {
	
		this.group = game.world.add.group();
		this.group.createMultiple(30, this.name);
		this.group.forEach(this.setupInvader, this);
	
	}
	
	this.playAnimation = function(x, y, loop) {
	
		
	
		var an = this.group.getFirstExists(false);
		an.reset(x, y);
		an.play(this.name, 30, loop, true);
	
	} 


	this.setupInvader = function (invader) {

		invader.anchor.x = 0.5;
		invader.anchor.y = 0.5;
		invader.animations.add(this.name);

	}


}

