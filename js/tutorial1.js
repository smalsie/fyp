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
		player3 = new ReusableObject(game, "img/dinosaur.png", 17, 32);

	player = new ReusableObject(game, "img/mario-sprite.png", 17, 32);

	game.loadBackgroundImage('background', "img/dino.png");
	game.loadBackgroundImage('space', "img/space-background.png");

	button = new Button(game, 'img/button_sprite_sheet.png', 193, 71, null, 50, 100);


}

function create() {


	player2.create(100,10);
		player3.create(110,10);
	player.create(10,10);

	//player.setStopFrame(5);
	player.create(10,100);
	player.create(100,100);
	//player.addAnimation('left', [7,8,9,10], 10);

	keys = new Keys(game);

	left = keys.createLeftKey();
	right = keys.createRightKey();
	up = keys.createUpKey();
	down = keys.createDownKey();

	a = keys.createKey("a");
	d = keys.createKey("d");

	e = keys.createKey("e");

	game.setBackgroundImage(0,0,1920,400, 'background');

	button.createButton();

	button.addDownAction(function() { player.setVelocityX(10); });

}


function update() {
	//player.playAnimation('left');

	game.checkOverlap(player,player2, aa, ["Player2"]);

	game.checkOverlap(player,player3, aa, ["Player3"]);

	if(right.isDown())
		player.setVelocityX(100);
	else if(left.isDown())
		player.setVelocityX(-100);
	else
		player.setVelocityX(0);

	if(up.isDown())
		player.setVelocityY(-10);
	else if(down.isDown())
		player.setVelocityY(10);
	else
		player.setVelocityY(0);

	if(d.isDown())
		player2.setVelocityX(10);
	else if(a.isDown())
		player2.setVelocityX(-10);
	else
		player2.setVelocityX(0);

	player2.setVelocityY(0);

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

function aa(p1, p2, name) {
	console.log(name);
}

function actionOnClick() {
	alert();
}
