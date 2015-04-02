var execute = require('child_process').exec;

var config = {
    windowsAppPath: __dirname + '\\bin\\MediaController.Program.exe',
    commands: {
        play: 'play',
        pause: 'pause',
        next: 'next',
        previous: 'previous',
        skip: 'next'
    }
};

var formatCommandString = function(command) {
    return config.windowsAppPath + ' command ' + config.commands[command];
};

var getCommand = function(str) {
    return config.commands[str];
}

var mediaController = {

    getCommands: function() {
        var cmds = [];
        for(var key in config.commands) {
            cmds.push(key);
        }
        return cmds;
    },

    commandIsValid: function(string) {
        return (typeof getCommand(string) !== 'undefined');
    },

    executeCommand: function(string, callback) {
        if (this.commandIsValid(string)) {
            var execString = formatCommandString(getCommand(string));
            execute(execString, function (err, res) {
                callback(err, res);
            });
        }
    }

};

module.exports = mediaController;