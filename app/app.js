module.exports = function(config) {

  var
    express = require("express"),
    bodyParser = require("body-parser"),
    multer = require("multer"),
    mongoose = require("mongoose"),
    fs = require('fs'),
    session = require('express-session'),
    passport = require("passport"),
    csrf = require("csrf")(),
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

  app.set("json replacer", function(key, value) {
      if (key === "__v") {
        return undefined;
      }
      return value;
  });

	app.use(session({
		resave: false,
		saveUninitialized: false,
		secret : "asecret"
	}));

	app.use(passport.initialize());
	app.use(passport.session());


  mongoose.connect("mongodb://" +
    config.mongoServer.host + ":" + config.mongoServer.port
    + "/" + config.mongoServer.dbName);

  app.use("/api", bodyParser.json());
  app.use("/account", bodyParser.json());
  //app.use("/api", bodyParser.urlencoded({ extended: true }));

  /*
  app.use("/api", function(req, res, next) {

      // checks if user is authenticated
      if (!req.user) {
        console.log("not logged in.");
        res.status(401).json({
          msg: 'not a valid user'
        });
        return;
      }

      next();
  });
  */

  // adding csrf header
  app.use("/api", function(req, res, next) {

    if (!req.user) {
      console.log("not a valid user");
      res.status(401).json({
        msg: 'not logged in'
      });
      return;
    }

    if (!csrf.verify(req.session.csrfSecret, req.get("X-CSRF-Token"))) {
      console.log("not a valid token");
      res.status(401).json({
        msg: 'not logged in'
      });
      return;
    }

    csrf.secret().then(function(secret) {
      req.session.csrfSecret = secret;
      res.set("X-CSRF-Token", csrf.create(req.session.csrfSecret));
      next();
    });


  });

  app.use("/api", require("./router/pages.js")(config, mongoose));
  app.use("/api", require("./router/donations.js")(config, mongoose));
  app.use("/api", require("./router/galleries.js")(config, mongoose));
  app.use("/account", require("./router/accounts.js")(config, mongoose));

  app.use(express.static(config.httpServer.wwwRoot));


  return app;

}
