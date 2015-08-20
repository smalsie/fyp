/**
* Utils class that provides some util functions. Mainly checker functions.
* It is based on the singleton pattern as we only ever need one.
*
* @author Joshua Small [joshuahugh94@gmail.com/smalljh@aston.ac.uk]
* @version 2.0
*
* @constructor
* Calls on this.constructor
*/
function Utils() {

    /**
	* The constructor used to encapsulate the code run when the object
	* is first instanciated. It is called at the botttom of the file.
	* So it does not need to be called as it has already been called.
	*/
	this.constructor = function() {

        if ( typeof Utils.INSTANCE == 'undefined' ) {

            Utils.INSTANCE = this;

        }

        return Utils.INSTANCE;
    }

    /**
    * If a specified image exists.
    *
    * @param {String} imageURL The url of the image to find
    *
    * @return {boolean} If the image exists
    */
    this.imageExists = function(imageURL) {

        this.loadImage(imageURL);

        var img = this.loadImage(imageURL);

        return img.width != 0;

    }

    this.loadImage = function(imageURL) {

        var img = new Image();
        img.src = imageURL;

        return img;
    }

    //set everything up when the object is instansiated.
    this.constructor();

};
