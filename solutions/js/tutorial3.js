/////////////////////////////////////////////////////////////////
///////////////	Global Variables  //////////////////////////////
///////////////////////////////////////////////////////////////
//main game object
var game = new Game(800, 600, "Tutorial 3");
//player object
var player;
//input keys
var keys;
var left;
var right;
//input platforms
var platforms;
/////////////////////////////////////////////////////////////////
///////////////	Functions //////////////////////////////////////
///////////////////////////////////////////////////////////////

function preload() {
	
	//load in the player
	player = new Player(50,50, game, "img/mario-sprite.png", 17, 32);
	//load in the platforms
platforms = new ReusableObject(game, 'platforms', "img/platform.png");
}

function create() {
	
	//create the player
	player.createSprite();
	
	keys = new Keys(game);
	left = keys.createLeftKey();
	right = keys.createRightKey();
	
	//add the left animation
    player.addAnimation('left', [7,8,9,10], 10);
	//add the right animation
	player.addAnimation('right', [0,1,2,3], 10);
	//set the stop frame
	player.setStopFrame(5);
//set gravity on player
	player.setGravity(100);
//create platforms
	platforms.createWidthHeight("0", "90", "50", "5");
}


function update() {

	//move left
	if(left.isDown()) {
		
		player.moveX(-2);
		//play the left animation
    	player.playAnimation('left');
		
	} 
	//move right
	else if(right.isDown()) {
	
		player.moveX(2);
		//play the right animation
    	player.playAnimation('right');
		
	}
	//no keys pressed
	else {
  	
  		//stop the animation
  		player.stop();	
  		
  	}
	
}

	

