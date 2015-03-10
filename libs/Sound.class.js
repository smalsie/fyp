/**
* Sound class which is at the core of the project
* @author Joshua Small [smalljh@aston.ac.uk]
* @version 1.0
*
* @constructor
* @param {int} width Width of the game
* @param {int} height Height of the game
* @param {String} name The name of the game
*/
function Sound(game, name, sound, volume, loop){

	this.game = game.world;
	this.name = name;
	this.sound = sound;
	this.audio;
	
	this.game.load.audio(this.name, this.sound);
	this.audio = this.game.add.audio(this.name, volume, loop);
	
	//this.audio.allowMultiple(true);
	
	this.playAudio = function() {			
			
		this.audio.play();
	
	}
	
	this.pauseAudio = function() {
	
		this.audio.pause();
	
	}
	
	this.restartAudio = function() {
	
		this.audio.restart();
	
	}
	
	this.resumeAudio = function() {
	
		this.audio.resume();
	
	}
	
	this.stopAudio = function() {
	
		this.audio.stop();
	
	}
	
	this.allowMultiple = function(allowMultiple) {
	
		this.audio.allowMultiple = allowMultiple;
	
	}
}
