/////////////////////////////////////////////////////////////////
///////////////	Global Variables  //////////////////////////////
///////////////////////////////////////////////////////////////
var game = new Game(800, 600, "Tu");

/////////////////////////////////////////////////////////////////
///////////////	Functions //////////////////////////////////////
///////////////////////////////////////////////////////////////

function preload() {
	player = new ReusableObject(game, "img/mario-sprite.png", 17, 32);
	player2 = new ReusableObject(game, "img/mario-sprite.png", 17, 32);


}

function create() {

	player.create(10,10);
	//player2.create(100,10);

	player.setStopFrame(5);
	player.create(10,100);
	player.create(100,100);
	player.addAnimation('left', [7,8,9,10], 10);




}


function update() {
	player.playAnimation('left');

	player.setVelocityX(10);

	if(game.getGameTime() > 1000) {
		player.stop();
	}
}
