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
	player = new Player((game.gameWidth()/2),(game.gameHeight() - 50), game, "img/ship.png", 60, 32);
	//load in the enemy
	enemy = new Enemy(game, 'invader', "img/space_invader_sprite.png", 24, 16);
	
}
	
function create() {
	
	//create the player
	player.createSprite();
	//create the input
	keys = new Keys(game);
	left = keys.createLeftKey();
	right = keys.createRightKey();
	
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
	//move left
	if(left.isDown()) {
		
		player.moveX(-2);
		
	} 
	//move right
	else if(right.isDown()) {
	
		player.moveX(2);
		
	}
		
}