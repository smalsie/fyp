/////////////////////////////////////////////////////////////////
///////////////	Global Variables  //////////////////////////////
///////////////////////////////////////////////////////////////


var game = new Game(400, 300, "Tutorial 2");
	
var keys;
var player;
var left, right, up, down;

var platforms;

/////////////////////////////////////////////////////////////////
///////////////	Functions //////////////////////////////////////
///////////////////////////////////////////////////////////////

	function preload() {
	
		
		player = new Player(50,50, game, "img/mario-sprite.png", 17, 32);
		
		platforms = new Platform("platforms", "img/platform.png", game);

		

	}
	
	function create() {
		
		keys = new Keys(game);
		left = keys.left;
		right = keys.right;
		up = keys.up;
		
		down = new Key(keys.down);
    	player.createSprite();
    	
    	player.addAnimation('right', [0,1,2,3], 10);
    	player.addAnimation('left', [7,8,9,10], 10);
    	
    	player.setStopFrame(5);
    	
    	player.setGravity(100);
    	
    	platforms.createPlatform("0", "100", "50", "5");
    	
    	platforms.setImmovable(true);
    	
    	
    	
	}

	
	function update() {

		platforms.checkCollision(player);

  		  			
		if(up.isDown()) {
		
			player.moveY(-10);
		
			//player.playAnimation('right');
		
		} else if(left.isDown()) {

  			
  			player.moveX(-2);
  			
  			player.playAnimation('left');
  		
  		}
  		else if(right.isDown()) {
  			
  			player.moveX(2);
  			
  			player.playAnimation('right');
  			
  		} else {
  			
  			player.stop();
  		
  		}
  		
		
	}

	

