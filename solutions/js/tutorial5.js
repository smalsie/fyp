/////////////////////////////////////////////////////////////////
///////////////	Global Variables  //////////////////////////////
///////////////////////////////////////////////////////////////
//main game object
var game = new Game(800, 600, "Tutorial 5");
//player object
var player;
//input keys
var keys;
var left;
var right;
var up;
//enemy
var enemy;
//bullets
var playerBullets;
//get the last shot time
var lastShotTime = 0;

var currentPlayer;

var explosions;
/////////////////////////////////////////////////////////////////
///////////////	Functions //////////////////////////////////////
///////////////////////////////////////////////////////////////

function preload() {

	//load in the player
	player = new ReusableObject("../img/ship.png", 60, 32);
	//load in the enemy
	enemy = new ReusableObject("../img/space_invader_sprite.png", 24, 16, true, "enemy");

	explosions = new ReusableObject("../img/explode.png", 64, 64);

	//load bullets
	playerBullets = new ReusableObject("../img/bullet.png");

}

function create() {

	currentPlayer = player.create((game.gameWidth()/2),(game.gameHeight() - 50));
	//create the input
	keys = new Keyboard();
	left = keys.createLeftKey();
	right = keys.createRightKey();
	up = keys.createUpKey();

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

	//check if the bullet hits the enemy
	game.checkCollision(playerBullets, enemy, hitEnemy);

	//move left
	if(left.isDown()) {

		currentPlayer.setVelocityX(-100);

	}
	//move right
	else if(right.isDown()) {

		currentPlayer.setVelocityX(100);

	}
	//no keys pressed
	else {

		currentPlayer.setVelocityX(0);

  	}

  	//up key pressed
  	if(up.isDown()) {

  		if(game.getGameTime() > lastShotTime) {

	  		var currentBullet = playerBullets.create(currentPlayer.getX() + 28, currentPlayer.getY()-20);

	  		currentBullet.setVelocityY(-400);

	  		lastShotTime = game.getGameTime() + 200;

  		}

  	}

}

//called when a bullet hits an enemy
function hitEnemy(bullet, enemy) {

	console.log(enemy);

	var e = explosions.create(enemy.getX() - 25, enemy.getY() - 25);

	e.addAnimation('explosion', [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15], 30, false);

	e.addActionOnAnimationComplete(function() { e.kill(); });

	e.playAnimation('explosion');

	bullet.kill();
    enemy.kill();



}
