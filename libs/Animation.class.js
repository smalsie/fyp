/**
* Animation class allowing you to put in random animations
* @author Joshua Small [smalljh@aston.ac.uk]
* @version 1.0
*
* @constructor
* @param {Game} game The created game object
* @param {String} name Name of the animation
* @param {String} spriteSheet String reference of the spritesheet to use for the animation
* @param {int} spriteX Width of one image of each frame in the spritesheet
* @param {int} spriteY Height of one image of each frame in the spritesheet
* @param {int} fps The frames per second to play the animation
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

