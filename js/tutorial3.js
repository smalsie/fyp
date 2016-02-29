/////////////////////////////////////////////////////////////////
///////////////	Global Variables  //////////////////////////////
///////////////////////////////////////////////////////////////
var player;
var keyboard, left, right, space;
var game = new Game(800, 600, "Tutorial 3");

/////////////////////////////////////////////////////////////////
///////////////	Functions //////////////////////////////////////
///////////////////////////////////////////////////////////////

function preload() {
	player = new Sprite("img/mario-sprite.png", 17, 32);
	keyboard = new Keyboard();
	left = keyboard.createLeftKey();
	right = keyboard.createRightKey();
	space = keyboard.createSpaceKey();
}

function create() {
	player.create(50, 50);
	player.addAnimation('left', [7,8,9,10], 10);
	player.addAnimation('right', [0,1,2,3], 10);
	player.setStopFrame(5);
}


function update() {

	if(left.isDown()) {
		player.setVelocityX(-50);
		player.playAnimation('left');
	} else if(right.isDown()) {
		player.setVelocityX(50);
		player.playAnimation('right');
	} else {
		player.setVelocityX(0);
		player.stop();
	}

	if(space.justPressed()) {
		player.setVelocityY(-50);
	}

}
