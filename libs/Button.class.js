/**
* Game class which is at the core of the project
* @author Joshua Small [smalljh@aston.ac.uk]
* @version 1.0
*
* @constructor
* @param {int} width Width of the game
* @param {int} height Height of the game
* @param {String} name The name of the game
*/
function Button(game, image, spriteX, spriteY, actionOnClick, x, y){

    this.game = game.world;

    this.actionOnClick = actionOnClick;

    this.button;

    if ( typeof Button.counter == 'undefined' ) {
        // It has not... perform the initialization
        Button.counter = 1;

	} else {

		Button.counter++;

	}

    var buttonName = 'button' + Button.counter;

    this.game.load.spritesheet(buttonName, image, spriteX, spriteY);

    this.createButton = function() {
        //need to sort the 2, 1, 0
        this.button = this.game.add.button(x, y, buttonName, this.actionOnClick, this, 2, 1, 0);

        this.button.name = buttonName;

    }

    this.addUpAction = function(action) {

        this.button.onInputUp.add(action, this);

    }

    this.addDownAction = function(action) {

        this.button.onInputOver.add(action, this);

    }

    this.addOutAction = function(action) {

        this.button.onInputOut.add(action, this);

    }


}
