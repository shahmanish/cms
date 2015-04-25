module.exports = function(config, mongoose) {

  var
    express = require("express"),
    accountsRouter = express.Router(),
    logger = config.logger,
    csrf = require("csrf")(),
    crypto = require("crypto");

  var accountSchema = mongoose.Schema({
    username: String,
    password: String
  });

  var AccountModel = mongoose.model("account", accountSchema);


  accountsRouter.route("/authenticate")
    .post(function(req, res) {

      console.dir(req.body);

      logger.debug("username = " + req.body.username + ", password = " + req.body.password);

      var userName = req.body.username;
      var passwordHash = crypto.createHash("sha1").update(req.body.password).digest("hex");

      //var account = new AccountModel(req.body);
      AccountModel.findOne({'username': userName, 'password': passwordHash}, function(err, account) {
        if (err) {
          logger.error(err);
          res.status(500).json(err);
          return;
        }

        if (!account) {
          logger.debug("login failed: username and password did not match");
          req.logout();
          return res.status(401).end();
        } else {

          logger.debug("login success: username and password matched");

          req.login(account.username, function(err) {

      			if (err) {
      				console.dir(err);
      				res.status(500).json(err);
      				return;
      			}

            csrf.secret().then(function(secret) {
      				req.session.csrfSecret = secret;
      				res.set("X-CSRF-Token", csrf.create(req.session.csrfSecret));
      				res.json(account.username);
      			});

      			//res.json(account.username);
      		});

        }


        // if (passwordHash === account.password) {
        //   logger.debug("login success: username and password did not match");
        //
        //   req.login(account.username, function(err) {
        //
      	// 		if (err) {
      	// 			console.dir(err);
      	// 			res.status(500).json(err);
      	// 			return;
      	// 		}
        //
      	// 		res.json(account.username);
      	// 	});
        //   //res.json(account.username);
        //
        // } else {
        //   logger.debug("login failed: username and password did not match");
        //   res.json("null");
        // }

      });

    });

  return accountsRouter;
}
