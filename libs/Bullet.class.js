/**
* Enemy class which is at the core of the project
* @author Joshua Small [smalljh@aston.ac.uk]
* @version 1.0
*
* @constructor
* @param {Game} game The created game object
*/
function Bullet(game, name, image, timeDelay){

	this.game = game.world;

	this.group = this.game.add.group(null, '', true, false, 0);

	this.timeDelay = timeDelay;

	this.game.load.image(name, image);

	this.lastMoved = 0;


	this.createBullets = function() {

		this.group.enableBody = true;
		this.group.physicsBodyType = Phaser.Physics.ARCADE;
		this.group.createMultiple(30, name);
		this.group.setAll('anchor.x', 0.5);
		this.group.setAll('anchor.y', 1);
		this.group.setAll('outOfBoundsKill', true);
		this.group.setAll('checkWorldBounds', true);
	}

	this.moveUp = function(x, y) {
		
		if(this.game.time.now > this.lastMoved) {

			var bullet = this.group.getFirstExists(false);

	        if (bullet)
	        {
	            //  And fire it
	            bullet.reset(x, y);
	            
	            this.lastMoved = this.game.time.now + this.timeDelay;
	        }

	        return new GroupChild(bullet);

		}

		return new GroupChild(null);

	}

	this.setVelocityX = function(x) {

	}

	this.checkCollision = function(obj, functionToUse) {

  		if(obj instanceof Player)
  			obj = obj.character;

  		if(obj instanceof Enemy)
  			obj = obj.group;

		this.game.physics.arcade.overlap(this.group, obj, functionToUse, null, this);
	}



}