/////////////////////////////////////////////////////////////////
///////////////	Global Variables  //////////////////////////////
///////////////////////////////////////////////////////////////
var game = new Game();

var bg1 = true;

var dino;

/////////////////////////////////////////////////////////////////
///////////////	Functions //////////////////////////////////////
///////////////////////////////////////////////////////////////

function preload() {
	player2 = new ReusableObject("img/dinosaur.png", 17, 32);
		player3 = new ReusableObject("img/dinosaur.png", 17, 32);

	player = new ReusableObject("img/mario-sprite.png", 17, 32);

	game.loadBackgroundImage('background', "img/dino.png");
	game.loadBackgroundImage('space', "img/space-background.png");

	hs = new HighScore("Josh", "ASC");

	button = new Button("img/button_sprite_sheet.png", 193, 71, 100, 100);
}

function create() {

	button.createButton();
	hs.addScore("Josh", 12355);

	button.addDownAction(null, 1);
	button.addUpAction(null, 2);


	dino = player2.create(100,10);
	p = player.create(10,10);

	game.swap(player2, player)

	/*dino.setWidth(100);
	dino.setHeight(120);

    dino.setDraggable(true);
    dino.setCollisionsOnDrag(true);

	//player.setStopFrame(5);
	player.create(10,100);
	player.create(100,100);
	//player.addAnimation('left', [7,8,9,10], 10);

	keys = new Keyboard(game);

	left = keys.createLeftKey();
	right = keys.createRightKey();
	up = keys.createUpKey();
	down = keys.createDownKey();

	a = keys.createKey("a");
	d = keys.createKey("d");

	e = keys.createKey("e");

	game.setBackgroundImage('space');

	mouse = new Mouse();

	mouse.onClick(click);*/



}


function update() {
	//player.playAnimation('left');

	//game.checkCollision(player,player2, aa, ["Player2"], f);

	//game.checkOverlap(player,player3, aa, ["Player3"]);

	//dino.moveTowardPointer();
/*
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

		game.swap(player, player2)
	}
*/
}

function aa(p1, p2, name) {
	console.log(name);

    return false;
}

function f(a, b) {
    //console.log(b);
}

function aaa() {
	console.log("clicked");
}

function swapBG() {
	if(bg1) {

		game.setBackgroundImage('space');
		bg1 = false;
	} else {
		game.setBackgroundImage('background');
		bg1 = true;
	}

}

function click(event) {
	console.log(event);
}
