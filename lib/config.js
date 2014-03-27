var path = require('path');
var nconf = require('nconf');

module.exports = function (filepath, environment) {
    filepath = filepath || path.join(process.cwd(), 'config.json');

    // Command-line arguments
    nconf.argv();

    // Environment variables
    nconf.env();

    // Environment specific configuration file
    var env = environment || process.env.NODE_ENV || 'development',
      parts = filepath.split('.');

    parts.splice(parts.length - 1, 0, env);

    nconf.file(env, parts.join('.'));

    // Default configuration file
    nconf.file(filepath);

    return nconf.get();
};
