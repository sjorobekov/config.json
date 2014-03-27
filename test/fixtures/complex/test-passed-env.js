var config = require('../../../')('./configs/custom.json', 'production');

process.stdout.write(config.foo);
