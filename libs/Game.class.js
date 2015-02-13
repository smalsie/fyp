function Game(width, height,  name){

    document.title = name
    
    if (typeof phaserType === 'undefined') { phaserType = Phaser.AUTO; }
    
    this.world = new Phaser.Game(width, height, Phaser.AUTO, '', { preload: preload, create: create, update: update });
    
    this.gameHeight = function(){
        return this.world.world.height;
    };
   
    this.gameWidth = function(){
        return this.world.world.width;
    };
   
    
};
