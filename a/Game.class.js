/**
* Game class which is at the core of the project
*
* @class Game
* @constructor
* @param {int} width : Width of the game
* @param {int} height : Height of the game
* @param {String} name : The name of the game
*/
function Game(width, height,  name){

    document.title = name
    
    if (typeof phaserType === 'undefined') { phaserType = Phaser.AUTO; }
    
    this.world = new Phaser.Game(width, height, Phaser.AUTO, '', { preload: preload, create: create, update: update });
    
    /**
	* Game Height function that returns the height of the game, useful when 
	* a percentage is give as the size in pixels will be returned
	*
	* @method gameHeight
	* @return {Int} Returns the height of the game in pixels
	*/
    this.gameHeight = function(){
        return this.world.world.height;
    };
    
    /**
	* Game Width function that returns the height of the game, useful when 
	* a percentage is give as the size in pixels will be returned
	*
	* @method gameWidth
	* @return {Int} Returns the width of the game in pixels
	*/   
    this.gameWidth = function(){
        return this.world.world.width;
    };
   
    
};
