module.exports = function(grunt) {

  var
    path = require("path");
    
  grunt.initConfig({
    httpServer: {
      wwwRoot: "app/www",
      jsRoot: "app/www/js",
      cssRoot: "app/www/css",
      mediaRoot: "app/www/media",
      imageRoot: "app/www/i",
      libsRoot: "app/www/libs",
      port: 8080,
      callback: function() {
        grunt.log.writeln("web server started on port " + this.port);
      }
    },
    mongoServer: {
      host: "localhost",
      port: 27017,
      dbName: "cms"
    },
    loggerConfig: {
      transports:  {
        console: { level: "debug"},
        file:  { level: "debug"}
        //mongodb: { level: "debug", db: "mongodb://localhost/logs"}
        //papertrail: {host: "logs2.papertrailapp.com", port: "43476", level: "debug"}
      }
    },
    handlebars: {
			compile: {
				options: {
					namespace: "templates",
					processName: function(filePath) {
						return path.basename(filePath, ".min.hbs");
					},
					processPartialName: function(filePath) {
						return path.basename(filePath, ".min.hbs");
					}
				},
				files: {
					"app/www/js/templates.js": "app/templates-min/**/*.min.hbs"
				}
			}
		},
		htmlmin: {
			templates: {
	      options: {
	        removeComments: true,
	        collapseWhitespace: true
	      },
        expand: true,
        cwd: 'app/templates',
        src: '*.hbs',
        dest: 'app/templates-min/',
        ext: ".min.hbs"
	    }
		},
		watch: {
			templates: {
				files: ["app/templates/**/*.hbs"],
				tasks: ["htmlmin", "handlebars"],
				options: {
					spawn: false
				}
			}
		}
  });

  grunt.loadNpmTasks("grunt-contrib-watch");
  grunt.loadNpmTasks("grunt-contrib-handlebars");
  grunt.loadNpmTasks("grunt-contrib-htmlmin");

  grunt.registerTask("webServer", "Start web server", function() {

    var
      httpServer = require("./app/http-server"),
      app = require("./app/app"),
      config = {
        webSockets: require("./app/web-sockets"),
        httpServer: grunt.config("httpServer"),
       mongoServer: grunt.config("mongoServer"),
       loggerConfig: grunt.config("loggerConfig")
     };

     // not needed because we are running watch task
     //this.async();
     config.app = app(config);
     httpServer(config);

  });

  //grunt.registerTask("default", ["webServer"]);
  grunt.registerTask("default", ["htmlmin","handlebars","webServer","watch"]);

};
