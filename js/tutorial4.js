/////////////////////////////////////////////////////////////////
///////////////	Global Variables  //////////////////////////////
///////////////////////////////////////////////////////////////
var player, currentPlayer, bullets;
var keyboard, left, right, up;
var invaders, bullets;
var lastShotTime = 0;
var game = new Game(800, 600, "Tutorial 4");

/////////////////////////////////////////////////////////////////
///////////////	Functions //////////////////////////////////////
///////////////////////////////////////////////////////////////

function preload() {
	player = new Sprite("img/ship.png");
	invaders = new Sprite("img/space_invader_sprite.png", 24, 16);

	keyboard = new Keyboard();
	left = keyboard.createLeftKey();
	right = keyboard.createRightKey();
	up = keyboard.createUpKey();
}

function create() {
	currentPlayer = player.create(288, 560);

	// Create the invaders!
	for(var i = 0; i < 4; i++) {

	   for(var j = 0; j < 10; j++) {

		   var x = (j * 40);
		   var y = (i * 30);

		   invaders.create(x, y);

		 }

	}
}


function update() {
	
	if(left.isDown()) {
		player.setVelocityX(-250);
	} else if(right.isDown()) {
		player.setVelocityX(250);
	} else {
		player.setVelocityX(0);
	}

	if(up.justPressed()) {
		
	}
	
}
