/**
* Enemy class which is at the core of the project
* @author Joshua Small [smalljh@aston.ac.uk]
* @version 1.0
*
* @constructor
* @param {Game} game The created game object
*/
function GroupChild(child){

	this.child = child;

	this.setVelocityX = function(x) {
		if(this.child != null)
			this.child.body.velocity.x = x;
	}

	this.setVelocityY = function(y) {
		if(this.child != null)
			this.child.body.velocity.y = y;
	}

}