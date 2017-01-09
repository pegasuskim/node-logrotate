var config  = require(__dirname + '/../config');
var winston = require('winston');

// set logging level
var loggerConfig = {
  levels: {
    verbose: 0,
    error: 1,
    warn: 2,
    info: 3,
    debug: 4,
    file: 5
  },colors: {
    verbose: 'blue',
    error: 'red',
    warn: 'yellow',
    info: 'green',
    debug: 'green',
    file: 'white'
  }
};


//winston.addColors(loggerConfig.colors);
var loggr = new (winston.Logger)({ levels: loggerConfig.levels });

// add logging transports
if (config.logging) {
  try {
    //winston.remove(winston.transports.Console);
    loggr.remove(winston.transports.Console);
  } catch (e) { }

  var detail, type;
  for (var i = 0; i < config.logging.length; i++) {
    detail = config.logging[i];
    type = detail.type;
    delete detail.type;
    //winston.add(winston.transports[type], detail);
    loggr.add(winston.transports[type], detail);
  }
}

//winston.info("winston initialized");
loggr.info("winston logger initialized");
module.exports = loggr;
//module.exports = winston;


