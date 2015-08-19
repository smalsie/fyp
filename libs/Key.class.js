/**
* Standard key class See {@link www.phaser.io|Phaser}
*
* @author Joshua Small
* @version 1.0

* @constructor
* @param {Phaser.Key} key The key to listen to events on
*/
function Key(key) {

  	/** @member {Phaser.Key} */
   	this.inputHandler = key;

    this.justClicked = false;

	/**
	* Is Down function that returns if the key is currently held down or not
	*
	* @return {boolean} Returns if the key is currently held down or not
	*/
	this.isDown = function() {

		return (this.inputHandler.isDown);
	}

    this.onClick = function() {

        if(this.isDown() && !this.justClicked) {

            this.justClicked = true;

            return true;

        } else if(this.isDown() && this.justClicked) {

            return false;

        } else if(!this.isDown() && this.justClicked) {

            this.justClicked = false;

            return false;
        }
    }

};
