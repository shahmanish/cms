module.exports = function(grunt) {

  grunt.initConfig({
    webServer: {
      rootFolder: "www",
      port: 8080
    }
  });

  grunt.registerTask("default", "Start web server", function(port) {

    var
      webServer = require("./web-server"),
      webServerConfig = grunt.config("webServer");


    this.async();

    webServerConfig.port = port || webServerConfig.port;

    webServer(webServerConfig, function() {
      grunt.log.writeln("Web server listening on port " + webServerConfig.port);
    });

  });

  grunt.registerTask("haveABaby", function(name, length, weight) {
    console.log("here comes my tax deduction.");
    console.log(arguments);
  });

};
