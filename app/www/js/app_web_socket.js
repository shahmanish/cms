function MyWebSocket(url) {

	var ws;

	var p = new Promise(function(resolve, reject) {
		ws = new WebSocket(url);
		ws.addEventListener("open", function() {
			resolve();
		});

		ws.addEventListener("error", function() {
			reject();
		});
	});

	// ws.addEventListener("open", function() {
	// 	ws.send(JSON.stringify({
	// 		messageType: "error",
	// 		errorMessage: "something failed"
	// 	}));
	// });
	//
	// ws.addEventListener("message", function(msg) {
	// 	console.log("message received: " + msg.data);
	// 	console.dir(JSON.parse(msg.data));
	// });
	//
	// ws.addEventListener("error", function(err) {
	// 	console.log("err received: " + JSON.stringify(err));
	// });

	this.error = function(message) {
		p.then(function() {
			ws.send(JSON.stringify({
				messageType: "error",
				errorMessage: message
			}));
		});
	}

}

var logWebSocket = new MyWebSocket("ws:localhost:8080");
//logWebSocket.error("this is my new error");
