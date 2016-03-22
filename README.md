Headstart 2.0
=============

The headstart materials have been updated to add in the well needed changes. The main differences from v1.0 are:

- ReusableObject has been renamed to Sprite
 - I felt that this is a much simpler name that describes what it is; its just anything that is drawn on the screen.
 - Sprites can also be dragged around by the mouse.
- Removed Player and Enemy classes
 - These were very similar in nature and had a lot of code duplicated.
 - You can now just use the Sprite class to create them in a very similar way.
- Added in a Highscore class
 - This just uses cookies to store an array of highscores.
- Added in Buttons
 - They have different events that can be triggered (hover, click release)
 - Triggering different events allows a function to be called and the appearance of the button to change
- Added in the Mouse class which allows you to get the mouse position
- Added in the ClassLoader class which loads in all of the files for us.
- Removed Tutorial 4 as it is not as relevant due to there no longer being an enemy class.

Folder Structure
----------------

The main source code is located in `src` this will want to be zipped up to give to the students.
They will do all of their work in the js files.

`solutions` contain the solutions to the tutorials, they should not be included in the zip file that is given to the students.

`html` contains all of the documentation for the libs and the index page includes a link to download the zip file. You will want to ensure that the zip of src is inside of `html` with the name `headstart.zip`.

Backend
-------

The main library runs on [phaser](http://phaser.io) version 2.4.2. It does all of the actual rendering of the game, my library just makes it much simpler. If you ever decide to use a newer version of phaser ensure that the solutions work before upgrading.

Documentation
-------------
I am currently using [jsdoc](https://www.npmjs.com/package/jsdoc) for my documentation which is available as a npm package. If you like you can use any js documentation generator but keep in mind I documented this code to the jsdoc standards.

To install jsdoc you will want to run:

`npm install -g jsdoc`

You may need to install this as root.

Then to generate the documentation you will want to run:

`jsdoc -c src/libs/conf.json -R DOCS_README.md -d html src/libs/`

`src/libs/conf.json` contains the config file for jsdoc.

`DOCS_README.md` contains the text that is displayed on the index page of the docs.

Make sure to include a zip of the src code as `headstart.zip` inside the `html` folder

Notes
-----

- Remember to only try this in Firefox, Chrome disables the canvas element that is loaded on the clients machine for security details. If Firefox also does this in the future you may have to get a server running like what was done in the old headstart course.
- Sound does not work on all browsers/machines, it has been very buggy for me so it may not work at all.
