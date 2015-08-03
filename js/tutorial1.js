/////////////////////////////////////////////////////////////////
///////////////	Global Variables  //////////////////////////////
///////////////////////////////////////////////////////////////
var game = new Game(800, 600, "Tu");

var bg1 = true;

/////////////////////////////////////////////////////////////////
///////////////	Functions //////////////////////////////////////
///////////////////////////////////////////////////////////////

function preload() {
	player2 = new ReusableObject(game, "img/dinosaur.png", 17, 32);

player = new ReusableObject(game, "img/mario-sprite.png", 17, 32);

game.loadBackgroundImage('background', "img/dino.png");
game.loadBackgroundImage('space', "img/space-background.png");
}

function create() {


	player2.create(100,10);
	player.create(10,10);

	//player.setStopFrame(5);
	//player.create(10,100);
	//player.create(100,100);
	//player.addAnimation('left', [7,8,9,10], 10);

	keys = new Keys(game);

	left = keys.createLeftKey();
	right = keys.createRightKey();

	a = keys.createKey("a");
	d = keys.createKey("d");

	e = keys.createKey("e");

	game.setBackgroundImage(0,0,1920,400, 'background');


}


function update() {
	//player.playAnimation('left');

	if(right.isDown())
		player.setVelocityX(10);
	else if(left.isDown())
		player.setVelocityX(-10);
	else
		player.setVelocityX(0);

	if(d.isDown())
		player2.setVelocityX(10);
	else if(a.isDown())
		player2.setVelocityX(-10);
	else
		player2.setVelocityX(0);

	if(e.onClick()) {

		if(bg1) {

			game.setBackgroundImage(0,0,1920,400, 'space');
			bg1 = false;
		} else {
			game.setBackgroundImage(0,0,1920,400, 'background');
			bg1 = true;
		}

	}
}
