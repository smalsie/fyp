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
/////////////////////////////////////////////////////////////////
///////////////	Functions //////////////////////////////////////
///////////////////////////////////////////////////////////////

function preload() {
	 
    //load in the player		
	player = new Player((game.gameWidth()/2),(game.gameHeight() - 50), game, "img/ship.png", 60, 32);
	//load in the enemy
	enemy = new Enemy(game, 'invader', "img/space_invader_sprite.png", 24, 16);
	
	//load bullets
	playerBullets = new ReusableObject(game, 'bullets', "img/bullet.png");
	
}
	
function create() {
	
	//create the player
	player.createSprite();
	//create the input
	keys = new Keys(game);
	left = keys.createLeftKey();
	right = keys.createRightKey();
	up = keys.createUpKey();
	
	 for(var i = 0; i < 4; i++) {

     	for(var j = 0; j < 10; j++) {

			var x = (j * 40);
       		var y = (i * 30);

        	enemy.createEnemySpriteSheet(x, y);

		  }

	 }
	 
	 //recentre the group
	 enemy.setGroupCoordinates(50,50);
	
}

	
function update() {

	//check if the bullet hits the enemy
	playerBullets.checkCollision(enemy, hitEnemy);

	//move left
	if(left.isDown()) {
		
		player.moveX(-2);
		
	} 
	//move right
	else if(right.isDown()) {
	
		player.moveX(2);
		
	}
  	
  	//up key pressed
  	if(up.isDown()) {
  	
  		if(game.getGameTime() > lastShotTime) {
  	
	  		var currentBullet = playerBullets.create(player.getX(), player.getY()-20);
	  		
	  		currentBullet.setVelocityY(-400);
	  		
	  		lastShotTime = game.getGameTime() + 200;
  		
  		}
  	
  	}
		
}

//called when a bullet hits an enemy
function hitEnemy(bullet, enemy) {

	bullet.kill();
    enemy.kill();
    
} 
