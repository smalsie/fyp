/**
* Mouse class that allows you to get some information about the mouse,
* mainly the cursor loaction and what to do when clicked.
*
* @author Joshua Small [joshuahugh94@gmail.com/smalljh@aston.ac.uk]
* @version 2.0
*
* @constructor
* Calls on this.constructor
*/
function Mouse(){

    /** @member {Game} */
    this.game;
    /** @member {Phaser.Input} */
    this.input;

    /**
	* The constructor used to encapsulate the code run when the object
	* is first instanciated. It is called at the botttom of the file.
	* So it does not need to be called as it has already been called.
	*/
	this.constructor = function() {

        this.game = Game.GET_INSTANCE().world;

        this.input = this.game.input;

    }

    /**
    * Get the x position of the cursor
    *
    * @return x The x position of the cursor
    */
    this.mouseX = function() {

       return this.input.x;
    }

    /**
    * Get the y position of the cursor
    *
    * @return y The x position of the cursor
    */
    this.mouseY = function() {

       return this.input.y;

    }

    /**
    * Add a function to call when the mouse is clicked
    *
    * @param {function} functionToUse The function to use
    */
    this.onClick = function(functionToUse) {

        this.input.onDown.add(functionToUse, this);

    }

    //set everything up when the object is instansiated.
	this.constructor();

};
