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

    this.backgrounds = [];

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

        if(this.backgrounds.indexOf(key) != -1) {

            throw new Error("You have already used the key \"" + key + "\"! Please use another one!\nCalled from your funtion: " + arguments.callee.caller.name);

        } else {
            this.backgrounds.push(key);
        }

        this.world.load.image(key, image);
    };

    /**
	* Set the specified image as the background

	* @param {String} key The name of the reference to give the image
	* @param {String} image String reference of the image to use for the player
	* @param {int} width The width of the image, should be bigger then the canvas if scrolling
	* @param {int} height The height of the image, should be bigger then the canvas if scrolling
	*/
    this.setBackgroundImage = function(x, y, width, height, key) {
    	this.background = this.world.add.tileSprite(x, y, width, height, key, 0);
    }

	/**
	* Scoll the background along the x axis
	*
	* @param {int} x the amount to scroll the background by along the x axis
	*/
    this.scrollBackgroundX = function(x) {
    	this.background.tilePosition.x += x;
    }

	/**
	* Scoll the background along the y axis
	*
	* @param {int} y the amount to scroll the background by along the y axis
	*/
    this.scrollBackgroundY = function(y) {
    	this.background.tilePosition.y += y;
    }

	/**
	* Get the current game time in miliseconds
	*
	* @return {int} the current game time in miliseconds
	*/
    this.getGameTime = function() {
    	return this.world.time.now;
    }

	/**
	* Set if the game should be paused or not
	*
	* @param {boolean} if the game should be paused
	*/
    this.setPaused = function(paused) {
    	this.world.paused = paused;
    }

    /**
	* Used to swap the z index's of two objects
	*
	* @param {boolean} if the game should be paused
	*/
   this.swap = function(obj1, obj2) {

        var obj1ZIndex = obj1.group.z;
        var obj2ZIndex = obj2.group.z;

        var obj1Index = obj1ZIndex - 1;
        var obj2Index = obj2ZIndex - 1;

        var childA = game.world.stage.children[obj1Index];
        var childB = game.world.stage.children[obj2Index];

        obj1.group.z = obj2ZIndex;
        obj2.group.z = obj1ZIndex;

        game.world.stage.children[obj1Index] = childB;
        game.world.stage.children[obj2Index] = childA;


   }

};
