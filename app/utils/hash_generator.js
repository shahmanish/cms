
var crypto = require("crypto");
console.log(crypto.createHash("sha1").update("password").digest("hex"));
