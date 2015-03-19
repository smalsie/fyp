/////////////////////////////////////////////////////////////////
///////////////	Global Variables  //////////////////////////////
///////////////////////////////////////////////////////////////


var game = new Game(600, 400, "Dino 2");
	
var keys;
var player;
var left, right, up, down;
var platforms;
var trees;

var lastTreeSpawn = 0;

var jumpSound, bgNoise;

/////////////////////////////////////////////////////////////////
///////////////	Functions //////////////////////////////////////
///////////////////////////////////////////////////////////////

	function preload() {
	 
    game.loadBackgroundImage('background', "img/dino.png");
		
		player = new Player(50,game.gameHeight()-100, game, "img/dinosaur.png", 32, 32);
				
    trees = new ReusableObject(game, 'tree', "img/tree.png");

    platforms = new ReusableObject(game, 'platforms', "img/platform_dino.png");
    
    jumpSound = new Sound(game, "jumpsound", "sounds/jump.mp3");
    bgNoise = new Sound(game, "bgsound", "sounds/bg.mp3", 0.1, true);
    
	}
	
	function create() {
		game.setBackgroundImage(0,0,1920,400);

    trees.createReusables();
    platforms.createReusables();
    
		keys = new Keys(game);
		up = keys.createKey('A');
    	
      player.createSprite();
    	
    	player.addAnimation('right', [0,1,2], 10);
     
    	player.setStopFrame(5);
    	
    	player.setGravity(100);
    	
      player.playAnimation('right');  

      platforms.create(0, "100", "100", 35).setImmovable(true);  	   	
      //platforms.setImmovable(true);
      
      bgNoise.playAudio();
	}

	
	function update() {


    game.scrollBackgroundX(-1);

    platforms.checkSimpleCollision(player);

    trees.checkCollision(player, hitTree);

    if(game.getGameTime() > lastTreeSpawn) {

      var tree = trees.create(game.gameWidth()+10, game.gameHeight()-70);
      tree.setVelocityX(-100);
      
      lastTreeSpawn = game.getGameTime() + 2500;
  	}

		if((up.isDown()) && (player.onGround())) {
		
		  	player.moveY(-125);
		  	jumpSound.playAudio();
		
		}

  		
		
	}

  function hitTree(tree, player) {

    game.setPaused(true);

  }


	
