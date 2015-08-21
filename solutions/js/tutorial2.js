/////////////////////////////////////////////////////////////////
///////////////	Global Variables  //////////////////////////////
///////////////////////////////////////////////////////////////
//main game object
var game = new Game(800, 600, "Tutorial 2");
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
	player = new ReusableObject("../img/mario-sprite.png", 17, 32);

}

function create() {

	//create the player
	player.create(50,50);

	player.create(50,100);

	keys = new Keyboard();
	left = keys.createLeftKey();
	right = keys.createRightKey();

	//add the left animation
    player.addAnimation('left', [7,8,9,10], 10);
	//add the right animation
	player.addAnimation('right', [0,1,2,3], 10);
	//set the stop frame
	player.setStopFrame(5);


}


function update() {

	if(right.isDown()) {

		player.setVelocityX(100);

		player.playAnimation('right');

	} else if(left.isDown()) {

		player.setVelocityX(-100);

		player.playAnimation('left');

	} else {


		player.setVelocityX(0);

		player.stop();

	}

}
