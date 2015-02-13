function Keys(game) {
	this.game = game.world;
	
	this.phaserKey = this.game.input.keyboard.createCursorKeys();
	this.left = new Key(this.phaserKey.left);
	this.right = new Key(this.phaserKey.right);
	this.up = new Key(this.phaserKey.up);
	this.down = new Key(this.phaserKey.down);

};
