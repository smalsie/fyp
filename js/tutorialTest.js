/////////////////////////////////////////////////////////////////
///////////////	Global Variables  //////////////////////////////
///////////////////////////////////////////////////////////////


var game = new Game(750, 450, "Tutorial 2");
	
var keys;
var player;
var left, right, up, down;

var platforms;

var enemy;

var enemyMovingRight = true;

var ourBullets, enemyBullets;

var lastShotTime = 0;
var enemyLastShotTime = 0;

/////////////////////////////////////////////////////////////////
///////////////	Functions //////////////////////////////////////
///////////////////////////////////////////////////////////////

	function preload() {
	 
    game.loadBackgroundImage('background', "img/space-background.png");
		
		player = new Player((game.gameWidth()/2),(game.gameHeight() - 50), game, "img/mario-sprite.png", 17, 32);
		
		platforms = new Platform('platforms', "img/platform.png", game);

    enemy = new Enemy(game);

    enemy.loadSpriteSheet('invader', "img/space_invader_sprite.png", 24, 16);

    ourBullets = new ReusableObject(game, 'bullet', "img/bullet.png");
    enemyBullets = new ReusableObject(game, 'enemyBullet', "img/bullet.png");


		

	}
	
	function create() {
		game.setBackgroundImage(0, 0, 500, 350);

    ourBullets.createReusables();
    enemyBullets.createReusables();

    for(var i = 0; i < 10; i++) {

      for(var j = 0; j < 4; j++) {

        var x = (i * 40);
        var y = (j * 30);

        enemy.createEnemySpriteSheet('invader', x, y);
      }

    }

    enemy.setGroupCoordinates(50,50);
   

		keys = new Keys(game);
		left = keys.left;
		right = keys.right;
		up = keys.up;
    	
      player.createSprite();
    	
    	player.addAnimation('right', [0,1,2,3], 10);
    	player.addAnimation('left', [7,8,9,10], 10);

      enemy.addAnimationToAll('move', [0,1], 5);
    	
    	player.setStopFrame(5);
    	
    	//player.setGravity(100);
    	    	   	
	}

	
	function update() {

		platforms.checkCollision(player);

    game.scrollBackgroundY(1);

    enemy.playAnimationOnAll('move');

    ourBullets.checkCollision(enemy, hitEnemy);

    enemyBullets.checkCollision(player, hitPlayer);

    if(enemyMovingRight) {

      

      if(enemy.getGroupRightX() > (game.gameWidth() - 15)) {
        enemyMovingRight = false;
        enemy.moveGroupX(-1);



      } else {
        enemy.moveGroupX(1);
      }

    } else {

      //enemy.moveGroupX(-1);

      if(enemy.getGroupLeftX() < (15)) {
        enemyMovingRight = true;
        enemy.moveGroupX(1);

        enemy.moveGroupY(10);

      } else {
        enemy.moveGroupX(-1);
      }

    }
  		  			
		if((up.isDown()) && (game.getGameTime() > lastShotTime)) {
		
			var currentBullet = ourBullets.create(player.getX(), player.getY()-20);
      currentBullet.setVelocityY(-400);

      lastShotTime = game.getGameTime() + 200;
		
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

      if(game.getGameTime() > enemyLastShotTime) {
        
        var randomEnemy = enemy.getRandom();
        var enemyBullet = enemyBullets.create(randomEnemy.getX(), randomEnemy.getY()+20);
        enemyBullet.moveTowards(player, 120);
  		  
        enemyLastShotTime = game.getGameTime() + 1500;

      }
		
	}

 function hitEnemy(bullet, enemy) {

    bullet.kill();
    enemy.kill();

 } 

  function hitPlayer(bullet, player) {

    bullet.kill();
    player.kill();

    game.setPaused(true);

 } 

	

