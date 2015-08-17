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
function HighScore(type, name){

    this.highScore = [];
    this.name = name;
    this.type = type.toUpperCase();

    if(!((this.type == 'ASC') || (this.type == 'DESC'))) {
        this.type = 'ASC';
    }


    this.addScore = function(playerName, score) {

        var index = this.sort(score);

        alert(index);

        var tempHighScore = this.highScore;

        var currentLength = this.highScore.length+1;

        this.highScore = [];

        var added = false;

        for(var i = 0; i < currentLength; i++) {

            if(i == index) {

                this.highScore[i] = {};
                this.highScore[i]['playerName'] = playerName;
                this.highScore[i]['score'] = score;

                added = true;

            } else {

                var indexN = i;

                if(added)
                    indexN --;

                this.highScore[i] = tempHighScore[indexN];

            }

        }

        this.setCookie();
    }

    this.reset = function() {

        this.highScore = [];

        this.setCookie();
    }

    this.getCookie = function () {

        var name = this.name + "=";

        var ca = document.cookie.split(';');

        for(var i=0; i<ca.length; i++) {

            var c = ca[i];

            while (c.charAt(0)==' ')
                c = c.substring(1);

            if (c.indexOf(name) == 0) return c.substring(name.length, c.length);
        }
        return "";
    }

    this.setCookie = function() {

        var arrayEncoded = JSON.stringify(this.highScore);
        document.cookie = this.name + "=" + arrayEncoded + "; ";

    }

    this.sort = function(num) {

        if(this.type == 'ASC')
            return this.sortASC(num);
        else
            return this.sortDESC(num);

    }

    this.sortASC = function(num) {

        for(var i = this.highScore.length - 1; i >= 0; i--) {

            if(num < this.highScore[i]['score'])
                return i + 1;

        }

        return 0;
    }

    this.sortDESC = function(num) {
        alert();
        for(var i = 0; i < this.highScore.length; i++) {

            if(num < this.highScore[i]['score'])
                return i;

        }

        return this.highScore.length;
    }

    var cookie = this.getCookie(this.name);

    if(cookie != "") {

        this.highScore = JSON.parse(cookie);
    }



}
