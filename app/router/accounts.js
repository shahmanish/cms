module.exports = function(config, mongoose) {

  var
    express = require("express"),
    accountsRouter = express.Router(),
    logger = config.logger,
    crypto = require("crypto");

  var accountSchema = mongoose.Schema({
    username: String,
    password: String
  });

  var AccountModel = mongoose.model("account", accountSchema);


  accountsRouter.route("/authenticate")
    .post(function(req, res) {

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
          res.json("null");
        } else {

          logger.debug("login success: username and password matched");

          req.login(account.username, function(err) {

      			if (err) {
      				console.dir(err);
      				res.status(500).json(err);
      				return;
      			}

      			res.json(account.username);
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
