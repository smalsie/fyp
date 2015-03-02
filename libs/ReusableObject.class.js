/**
* Enemy class which is at the core of the project
* @author Joshua Small [smalljh@aston.ac.uk]
* @version 1.0
*
* @constructor
* @param {Game} game The created game object
*/
function ReusableObject(game, name, image){

	this.game = game.world;

	this.parentGame = game;

	this.group = this.game.add.group(null, '', true, false, 0);

	this.name = name;

	this.game.load.image(this.name, image);

	this.children = new Array();


	this.createReusables = function() {

		this.group.enableBody = true;
		this.group.physicsBodyType = Phaser.Physics.ARCADE;
		this.group.setAll('anchor.x', 0.5);
		this.group.setAll('anchor.y', 1);
		this.group.setAll('outOfBoundsKill', true);
		this.group.setAll('checkWorldBounds', true);
	}

	this.create = function(x, y) {
		
		var image = this.game.cache.getImage(this.name);
		var width = image.width;
		var height = image.height;

		x = this.parseX(x, width);
		y = this.parseY(y, height);		
  		
  			
		var bullet = this.group.create(x, y, this.name);

            //  And fire it
        //bullet.reset(x, y);

	     this.children.push(new GroupChild(bullet));

	     var index = this.children.length - 1;

	     return this.children[index];

	}

	this.createWidthHeight = function(x, y, width, height) {
		
		width = this.parseWidth(width);
		height = this.parseHeight(height);
		
		y = this.parseY(y, height);
		x = this.parseX(x, width);

		var obj = this.create(x, y);
		obj.setWidth(width);
		obj.setHeight(height);

		return obj;
	}

	this.checkCollision = function(obj, functionToUse) {

  		if(obj instanceof Player)
  			obj = obj.character;

  		if(obj instanceof Enemy)
  			obj = obj.group;

		this.game.physics.arcade.overlap(this.group, obj, functionToUse, null, this);
	}

	this.checkSimpleCollision = function(obj) {
  	
  		if(obj instanceof Player)
  			obj = obj.character;
  			
  		this.game.physics.arcade.collide(obj, this.group);
  	
  	}

	this.parseX = function(x, width) {

		if((typeof x === "string") || (x < 0)) {
  		
  			var newX = parseInt(x);
  			
  			if(!(newX > -1)) {
  				console.log("Your value for x: " + x + " is not a valid number!");
  				x = 0;
  			}
   			else {
   			
   				var div = newX/100;   			
   							
  				x = this.parentGame.gameWidth() * div;  				
  				
  				var minWidth = this.parentGame.gameWidth() - width;
  				
  				if(minWidth < x)
  					x = minWidth;
  				
  			}
  			
  		}

  		return x;

	}

	this.parseY = function(y, height) {

		if((typeof y === "string") || (y < 0)) {
  		
  			var newY = parseInt(y);
  			
  			if(!(newY > -1)) {
  				console.log("Your value for y: " + y + " is not a valid number!");
  				y = 0;
  			}
   			else {
   			
   				var div = newY/100;   			
   							
  				y = this.parentGame.gameHeight() * div;

  				var minHeight = this.parentGame.gameHeight() - height;

  				if(minHeight < y) {
  					y = minHeight;
  				}
  				
  			}

  		}

  		return y;
	}

	this.parseWidth = function(width) {

		if((typeof width === "string") || (width < 0)) {
  		
  			var newWidth = parseInt(width);
  			
  			if(!(newWidth > -1)) {
  				console.log("Your value for width for: " + width + " is not a valid number!");
  				width = 0;
  			}
  			else { 			
  			
  				var div = newWidth/100;
  				
  				width = this.parentGame.gameWidth() * div;
  			
  			}
  			
  		}

  		return width;

	}

	this.parseHeight = function(height) {

		if((typeof height === "string") || (height < 0)) {
		
			var newHeight = parseInt(height);
			
			if(!(newHeight > -1)) {
				console.log("Your value for height: " + height + " is not a valid number!");
				height = 0;
			}
			else {
			
				var div = newHeight/100;   			
							
				height = this.parentGame.gameHeight() * div;
				
			}
			
  	  	}

  	  	return height;

	}

	this.setAllImmovable = function(immovable) {

		for(var i = 0; i < this.children.length; i++)
			this.setImmovable(i, immovable);

	}

	this.setImmovable = function(index, immovable) {
		this.children[index].setImmovable(immovable);
	}

	this.createReusables();



}