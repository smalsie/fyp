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

    if ( typeof Button.counter == 'undefined' ) {
        // It has not... perform the initialization
        Button.counter = 1;

	} else {

		Button.counter++;

	}

    var created = false;

    var buttonName = 'button' + Button.counter;
    //similar to super();
    this.button = new ReusableObject(game, image, spriteX, spriteY, false, buttonName);

    this.game = game.world;

    this.actionOnClick = actionOnClick;

    this.buttonEvents;
    this.buttonChild;

    var x = x;
    var y = y;


    this.createButton = function() {

        if(created)
            return;

        //need to sort the 2, 1, 0
        this.button.create(x, y);

        this.buttonChild = this.button.children[0].child;

        this.buttonChild.inputEnabled = true;

        this.buttonEvents = this.buttonChild.events;

        created = true;

    }

    this.addUpAction = function(frame, action) {

        var animationName = this.addInputAction("UpAction", frame);

        this.buttonEvents.onInputUp.add(

            function() {

                this.playAction(animationName, action);

            }

        , this);


    }

    this.addOverAction = function(frame, action) {

        var animationName = this.addInputAction("OverAction", frame);

        this.buttonEvents.onInputOver.add(

            function() {

                this.playAction(animationName, action);

            }

        , this);


    }

    this.addDownAction = function(frame, action) {

        var animationName = this.addInputAction("DownAction", frame);

        this.buttonEvents.onInputDown.add(

            function() {

                this.playAction(animationName, action);

            }

        , this);

    }

    this.addOutAction = function(frame, action) {

        var animationName = this.addInputAction("OutAction", frame);

        this.buttonEvents.onInputOut.add(

            function() {

                this.playAction(animationName, action);

            }

        , this);

    }

    this.addInputAction = function(type, frame) {

        if(typeof frame !== 'object')
            frame = [frame];

        var animationName = buttonName + type;

        this.button.addAnimation(animationName, frame, 10);

        return animationName;


    }

    this.playAction = function(animationName, action) {

        //swap the frame of the button
        this.button.playAnimation(animationName);

        //play the users desired action
        if(action != null)
            action.apply(action, null);

    }


}
