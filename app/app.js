module.exports = function(config) {

  var
    express = require("express"),
    bodyParser = require("body-parser"),
    multer = require("multer"),
    mongoose = require("mongoose"),
    fs = require('fs'),
    session = require('express-session'),
    cookieParser = require('cookie-parser'),
    passport = require("passport"),
    csrf = require("csrf")(),
    path = require("path"),
    crypto = require("crypto"),
    app = express(),
    logger = require("./logger")(config.loggerConfig),
    indexPath = path.resolve(path.join("app", "www", "index.html"));

  config.logger = logger;

  passport.serializeUser(function(user, done) {
    	done(null, user);
  	});

	passport.deserializeUser(function(user, done) {
  	done(null, user);
	});

  // serve all static files regardless
	app.use("/js", express.static(config.httpServer.jsRoot));
	app.use("/libs", express.static(config.httpServer.libsRoot));
	app.use("/css", express.static(config.httpServer.cssRoot));
	app.use("/i", express.static(config.httpServer.imageRoot));
	app.use("/media", express.static(config.httpServer.mediaRoot));

  app.set("json replacer", function(key, value) {
      if (key === "__v") {
        return undefined;
      }
      return value;
  });

  // parse cookies...
	app.use(cookieParser());

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

  app.use("/api", bodyParser.json({limit: '50mb'}));
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
  /** disable csrf
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
  */

  app.use("/api", require("./router/pages.js")(config, mongoose));
  app.use("/api", require("./router/donations.js")(config, mongoose));
  app.use("/api", require("./router/galleries.js")(config, mongoose));
  // disable authentication
  app.use("/account", require("./router/accounts.js")(config, mongoose));

  app.use(express.static(config.httpServer.wwwRoot));


  // all other requests should return index.html
	// needed for HTML5 history API
	app.use("/", function(req, res) {
		res.sendFile(indexPath, function(err) {
			if (err) res.status(err.status).end();
		});
	});

  return app;

}
