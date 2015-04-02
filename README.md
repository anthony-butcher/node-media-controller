# node-media-controller

A module for pausing / skipping tracks playing on local machine.  Supports windows only at the minute.

    var mediaController = require('node-media-controller');

    mediaController.getCommands();
    // ['play', 'pause', 'next', 'previous', 'skip'];

    mediaController.executeCommand('next', function(err, result) {

        if(!err) {
        	console.log('done!');
        }

    });