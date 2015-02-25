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
   
    
};
