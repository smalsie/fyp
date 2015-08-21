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
	player = new ReusableObject(game, "../img/mario-sprite.png", 17, 32);

}

function create() {

	//create the player
	player.create(50,50);

	keys = new Keyboard(game);
	left = keys.createLeftKey();
	right = keys.createRightKey();

}


function update() {

	if(right.isDown())
		player.setVelocityX(100);
	else if(left.isDown())
		player.setVelocityX(-100);
	else
		player.setVelocityX(0);

}
