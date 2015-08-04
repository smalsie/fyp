/**
* Enemy class which is at the core of the project
* @author Joshua Small [smalljh@aston.ac.uk]
* @version 1.0
*
* @constructor
* @param {Game} game The created game object
* @param {String} name The name of the ReusableObject
* @param {String} image String reference of an image to use
*/
function Highscore() {

    var text;

    //Do we want singleton?
    if ( typeof Highscore.INSTANCE == 'undefined' ) {

        Highscore.INSTANCE = this;

        text = Math.random();

	}

    this.text = function() {
        return text;
    }

    

    //return instance - for singleton
    return Highscore.INSTANCE;

}
