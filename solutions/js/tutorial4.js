/////////////////////////////////////////////////////////////////
///////////////	Global Variables  //////////////////////////////
///////////////////////////////////////////////////////////////
//main game object
var game = new Game(800, 600, "Tutorial 4");
//player object
var player;
//input keys
var keys;
var left;
var right;
//enemy
var enemy;
/////////////////////////////////////////////////////////////////
///////////////	Functions //////////////////////////////////////
///////////////////////////////////////////////////////////////

function preload() {

    //load in the player
	player = new ReusableObject(game, "../img/ship.png", 60, 32);
	//load in the enemy
	enemy = new ReusableObject(game, "../img/space_invader_sprite.png", 24, 16);

}

function create() {

	//create the player
	player.create((game.gameWidth()/2),(game.gameHeight() - 50));
	//create the input
	keys = new Keyboard(game);
	left = keys.createLeftKey();
	right = keys.createRightKey();

	var xOffset = 50;
	var yOffset = 50;


	for(var i = 0; i < 4; i++) {

    	for(var j = 0; j < 10; j++) {

			var x = (j * 40) + xOffset;
			var y = (i * 30) + yOffset;

        	enemy.create(x, y);

		}

	}


}


function update() {
	//move left
	if(left.isDown()) {

		player.setVelocityX(-100);

	}
	//move right
	else if(right.isDown()) {

		player.setVelocityX(100);

	}
	//no keys pressed
	else {

		player.setVelocityX(0);

  	}

}
