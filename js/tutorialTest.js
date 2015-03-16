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

var fireSound;

var explosions;

var text;
/////////////////////////////////////////////////////////////////
///////////////	Functions //////////////////////////////////////
///////////////////////////////////////////////////////////////

	function preload() {
	 
    game.loadBackgroundImage('background', "img/space-background.png");
		
		player = new Player((game.gameWidth()/2),(game.gameHeight() - 50), game, "img/ship.png", 60, 32);
		
		platforms = new Platform('platforms', "img/platform.png", game);

    enemy = new Enemy(game, 'invader', "img/space_invader_sprite.png", 24, 16);

    ourBullets = new ReusableObject(game, 'bullet', "img/bullet.png");
    enemyBullets = new ReusableObject(game, 'enemyBullet', "img/bullet.png");


		fireSound = new Sound(game, "firesound", "sounds/phaser.mp3");
		
		explosions = new Animation(game, "explosion", "img/explode.png", 128,  128, 30);
		
		text = new UI(game, "Hello", 10, 10, "34px", "Arial", "#FFFFFF");
//a = new Animation(game, "explosion", "img/explode.png", 128,128);

	}
	
	function create() {
		//game.setBackgroundImage(0, 0, 500, 350);
		
	fireSound.allowMultiple(true);

    for(var i = 0; i < 4; i++) {

      for(var j = 0; j < 10; j++) {

        var x = (j * 40);
        var y = (i * 30);

        enemy.createEnemySpriteSheet('invader', x, y);
      }

    }

    //enemy.setGroupCoordinates(50,50);
   

		keys = new Keys(game);
		left = keys.left;
		right = keys.right;
		up = keys.up;
    	
      player.createSprite();
    	
    	
      enemy.addAnimationToAll('move', [0,1], 5);
    	
    	explosions.createAnimation();
    	
    	//player.setGravity(100);
    	    	   	
	}

	
	function update() {

		platforms.checkCollision(player);

    //game.scrollBackgroundY(1);

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
      		
      		fireSound.playAudio();
      		
      		
      		
		
		}

    if(left.isDown()) {

  			
  			player.moveX(-2);
  			
  		
  		}
  		else if(right.isDown()) {
  			
  			player.moveX(2); 
  			
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
    
  explosions.playAnimation(enemy.body.x, enemy.body.y, false);
    
   // enemy.kill();
    
    console.log(enemy);

 } 


  function hitPlayer(bullet, player) {

    bullet.kill();
    //player.kill();

    game.setPaused(true);

 } 

	

