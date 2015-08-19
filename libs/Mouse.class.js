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
function Mouse(game){

    this.game = game.world;

    this.input = this.game.input;


    this.mouseX = function() {
       return this.input.x;
    }

    this.mouseY = function() {
       return this.input.y;
    }

    this.onClick = function(functionToUse) {
        this.input.onDown.add(functionToUse, this);
    }

}
