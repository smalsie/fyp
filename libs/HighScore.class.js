/**
* Highscore class that allows the user to easily save highscores. It
* uses cookies to store the values so it is per browser.
*
* @author Joshua Small [joshuahugh94@gmail.com/smalljh@aston.ac.uk]
* @version 2.0
*
* @constructor
* Calls on this.constructor
*
* @param {String} tyoe If the scores are ascending or decending (ASC|DESC)
* @param {String} name The name of the highscore
*/
function HighScore(type, name){

    /** @member {Array[]} */
    this.highScore;
    /** @member {String} */
    this.name;
    /** @member {String} */
    this.type;

    /**
	* The constructor used to encapsulate the code run when the object
	* is first instanciated. It is called at the botttom of the file.
	* So it does not need to be called as it has already been called.
	*/
    this.constructor = function() {

        this.highScore = [];

        this.name = name || "HighScore" + Math.random();

        this.type = type.toUpperCase();

        if(!((this.type == 'ASC') || (this.type == 'DESC'))) {

            this.type = 'ASC';

        }

        //get the cookie version of the highScore
        var cookie = this.getCookie(this.name);

        if(cookie != "") {

            this.highScore = JSON.parse(cookie);
        }

    }

    /**
    * Add a new score to the highscore board, it will
    * add the new score in the correct location based on
    * the sorting type.
    *
    * @param {String} playerName The name of the player
    * @param {number} score The players score
    *
    */
    this.addScore = function(playerName, score) {

        //get the index of where the score should be
        var index = this.sort(score);

        //get a temp version of the highscore array
        var tempHighScore = this.highScore;
        //The array will be one bigger as we are adding a new score
        var currentLength = this.highScore.length+1;
        //reset the highscore array
        this.highScore = [];
        //has the new score been added yet?
        var added = false;

        //loop through the array and add at the desired index
        for(var i = 0; i < currentLength; i++) {

            //we are at the index where we want to add it so add it
            if(i == index) {

                this.highScore[i] = {};
                this.highScore[i]['playerName'] = playerName;
                this.highScore[i]['score'] = score;

                added = true;

            } else {

                var indexN = i;

                //if it has been added the index will be one behind the value of i
                if(added)
                    indexN --;

                this.highScore[i] = tempHighScore[indexN];

            }

        }

        //write the highscore to the cookie for future use
        this.setCookie();
    }

    /**
    * Resets our highscore board
    */
    this.reset = function() {

        this.highScore = [];
        //effectively sets the cookie to nothing
        this.setCookie();
    }

    /**
    * Get our cookie that stores the highscore board
    *
    * Used Internally.
    *
    * @return {String} cookie The string value of the leaderboard
    */
    this.getCookie = function () {

        //js cookies are stores as strings http://www.w3schools.com/js/js_cookies.asp
        var name = this.name + "=";

        var cookieArray = document.cookie.split(';');

        for(var i = 0; i < cookieArray.length; i++) {

            var cookie = cookieArray[i];

            while (cookie.charAt(0) == ' ') {

                cookie = cookie.substring(1);

            }

            //found it!
            //Return it without the first bit e.g. cookiename=
            if (cookie.indexOf(name) == 0)
                return cookie.substring(name.length, cookie.length);
        }

        //no cookie
        return "";
    }

    /**
    * Used to write the highscore board to a cookie
    *
    * Used Internally.
    */
    this.setCookie = function() {

        //encode the array as json as cookies can only store strings
        var encodedHighscore = JSON.stringify(this.highScore);

        var date = new Date();
        //expires in 10 days
        var expires = date.setTime(d.getTime() + (10*24*60*60*1000)).toUTCString();
        expires = "expires="+expires

        //write the cookie in the form cookieName=highscoreData;expires=2000;
        document.cookie = this.name + "=" + encodedHighscore + "; " + expires + "; ";

    }

    /**
    * Sort the highscores, calls on different functions
    * depending on the type of ordering used.
    *
    * Used Internally.
    *
    * @return {number} index The index of where the score fits
    */
    this.sort = function(num) {

        if(this.type == 'ASC')
            return this.sortASC(num);
        else
            return this.sortDESC(num);

    }

    /**
    * Sort the highscores in the ascending order
    *
    * Used Internally.
    *
    * @return {number} index The index of where the score fits
    */
    this.sortASC = function(num) {

        for(var i = this.highScore.length - 1; i >= 0; i--) {

            //if the number is smaller then the current value
            if(num < this.highScore[i]['score'])
                return i + 1;

        }

        //its the biggest so should be on top
        return 0;
    }

    /**
    * Sort the highscores in the descending order
    *
    * Used Internally.
    *
    * @return {number} index The index of where the score fits
    */
    this.sortDESC = function(num) {

        for(var i = 0; i < this.highScore.length; i++) {

            //if its smaller then it should be at the current index
            if(num < this.highScore[i]['score'])
                return i;

        }

        //its the biggest so should be at the bottom
        return this.highScore.length;
    }

    //set everything up when the object is instansiated.
    this.constructor();

}
