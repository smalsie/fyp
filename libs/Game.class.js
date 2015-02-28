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
function Game(width, height,  name){

    document.title = name
    
    if (typeof phaserType === 'undefined') { phaserType = Phaser.AUTO; }
    
    /** @member {Phaser.Game} */
    this.world = new Phaser.Game(width, height, phaserType, '', { preload: preload, create: create, update: update });
	/** @member {Phaser.Game} */
    this.background;
    
    /**
	* Game Height function that returns the height of the game, useful when 
	* a percentage is give as the size in pixels will be returned
	*
	* @return {Int} Returns the height of the game in pixels
	*/
    this.gameHeight = function(){
        return this.world.world.height;
    };
    
    /**
	* Game Width function that returns the height of the game, useful when 
	* a percentage is give as the size in pixels will be returned
	*
	* @return {Int} Returns the width of the game in pixels
	*/   
    this.gameWidth = function(){
        return this.world.world.width;
    };
        
    /**
	* Load an image to use as the background, can be used multiple times
	* if you want different backgrounds in your game
	*
	* @param {String} key The name of the reference to give the image
	* @param {String} image String reference of the image to use for the player
	*/ 
    this.loadBackgroundImage = function(key, image) {    
    	this.world.load.image(key, image);    
    };

    /**
	* Set the specified image as the background

	* @param {String} key The name of the reference to give the image
	* @param {String} image String reference of the image to use for the player
	*/ 
    this.setBackgroundImage = function() {
    	return this.world.add.tileSprite(0, 0, 400, 300, 'background', 0);
    }
   
    
};
