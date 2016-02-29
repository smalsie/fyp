/////////////////////////////////////////////////////////////////
///////////////	Global Variables  //////////////////////////////
///////////////////////////////////////////////////////////////
var player;
var keyboard, left, right, space;
var platforms, platformOne, platformTwo;
var game = new Game(800, 600, "Tutorial 3");

/////////////////////////////////////////////////////////////////
///////////////	Functions //////////////////////////////////////
///////////////////////////////////////////////////////////////

function preload() {
	player = new Sprite("img/mario-sprite.png", 17, 32);
	platforms = new Sprite("img/platform.png");
	keyboard = new Keyboard();
	left = keyboard.createLeftKey();
	right = keyboard.createRightKey();
	space = keyboard.createSpaceKey();
}

function create() {
	player.create(50, 50);
	// Make mario stay in the world!
	player.collideWorldBounds(true);
	player.addAnimation('left', [7,8,9,10], 10);
	player.addAnimation('right', [0,1,2,3], 10);
	player.setStopFrame(5);
	player.setGravityY(50);

	platformOne = platforms.create(50, 100);
	platformTwo = platforms.create(50, 200);
	platformTwo.setImmovable(true);
}


function update() {

	game.checkCollision(player, platforms);

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
