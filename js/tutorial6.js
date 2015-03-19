/////////////////////////////////////////////////////////////////
///////////////	Global Variables  //////////////////////////////
///////////////////////////////////////////////////////////////
var game = new Game(600, 400, "Tutorial 6");
//player	
var player;
//input
var keys;
var space;
//bottom platform
var platform;
//trees
var trees;
//used to set a delay between spawning trees
var lastTreeSpawn = 0;

/////////////////////////////////////////////////////////////////
///////////////	Functions //////////////////////////////////////
///////////////////////////////////////////////////////////////

function preload() {
	 
    	//set the background image
    game.loadBackgroundImage('background', "img/dino.png");
	//load in the player
	player = new Player(50,game.gameHeight()-100, game, "img/dinosaur.png", 32, 32);
	//load in the trees
    trees = new ReusableObject(game, 'tree', "img/tree.png");
	//load in the platform
    platform = new ReusableObject(game, 'platforms', "img/platform_dino.png");    
    
}
	
function create() {

	//set the background image
	game.setBackgroundImage(0,0,1920,400);
	
	//create the trees and the platform
	trees.createReusables();
	platform.createReusables();

	//input
	keys = new Keys(game);
	space = keys.createSpaceKey();

	//create the player
	player.createSprite();
	//create running animation
	player.addAnimation('right', [0,1,2], 10);
	//make the player fall
	player.setGravity(100);
	//play the running animation
	player.playAnimation('right');  
	//create a platform at the bottom
	platform.create(0, "100", "100", 35);  	   	
	//prevent it from moving
	platform.setAllImmovable(true);
	
}

	
function update() {

	//scroll the background
    game.scrollBackgroundX(-1);

	//allow the player to be on top of the platform
    platform.checkSimpleCollision(player);
	
	//check if player hit a tree
    trees.checkCollision(player, hitTree);

	//spawn a tree
    if(game.getGameTime() > lastTreeSpawn) {

      var tree = trees.create(game.gameWidth()+10, game.gameHeight()-70);
      tree.setVelocityX(-100);
      
      lastTreeSpawn = game.getGameTime() + 2500;
      
  	}
	
	//only jump is the player is on the ground
	if((space.isDown()) && (player.onGround())) {
	
	  	player.moveY(-125);
	
	}  		
		
}

//pause the game when the player hits a tree
function hitTree(tree, player) {

    game.setPaused(true);

}
