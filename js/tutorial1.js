/////////////////////////////////////////////////////////////////
///////////////	Global Variables  //////////////////////////////
///////////////////////////////////////////////////////////////
var game = new Game(800, 600, "Tu");

/////////////////////////////////////////////////////////////////
///////////////	Functions //////////////////////////////////////
///////////////////////////////////////////////////////////////

function preload() {
	player2 = new ReusableObject(game, "img/dinosaur.png", 17, 32);

player = new ReusableObject(game, "img/mario-sprite.png", 17, 32);


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

	if(e.isDown())
		game.swap(player,  player2);

}
