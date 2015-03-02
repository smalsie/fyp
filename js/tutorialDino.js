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

/////////////////////////////////////////////////////////////////
///////////////	Functions //////////////////////////////////////
///////////////////////////////////////////////////////////////

	function preload() {
	 
    game.loadBackgroundImage('background', "img/dino.png");
		
		player = new Player(50,game.gameHeight()-100, game, "img/mario-sprite.png", 17, 32);
				
    trees = new ReusableObject(game, 'tree', "img/tree.png");

    platforms = new ReusableObject(game, 'platforms', "img/platform_dino.png");
    
	}
	
	function create() {
		game.setBackgroundImage(0,0,1920,400);

    trees.createReusables();
    platforms.createReusables();
    
		keys = new Keys(game);
		left = keys.left;
		right = keys.right;
		up = keys.up;

		
		down = new Key(keys.down);
    	
      player.createSprite();
    	
    	player.addAnimation('right', [0,1,2,3], 10);
     
    	player.setStopFrame(5);
    	
    	player.setGravity(100);
    	
      player.playAnimation('right');  

      platforms.createWidthHeight(0, "100", "100", 32).setImmovable(true);  	   	
      //platforms.setImmovable(true);
	}

	
	function update() {


    game.scrollBackgroundX(-1);

    platforms.checkSimpleCollision(player);

    trees.checkCollision(player, hitTree);

    if(game.getGameTime() > lastTreeSpawn) {

      var tree = trees.create(game.gameWidth()+10, game.gameHeight()-50);
      tree.setVelocityX(-100);
      
      lastTreeSpawn = game.getGameTime() + 1000;
  	}

		if((up.isDown()) && (player.onGround())) {
		
		  	player.moveY(-100);
		
		}

  		
		
	}

  function hitTree(tree, player) {

    game.setPaused(true);

  }


	

