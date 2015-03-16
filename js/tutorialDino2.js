/////////////////////////////////////////////////////////////////
///////////////	Global Variables  //////////////////////////////
///////////////////////////////////////////////////////////////


var game = new Game(600, 400, "Dino 2");
	
var keys;
var player;
var left, right, up, down;
var platforms;
var trees, overTrees;

var lastTreeSpawn = 0;

var jumpSound, bgNoise;

var text;

var score = 0;



/////////////////////////////////////////////////////////////////
///////////////	Functions //////////////////////////////////////
///////////////////////////////////////////////////////////////

	function preload() {
	 
    game.loadBackgroundImage('background', "img/dino.png");
		
		player = new Player(50,game.gameHeight()-100, game, "img/dinosaur.png", 32, 32);
				
    trees = new ReusableObject(game, 'tree', "img/tree.png");
    overTrees = new ReusableObject(game, 'over', "img/treeCollider.png");

    platforms = new ReusableObject(game, 'platforms', "img/platform_dino.png");
    
    jumpSound = new Sound(game, "jumpsound", "sounds/jump.mp3");
    bgNoise = new Sound(game, "bgsound", "sounds/bg.mp3", 0.1, true);
    
    
    
	}
	
	function create() {
		game.setBackgroundImage(0,0,1920,400);

    trees.createReusables();
    overTrees.createReusables();
    platforms.createReusables();
    
		keys = new Keys(game);
		left = keys.left;
		right = keys.right;
		up = keys.up;

		
		down = new Key(keys.down);
    	
      player.createSprite();
    	
    	player.addAnimation('right', [0,1,2], 10);
     
    	player.setStopFrame(5);
    	
    	player.setGravity(100);
    	
      player.playAnimation('right');  

      platforms.createWidthHeight(0, "100", "100", 35).setImmovable(true);  	   	
      platforms.setAllImmovable(true);
      
      text = new Text(game, "Score: 0", game.gameWidth() - 150, 10, "34px", "Arial", "#000");
      
      bgNoise.playAudio();
	}

	
	function update() {


    //game.scrollBackgroundX(-1);

    platforms.checkSimpleCollision(player);

    trees.checkCollision(player, hitTree);
    overTrees.checkCollision(player, hitOverTree);

    if(game.getGameTime() > lastTreeSpawn) {

      var tree = trees.create(game.gameWidth()+10, game.gameHeight()-70);
      tree.setVelocityX(-100);
      
       var overTree = overTrees.create(game.gameWidth()+10, game.gameHeight()-180);
      overTree.setVelocityX(-100);
      
      lastTreeSpawn = game.getGameTime() + 2500;
  	}

		if((up.isDown()) && (player.onGround())) {
		
		  	player.moveY(-125);
		  	jumpSound.playAudio();
		
		}

  		
		
	}

  function hitTree(player, tree) {

	player.kill();
    game.setPaused(true);

  }
  
   function hitOverTree(player, overTree) {
		
		overTree.kill();
		score++;
    	text.changeText("Score: " + score);

  }


	

