/////////////////////////////////////////////////////////////////
///////////////	Global Variables  //////////////////////////////
///////////////////////////////////////////////////////////////
var game = new Game(600, 400, "Tutorial 7");
//player	
var player;
//input
var keys;
var space;
//bottom platform
var platform;
//trees
var trees;
//colliders
var colliders;
//used to set a delay between spawning trees
var lastTreeSpawn = 0;

//sound to play when jumping
var jumpingSound;

//text
var scoreText;

//score var
var score = 0;

/////////////////////////////////////////////////////////////////
///////////////	Functions //////////////////////////////////////
///////////////////////////////////////////////////////////////

function preload() {
	
	//set the background image
    game.loadBackgroundImage('background', "img/dino.png");
	//load in the player
	player = new Player(50,game.gameHeight()-100, game, "img/dinosaur.png", 32, 32);
	//load in the trees
    trees = new ReusableObject(game, 'tree', "img/tree.png");
	//load in the platform
    platform = new ReusableObject(game, 'platforms', "img/platform_dino.png");
    //load in colliders
    colliders = new ReusableObject(game, 'colliders', "img/treeCollider.png"); 
    //load in the jump sound
    jumpSound = new Sound(game, "jumpsound", "sounds/jump.mp3");

}
	
function create() {

	//set the background image
	game.setBackgroundImage(0,0,1920,400);
	
	//create the trees and the platform and colliders
	trees.createReusables();
	platform.createReusables();
	colliders.createReusables();

	//input
	keys = new Keys(game);
	space = keys.createSpaceKey();

	//create the player
	player.createSprite();
	//create running animation
	player.addAnimation('right', [0,1,2], 10);
	//make the player fall
	player.setGravity(100);
	//play the running animation
	player.playAnimation('right');  
	//create a platform at the bottom
	platform.create(0, "100", "100", 35);  	   	
	//prevent it from moving
	platform.setAllImmovable(true);
	
	//text to display the score	
	scoreText = new Text(game, "Score: 0", game.gameWidth() - 150, 10, "34px", "Arial", "#000");


	
}

	
function update() {

	//scroll the background
    game.scrollBackgroundX(-1);

	//allow the player to be on top of the platform
    platform.checkSimpleCollision(player);
	
	//check if player hit a tree
    trees.checkCollision(player, hitTree);
    //check if player jumped over a tree
    colliders.checkCollision(player, hitOverTree);

	//spawn a tree
    if(game.getGameTime() > lastTreeSpawn) {

          
      //create tree
      var tree = trees.create(game.gameWidth()+10, game.gameHeight()-70);
      tree.setVelocityX(-100);      
      //create collider over tree
      var collider = colliders.create(game.gameWidth()+10, game.gameHeight()-180);
      collider.setVelocityX(-100);
      
      lastTreeSpawn = game.getGameTime() + 2500;
      
  	}
	
	//only jump is the player is on the ground
	if((space.isDown()) && (player.onGround())) {
	
	  	player.moveY(-125);
	  	//play the sound
	  	jumpSound.playAudio();
	
	}  		
		
}

//pause the game when the player hits a tree
function hitTree(tree, player) {

    game.setPaused(true);

}

function hitOverTree(player, collider) {

	//used to prevent multiple collisions causing higher scores
	collider.kill();
	//increase score
	score++;
	
	//update the score text
	scoreText.changeText("Score: " + score);
}
