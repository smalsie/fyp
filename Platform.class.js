function Platform(name, image, game) {

	this.name = name;
	this.image = image;
	this.game = game.world;
	
	this.children = new Array();
	
	this.group = this.game.add.group();
	
	this.group.enableBody = true;
	
	this.game.load.image(name, image);
  
  	this.createPlatform = function(x, y, width, height) {
  	
  		this.children.push(this.group.create(x, y, name));
  		
  		var index = this.children.length-1
  		
  		this.children[index].width = width;
  		this.children[index].height = height;
  	
  	}
  	
  	this.addCollision = function(obj) {
  	
  		if(obj instanceof Player)
  			obj = obj.character;
  			
  		this.game.physics.arcade.collide(obj, this.group);
  	
  	}
  	
  	this.setImmovable = function(immovable) {
  	
  		for(var i = 0; i < this.children.length; i++)
	  		this.children[i].body.immovable = immovable;
  	
  	}
  	
  	
  	
};
