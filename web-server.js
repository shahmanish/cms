module.exports = function(webServerConfig, webServerCallback) {

	var
		http = require("http"),
		express = require("express"),
		webSockets = require("./web-sockets.js"),
		multer = require("multer"),
		app = express();

	app.use(express.static(webServerConfig.rootFolder));
	// app.use(multer({
	// 	dest: "./uploads",
	// 	rename: function(fieldName, fileName) {
	// 		return fileName;
	// 	},
	// 	onFileUploadStart: function(file, req, res) {
	// 		console.log(file.originalname + ' is starting ...');
	// 		return;
	// 	},
	// 	onFileUploadData: function(file, data, req, res) {
	// 		console.log(data.length/file.size * 100 + '% of ' + file.originalname + ' has arrived ...');
	// 		(function logProgress(dataLength) {
	//
	// 		})(data.length);
	// 		return;
	// 	},
	// 	onFileUploadComplete: function(file, req, res) {
	// 		console.log(file.originalname + ' uploaded to ' + file.path);
	// 		return;
	// 	}
	//
	// }));

	app.post("/uploads", function(req, res, next) {

		var dataUploaded = 0;

		multer({
			dest: "./uploads",
			rename: function(fieldName, fileName) {
				return fileName;
			},
			onFileUploadStart: function(file, req, res) {
				console.log(file.originalname + 'of size ' + file.size + ' is starting ...');
				return;
			},
			onFileUploadData: function(file, data, req, res) {
				// console.log(data.length/file.size * 100 + '% of ' + file.originalname + ' has arrived ...');
				// dataUploaded = dataUploaded + data.length;
				console.log(dataUploaded*1.0/file.size + ' length of ' + file.originalname + ' has uploaded ...')
				return;
			},
			onFileUploadComplete: function(file, req, res) {
				console.log(file.originalname + ' uploaded to ' + file.path);
				return;
			}

		})(req, res, next);

		res.json({
			msg: "received"
		});

	});

	webSockets(http.createServer(app))
		.listen(webServerConfig.port, webServerCallback);

};
