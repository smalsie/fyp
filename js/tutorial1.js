/////////////////////////////////////////////////////////////////
///////////////	Global Variables  //////////////////////////////
///////////////////////////////////////////////////////////////
var player;
var keyboard, left, right;
var game = new Game(800, 600, "Tutorial 1");

/////////////////////////////////////////////////////////////////
///////////////	Functions //////////////////////////////////////
///////////////////////////////////////////////////////////////

function preload() {
	player = new Sprite("img/mario-sprite.png", 17, 32);
}

function create() {
	player.create(50, 50);
}


function update() {

}
