function Utils() {

    if ( typeof Utils.INSTANCE == 'undefined' ) {

        Utils.INSTANCE = this;

    }

    this.imageExists = function(imageURL)
    {

        this.loadImage(imageURL);
        
        var img = this.loadImage(imageURL);

        return img.width != 0;


    }

    this.loadImage = function(imageURL) {

        var img = new Image();
        img.src = imageURL;

        return img;
    }

    return Utils.INSTANCE;

}
