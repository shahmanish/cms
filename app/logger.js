module.exports = function(loggerConfig) {

  var
    winston = require("winston"),
    logger = new winston.Logger();

    require('winston-papertrail').Papertrail;

    require('winston-mongodb').MongoDB;

    if (loggerConfig.transports.console) {
        logger.add(winston.transports.Console, {
          level: loggerConfig.transports.console.level || "error",
          colorize: loggerConfig.transports.console.colorize || true,
          timestamp: loggerConfig.transports.console.timestamp || true
        });
    }

    if (loggerConfig.transports.file) {
        logger.add(winston.transports.File, {
          level: loggerConfig.transports.file.level || "error",
          filename: loggerConfig.transports.file.filename || "logs/app.log",
          timestamp: loggerConfig.transports.file.timestamp || true
        });
    }

    if (loggerConfig.transports.papertrail) {
        logger.add(winston.transports.Papertrail, {
          level: loggerConfig.transports.papertrail.level || "error",
          host: loggerConfig.transports.papertrail.host ,
          port: loggerConfig.transports.papertrail.port
        });
    }

    if (loggerConfig.transports.mongodb) {
        logger.add(winston.transports.MongoDB, {
          level: loggerConfig.transports.mongodb.level || "error",
          db: loggerConfig.transports.mongodb.db
        });
    }


    return logger;
}
