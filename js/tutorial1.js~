/////////////////////////////////////////////////////////////////
///////////////	Global Variables  //////////////////////////////
///////////////////////////////////////////////////////////////


var game = new Game("100", "100", "Tutorial 1");
	
var keys;
var player;
var left, right, up, down;

/////////////////////////////////////////////////////////////////
///////////////	Functions //////////////////////////////////////
///////////////////////////////////////////////////////////////

function preload() {
	
		
		player = new Player(50,50, game, "img/mario-sprite.png", 17, 32);

		

	}
	
	function create() {
		
		keys = new Keys(game);
		left = keys.left;
		right = keys.right;
		
		down = new Key(keys.down);
    	player.createSprite();
    	
    	player.addAnimation('right', [0,1,2,3], 10);
    	player.addAnimation('left', [7,8,9,10], 10);
    	
    	player.setStopFrame(5);
    	
	}

	
	function update() {

  		if(left.isDown()) {
  			
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

	

