module.exports = function(config, mongoose) {

  var
    express = require("express"),
    donationsRouter = express.Router();

  var donationSchema = mongoose.Schema({
    name: String,
    creditCard: String,
    amount: Number,
    date: Date
  });

  var DonationModel = mongoose.model("donation", donationSchema);


  donationsRouter.route("/donations")
    .get(function(req, res) {

      var t = new DonationModel(req.body.donation);
      DonationModel.find({}, function(err, donations) {
        if (err) {
          console.log(err);
          res.status(500).json(err);
          return;
        }

        res.json(donations);

      });


    });

  donationsRouter.route("/donation")
    .post(function(req, res){
      console.dir(req.body);
      var t = new DonationModel(req.body);
      t.save(function(err, donation) {
        if (err) {
          console.log(err);
          res.status(500).json(err);
          return;
        }

        res.json(donation);

      });

    });

  donationsRouter.route("/donation/:donationId")
    .get(function(req, res) {

      var t = new DonationModel(req.body.donation);
      DonationModel.findById(req.params.donationId, function(err, donation) {
        if (err) {
          console.log(err);
          res.status(500).json(err);
          return;
        }

        res.json(donation);

      });


    })
    .put(function(req, res) {

      var t = new DonationModel(req.body.donation);
      DonationModel.findByIdAndUpdate(req.params.donationId,
        req.body.donation, function(err, donation) {
        if (err) {
          console.log(err);
          res.status(500).json(err);
          return;
        }

        res.json(donation);

      });


    })
    .delete(function(req, res) {

      var t = new DonationModel(req.body.donation);
      DonationModel.findByIdAndRemove(req.params.donationId,
        function(err, donation) {
        if (err) {
          console.log(err);
          res.status(500).json(err);
          return;
        }

        res.json(donation);

      });


    });

  return donationsRouter;
}
