module.exports = function(config) {

  var
    express = require("express"),
    bodyParser = require("body-parser"),
    multer = require("multer"),
    mongoose = require("mongoose"),
    fs = require('fs'),
    session = require('express-session'),
    passport = require("passport"),
    crypto = require("crypto"),
    app = express(),
    logger = require("./logger")(config.loggerConfig);

  config.logger = logger;

  passport.serializeUser(function(user, done) {
    	done(null, user);
  	});

	passport.deserializeUser(function(user, done) {
  	done(null, user);
	});

	app.use(session({
		resave: false,
		saveUninitialized: false,
		secret : "asecret"
	}));

	app.use(passport.initialize());
	app.use(passport.session());

  app.use(express.static(config.httpServer.wwwRoot));

  mongoose.connect("mongodb://" +
    config.mongoServer.host + ":" + config.mongoServer.port
    + "/" + config.mongoServer.dbName);

  app.use("/api", bodyParser.json());
  app.use("/api", require("./router/pages.js")(config, mongoose));
  app.use("/api", require("./router/donations.js")(config, mongoose));
  app.use("/api", require("./router/galleries.js")(config, mongoose));
  app.use("/api", require("./router/accounts.js")(config, mongoose));


  return app;

}
