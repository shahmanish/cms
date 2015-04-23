module.exports = function(config, mongoose) {

  var
    express = require("express"),
    fs = require('fs'),
    galleriesRouter = express.Router();

  var gallerySchema = mongoose.Schema({
    fileName: String,
    type: String,
    data: Buffer
  });

  var GalleryModel = mongoose.model("gallery", gallerySchema);


  galleriesRouter.route("/galleries")
    .get(function(req, res) {

      var t = new GalleryModel(req.body.gallery);
      GalleryModel.find({}, function(err, galleries) {
        if (err) {
          console.log(err);
          res.status(500).json(err);
          return;
        }

        res.json(galleries);

      });


    });

  galleriesRouter.route("/gallery")
    .post(function(req, res){

      fs.readFile(req.files["file_0"].path, function(err, data){
        var fileMeta = {};
        fileMeta.filename = req.files["file_0"].originalname;
        fileMeta.type = req.files["file_0"].extension;
        fileMeta.data = data;

        var t = new GalleryModel(fileMeta);
        t.save(function(err, gallery){

          if(err){
            console.log(err);
            res.status(500).json(err);
            return;
          }
          res.json(gallery);
        });

      });

      /*
      console.dir(req.body.gallery);
      var t = new GalleryModel(req.body.gallery);
      t.save(function(err, gallery) {
        if (err) {
          console.log(err);
          res.status(500).json(err);
          return;
        }

        res.json(gallery);

      });*/

    });

  galleriesRouter.route("/gallery/:galleryId")
    .get(function(req, res) {

      GalleryModel.findById(req.params.galleryId, function(err, gallery){

            if(err){
              console.log(err);
              res.status(500).json(err);
              return;
            }
            console.log(gallery);
            res.writeHead(200, {'Content-Type': 'image/gif' });
            res.end(gallery.data, 'binary');

            //res.json(gallery);
          });

      /*
      var t = new GalleryModel(req.body.gallery);
      GalleryModel.findById(req.params.galleryId, function(err, gallery) {
        if (err) {
          console.log(err);
          res.status(500).json(err);
          return;
        }

        res.json(gallery);

      });
      */

    })
    .put(function(req, res) {

      var t = new GalleryModel(req.body.gallery);
      GalleryModel.findByIdAndUpdate(req.params.galleryId,
        req.body.gallery, function(err, gallery) {
        if (err) {
          console.log(err);
          res.status(500).json(err);
          return;
        }

        res.json(gallery);

      });


    })
    .delete(function(req, res) {

      var t = new GalleryModel(req.body.gallery);
      GalleryModel.findByIdAndRemove(req.params.galleryId,
        function(err, gallery) {
        if (err) {
          console.log(err);
          res.status(500).json(err);
          return;
        }

        res.json(gallery);

      });


    });

  return galleriesRouter;
}
