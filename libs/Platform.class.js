function Platform(name, image, game) {

	this.name = name;
	this.image = image;
	this.game = game.world;
	
	this.children = new Array();
	
	this.group = this.game.add.group();
	
	this.group.enableBody = true;
	
	this.game.load.image(name, image);
  
  	this.createPlatform = function(x, y, width, height) {
  		

  		 		
  		  	
  		if((typeof width === "string") || (width < 0)) {
  		
  			var newWidth = parseInt(width);
  			
  			if(!(newWidth > -1))
  				console.log("Your value for width: " + width + " is not a valid number!");
  			else { 			
  			
  				var div = newWidth/100;
  				
  				width = game.gameWidth() * div;
  			
  			}
  			
  		}
  		
  		if((typeof height === "string") || (height < 0)) {
  		
  			var newHeight = parseInt(height);
  			
  			if(!(newHeight > -1))
  				console.log("Your value for height: " + height + " is not a valid number!");
   			else {
   			
   				var div = newHeight/100;   			
   							
  				height = game.gameHeight() * div;
  				
  			}
  			
  			
  			  		if((typeof x === "string") || (x < 0)) {
  		
  			var newX = parseInt(x);
  			
  			if(!(newX > -1))
  				console.log("Your value for x: " + x + " is not a valid number!");
   			else {
   			
   				var div = newX/100;   			
   							
  				x = game.gameWidth() * div;  				
  				
  				var minWidth = game.gameWidth() - width;
  				
  				if(minWidth < x)
  					x = minWidth;
  				
  			}
  			
  		}
  		  		
  		if((typeof y === "string") || (y < 0)) {
  		
  			var newY = parseInt(y);
  			
  			if(!(newY > -1))
  				console.log("Your value for y: " + y + " is not a valid number!");
   			else {
   			
   				var div = newY/100;   			
   							
  				y = game.gameHeight() * div;
  				
  				var minHeight = game.gameHeight() - height;
  				
  				if(minHeight < y)
  					y = minHeight;
  				
  			}
  			
  		}
  			
  		}
  		
  		this.children.push(this.group.create(x, y, name));
  		
  		var index = this.children.length-1
  		
  		this.children[index].width = width;
  		this.children[index].height = height;
  		
  		console.log("Width is :" + width + " and the height is: " + height);
  	
  	}
  	
  	this.checkCollision = function(obj) {
  	
  		if(obj instanceof Player)
  			obj = obj.character;
  			
  		this.game.physics.arcade.collide(obj, this.group);
  	
  	}
  	
  	this.setImmovable = function(immovable) {
  	
  		for(var i = 0; i < this.children.length; i++)
	  		this.setSeperateImmovable(immovable, i);
  	
  	}
  	
  	this.setSeperateImmovable = function(immovable, index) {
  	
  		this.children[index].body.immovable = immovable;
  	
  	}
  	
  	
  	
};
