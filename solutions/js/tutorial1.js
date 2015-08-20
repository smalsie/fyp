/////////////////////////////////////////////////////////////////
///////////////	Global Variables  //////////////////////////////
///////////////////////////////////////////////////////////////
//main game object
var game = new Game(800, 600, "Tutorial 1");
//player object
var player;
//input keys
var keys;
var left;
var right;
/////////////////////////////////////////////////////////////////
///////////////	Functions //////////////////////////////////////
///////////////////////////////////////////////////////////////

function preload() {

	//load in the player
	player = new ReusableObject(game, "img/mario-sprite.png", 17, 32);

}

function create() {

	//create the player
	player.createSprite();

	keys = new Keys(game);
	left = keys.createLeftKey();
	right = keys.createRightKey();

}


function update() {

	//move left
	if(left.isDown()) {

		player.moveX(-2);

	}
	//move right
	else if(right.isDown()) {

		player.moveX(2);

	}

}
