module.exports = function(config, mongoose) {

  var
    express = require("express"),
    pagesRouter = express.Router(),
    logger = config.logger;

  var pageSchema = mongoose.Schema({
    title: String,
    content: String,
    category: String,
    route: String,
    author: String,
    date: Date
  });

  var PageModel = mongoose.model("page", pageSchema);


  pagesRouter.route("/pages")
    .get(function(req, res) {

      console.log(req.user);

      var t = new PageModel(req.body.page);
      PageModel.find({}, function(err, pages) {
        if (err) {
          console.log(err);
          res.status(500).json(err);
          return;
        }

        logger.debug("found pages: ");

        res.json(pages);

      });


    });

  pagesRouter.route("/page")
    .post(function(req, res){
      console.dir(req.body);
      var t = new PageModel(req.body);
      t.save(function(err, page) {
        if (err) {
          console.log(err);
          res.status(500).json(err);
          return;
        }

        // console.log(JSON.stringify(page, function() {
        //   if (key === "_v")
        // }));
        res.json(page);

      });

    });

  pagesRouter.route("/page/:pageId")
    .get(function(req, res) {

      var t = new PageModel(req.body.page);
      PageModel.findById(req.params.pageId, function(err, page) {
        if (err) {
          console.log(err);
          res.status(500).json(err);
          return;
        }

        res.json(page);

      });


    })
    .put(function(req, res) {

      var t = new PageModel(req.body.page);
      PageModel.findByIdAndUpdate(req.params.pageId,
        req.body.page, function(err, page) {
        if (err) {
          console.log(err);
          res.status(500).json(err);
          return;
        }

        res.json(page);

      });


    })
    .delete(function(req, res) {

      var t = new PageModel(req.body.page);
      PageModel.findByIdAndRemove(req.params.pageId,
        function(err, page) {
        if (err) {
          console.log(err);
          res.status(500).json(err);
          return;
        }

        res.json(page);

      });


    });

  return pagesRouter;
}
