/////////////////////////////////////////////////////////////////
///////////////	Global Variables  //////////////////////////////
///////////////////////////////////////////////////////////////


var game = new Game(600, 400, "Dino 2");
	
var keys;
var player;
var left, right, up, down;

var trees;

/////////////////////////////////////////////////////////////////
///////////////	Functions //////////////////////////////////////
///////////////////////////////////////////////////////////////

	function preload() {
	 
    game.loadBackgroundImage('background', "img/dino.png");
		
		player = new Player((game.gameWidth()/2),(game.gameHeight() - 50), game, "img/mario-sprite.png", 17, 32);
				
    trees = new Bullet(game, 'tree', "img/tree.png", 20000);
    
	}
	
	function create() {
		game.setBackgroundImage(0,0,1920,400);

    trees.createBullets();
    
		keys = new Keys(game);
		left = keys.left;
		right = keys.right;
		up = keys.up;

		
		down = new Key(keys.down);
    	
      player.createSprite();
    	
    	player.addAnimation('right', [0,1,2,3], 10);
    	player.addAnimation('left', [7,8,9,10], 10);

     
    	player.setStopFrame(5);
    	
    	//player.setGravity(100);
    	    	   	
	}

	
	function update() {

		
    game.scrollBackgroundX(-1);

   
    
  		  			
		if(up.isDown()) {
		
			
		
		}

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


	

