/////////////////////////////////////////////////////////////////
///////////////	Global Variables  //////////////////////////////
///////////////////////////////////////////////////////////////


var game = new Game(400, 300, "Tutorial 2");
	
var keys;
var player;
var left, right, up, down;

var enemy;

var platforms;

/////////////////////////////////////////////////////////////////
///////////////	Functions //////////////////////////////////////
///////////////////////////////////////////////////////////////

	function preload() {
	
		
		player = new Player(50,50, game, "img/mario-sprite.png", 17, 32);
		
		platforms = new ReusableObject(game, 'platforms', "img/platform.png");

		//enemy = new Enemy(game);

    ///enemy.loadImage('A', "img/mario.png");
    //enemy.loadSpriteSheet('B', "img/mario-sprite.png", 17, 32);

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
    	
    	platforms.createWidthHeight(0, "100", "100", 32)
      platforms.setAllImmovable(true);  
    	
    	
    	
	}

	
	function update() {

		platforms.checkSimpleCollision(player);

  		  			
		if(up.isDown() && player.onGround()) {
		
			player.moveY(-100);
		
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

	

