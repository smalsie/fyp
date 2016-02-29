/////////////////////////////////////////////////////////////////
///////////////	Global Variables  //////////////////////////////
///////////////////////////////////////////////////////////////
var game = new Game(600, 400, "Tutorial 6");
// Player
var player;
// Input
var keyboard, space;
//Bottom platform
var platform;
// Trees
var trees;
// Colliders
var colliders;
// Used to set a delay between spawning trees
var lastTreeSpawn = 0;

/////////////////////////////////////////////////////////////////
///////////////	Functions //////////////////////////////////////
///////////////////////////////////////////////////////////////

function preload() {

	//set the background image
    game.loadBackgroundImage('background', "img/dino.png");
	//load in the player
	player = new Sprite("img/dinosaur.png", 32, 32);
	//load in the trees
    trees = new Sprite("img/tree.png");
	//load in the platform
    platform = new Sprite("img/platform_dino.png");
    //load in the jump sound
    jumpSound = new Sound("sounds/jump.mp3");
    //load in colliders
    colliders = new Sprite("img/treeCollider.png");

	// Input
	keyboard = new Keyboard();
	space = keyboard.createSpaceKey();
}

function create() {

	//set the background image
	game.setBackgroundImage('background');

	//create the player
	currentPlayer = player.create(50, game.gameHeight() - 100);
	//create running animation
	currentPlayer.addAnimation('right', [0,1,2], 10);
	//make the player fall
	currentPlayer.setGravityY(100);
	//play the running animation
	currentPlayer.playAnimation('right');
	//create a platform at the bottom
	platform.create(0, "90", "100", 35);
	//prevent it from moving
	platform.setImmovable(true);



}


function update() {

	//scroll the background
    game.scrollBackgroundX(-1);

	//allow the player to be on top of the platform
    game.checkCollision(platform, player);

	//check if player hit a tree
    game.checkCollision(trees, player, hitTree);

	//check if player jumped over a tree
    game.checkOverlap(colliders, player, hitOverTree);

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
	if((space.isDown()) && (currentPlayer.onGround())) {

	  	player.setVelocityY(-125);

	}

}

//pause the game when the player hits a tree
function hitTree(tree, player) {

    game.setPaused(true);

}

function hitOverTree(collider, player) {

	//used to prevent multiple collisions causing higher scores
	collider.kill();
	//increase score
	score++;
}
