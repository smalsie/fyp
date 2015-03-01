/**
* Enemy class which is at the core of the project
* @author Joshua Small [smalljh@aston.ac.uk]
* @version 1.0
*
* @constructor
* @param {Game} game The created game object
*/
function Enemy(game){

   this.game = game.world;

   this.group = this.game.add.group(null, '', true, false, 0);

   this.children = new Array();

   /**
   * Load in a new image for the enemy, use this if you don't want them to be animated
   *
   * @param {String} name The name of the image for later reference
   * @param {String} image String reference of the image to be used
   */
   this.loadImage = function(name, image) {
       this.game.load.image(name, image);
   }
   /**
   * Load in a new spritesheet
   *    
   * @param {String} name The name of the spriteSheet for later reference
   * @param {String} spriteSheet String reference of the spritesheet to use for the player
   * @param {int} spriteX Width of one image of the character in the spritesheet @see blahh
   * @param {int} spriteY Height of one image of the character in the spritesheet @see blahh
   */
   this.loadSpriteSheet = function(name, spriteSheet, spriteX, spriteY) {

       this.game.load.spritesheet(name, spriteSheet, spriteX, spriteY);

   }

   this.createEnemyImage = function(name, x, y) {

   }   

   this.createEnemySpriteSheet = function(name, x, y) {

       
       //this.enemy = this.game.add.sprite(this.startX, this.startY, name);
        
      this.children.push(this.group.create(x, y, name));
      var index = this.children.length - 1;

      this.children[index].anchor.setTo(0.5, 0.5);
       //this.character.scale.setTo(2,2);
      this.game.physics.enable(this.children[index], Phaser.Physics.ARCADE);
       

   }


  /**
  * Add an animation to the player
  * 
  * @param {String} name The name of an animation, required for referencing later.
  * @param {int[]} frames An array of the frames thae animation playes in the order that they are played
  * @param {int} fps The frame rate of the animetion, higher plays the animation faster
  */
  this.addAnimation = function(name, frames, fps, index) {
  
    this.children[index].animations.add(name, frames, fps, true);
  
  }

  this.addAnimationToAll = function(name, frames, fps) {

    for(var i = 0; i < this.children.length; i++)
      this.addAnimation(name, frames, fps, i);

  }
  
  /**
  * Plays a predefined animation
  *
  * @param {String} name The name of the animation to play, 
  * this animation must have been created with {@link Player#addAnimation} beforehand
  */
  this.playAnimation = function(name, index) {
  
    this.children[index].animations.play(name);
  
  }

  /**
  * Plays a predefined animation
  *
  * @param {String} name The name of the animation to play, 
  * this animation must have been created with {@link Player#addAnimation} beforehand
  */
  this.playAnimationOnAll = function(name) {
  
    for(var i = 0; i < this.children.length; i++)
      this.playAnimation(name, i);
  
  }

  this.getGroupLeftX = function() {

    var x = this.group.x;

    //var width = this.group.getLocalBounds().width;

    return x + (this.group.getLocalBounds().x);

  }

  this.getGroupRightX = function() {

    var x = this.group.x;

    var width = this.group.width;

    return x + width + (this.group.getLocalBounds().x);

  }

  this.moveGroupX = function(x) {

    this.group.x += x;

  }

  this.moveGroupY = function(y) {

    this.group.y += y;

  }

  this.setGroupCoordinates = function(x, y) {

    this.group.x = x;
    this.group.y = y;

  }

};