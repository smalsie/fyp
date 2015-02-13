function Player(startX, startY, game, spriteSheet, spriteX, spriteY) {

	this.startX = startX;
	this.startY = startY;
	this.playerImage;
	
	this.stillFrame = 0;
	this.character;
	this.game = game;
	this.world = game.world;
	
	
	
	

	
	this.loadSpriteSheet = function(spriteSheet, spriteX, spriteY) {
	
		this.world.load.spritesheet('player', spriteSheet, spriteX, spriteY);

	}
	
	
	this.createSprite = function() {

		this.character = this.world.add.sprite(this.startX, this.startY, 'player');
		this.character.anchor.setTo(0.5, 0.5);
		this.character.scale.setTo(2,2);
		this.world.physics.enable(this.character, Phaser.Physics.ARCADE);
		
		this.character.body.collideWorldBounds = true;
		
		this.character.body.gravity.y = 0;

	}


	this.moveX = function(x) {

		this.character.body.x +=x;

	}

	this.moveY = function(y) {

		this.character.body.velocity.y = y;

	}
	
	this.addAnimation = function(name, frames, fps) {
	
		this.character.animations.add(name, frames, fps, true);
	
	}
	
	this.playAnimation = function(name) {
	
		this.character.animations.play(name);
	
	}
	
	this.stop = function() {
	
		this.character.animations.stop();
		this.character.frame = this.stillFrame;
	
	}
	
	this.setStopFrame = function(frame) {
	
		this.stillFrame = frame;
	
	}
	
	this.collideWorldBounds = function(collide) {
	
		this.character.body.collideWorldBounds = collide;
	
	}
	
	this.setGravity = function(gravity) {
	
		this.character.body.gravity.y = gravity;
	
	}
	
	this.onGround = function() {
	
		return  this.character.body.touching.down;
	
	}
	
	this.getX = function() {
		
		return this.character.x;	
	
	}
	
	this.getY = function() {
		
		return this.character.y;	
	
	}
	
	this.setX = function(x) {
	
		this.character.x = x;
		
	}
	
	this.setY = function(y) {
	
		this.character.y = y;
		
	}
	
	this.loadSpriteSheet(spriteSheet, spriteX, spriteY);
  
  
};
