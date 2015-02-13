function Key(key) {
  
   	this.inputHandler = key;	
	  
	this.isDown = function() {
	
		return (this.inputHandler.isDown);
	}
	

};
