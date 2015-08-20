/**
* Button Class that allows buttons to be added to your game. The Button
* class makes use of the ReusableObject class meaning that it behaves in
* a similar way. Like the ResuableObject class, a spritesheet is used to
* show the different states of the button. Event handlers are used to
* determine when a button is being clicked etc!
*
* There is already a Button Class included with the phaser package but it
* has display problems when the background is changed so this was the quicker solution.
*
* @author Joshua Small [joshuahugh94@gmail.com/smalljh@aston.ac.uk]
* @version 2.0
*
* @constructor
* @param {Game} game The Game Object
* @param {String} image String reference of an image to use
* @param {number} spriteWidth The width of one frame of the sprite
* @param {number} spriteHeight The height of one frame of the sprite
* @param {number} x The x coordinate of the button
* @param {number} y The y coordinate of the button
*/
function Button(game, image, spriteWidth, spriteHeight, x, y){

    /** @member {Boolean} */
    this.created;
    /** @member {String} */
    this.buttonName;
    /** @member {Phaser.Button} */
    this.button;
    /** @member {Game} */
    this.game;
    /** @member {Phaser.Events} */
    this.buttonEvents;
    /** @member {GroupChild} */
    this.buttonChild;
    /** @member {number} */
    this.x;
    /** @member {number} */
    this.y;

    /**
	* The constructor used to encapsulate the code run when the object
	* is first instanciated. It is called at the botttom of the file.
	* So it does not need to be called as it has already been called.
	*/
    this.constructor = function() {

        //if undefined, initalise the counter
        if ( typeof Button.counter == 'undefined' ) {

            Button.counter = 1;

    	} else {

    		Button.counter++;

    	}

        this.created = false;
        this.buttonName = 'button' + Button.counter;

        //similar to super();
        this.button = new ReusableObject(game, image, spriteWidth, spriteHeight, false, this.buttonName);

        this.game = game.world;

        this.x = x;
        this.y = y;

    }

    /**
    * Used to create the button, should only be called once.
    */
    this.createButton = function() {

        //if already created do nothing
        if(this.created)
            return;

        //ReusableObject.create()
        this.button.create(x, y);

        //Reference the child(GroupChild) for later use
        this.buttonChild = this.button.children[0].child;

        //Allow us to capture input events
        this.buttonChild.inputEnabled = true;
        //Reference those events for later use
        this.buttonEvents = this.buttonChild.events;

        this.created = true;

    }

    /**
    * Used to add the action to perform when unclicking the button,
    * also allows you to swap the frame of the button to show.
    *
    * @param {function} action The function to call when this event is fired
    * @param {number|number[]} frame The frame(s) to show when this even is fired
    */
    this.addUpAction = function(action, frame) {

        frame = frame || null;

        var animationName = "";

        if(frame != null)
            animationName = this.addActionAnimation("UpAction", frame);

        this.buttonEvents.onInputUp.add(

            function() {

                this.playAction(animationName, action);

            }

        , this);


    }

    /**
    * Used to add the action to perform when hovering over the button,
    * also allows you to swap the frame of the button to show.
    *
    * @param {function} action The function to call when this event is fired
    * @param {number|number[]} frame The frame(s) to show when this even is fired
    */
    this.addOverAction = function(action, frame) {

        frame = frame || null;

        var animationName = "";

        if(frame != null)
            animationName = this.addActionAnimation("OverAction", frame);

        this.buttonEvents.onInputOver.add(

            function() {

                this.playAction(animationName, action);

            }

        , this);


    }

    /**
    * Used to add the action to perform when clicking the button,
    * also allows you to swap the frame of the button to show.
    *
    * @param {function} action The function to call when this event is fired
    * @param {number|number[]} frame The frame(s) to show when this even is fired
    */
    this.addDownAction = function(action, frame) {

        frame = frame || null;

        var animationName = "";

        if(frame != null)
            animationName = this.addActionAnimation("DownAction", frame);

        this.buttonEvents.onInputDown.add(

            function() {

                this.playAction(animationName, action);

            }

        , this);

    }

    /**
    * Used to add the action to perform when leaving the button,
    * also allows you to swap the frame of the button to show.
    *
    * @param {function} action The function to call when this event is fired
    * @param {number|number[]} frame The frame(s) to show when this even is fired
    */
    this.addOutAction = function(action, frame) {

        frame = frame || null;

        var animationName = "";

        if(frame != null)
            animationName = this.addActionAnimation("OutAction", frame);

        this.buttonEvents.onInputOut.add(

            function() {

                this.playAction(animationName, action);

            }

        , this);

    }

    /**
    * Add an animation for a particular event and get the
    * Animation Name.
    *
    * Used Internally.
    *
    * @param {String} type The event type
    * @param {String} frame The frame(s) of the animation
    *
    * @return {String} animationName
    */
    this.addActionAnimation = function(type, frame) {

        if(typeof frame !== 'object')
            frame = [frame];

        var animationName = this.buttonName + type;

        this.button.addAnimation(animationName, frame, 10);

        return animationName;

    }

    /**
    * Play and animation and action associated with a
    * particular event.
    *
    * Used Internally.
    *
    * @param {String} animationName The name of the animation to play
    * @param {function} action The action to fire
    */
    this.playAction = function(animationName, action) {

        //swap the frame of the button
        if(animationName != "")
            this.button.playAnimation(animationName);

        //play the users desired action
        if(action != null)
            action.apply(action, null);

    }
    
    //set everything up when the object is instansiated.
    this.constructor();

}
