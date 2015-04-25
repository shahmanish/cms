var LoginView = Backbone.View.extend({

	// subscribe to button save event
  events: {
		"click #login-submit-button": "signin"
	},

	render: function() {
		this.$el.html(templates["login"]());
	},

	initialize: function(options) {
		this.options = options;
	},

	signin: function() {

		// authenticate
		var
			xhr = new XMLHttpRequest(),
			that = this;

			xhr.onreadystatechange = function() {

			if (xhr.readyState > 1 && xhr.status > 299) {
				console.log("login failed");
				return;
			}

			if (xhr.readyState === 4) {
				//window.csrfToken = xhr.getResponseHeader("X-CSRF-Token");
				window.user = JSON.parse(xhr.responseText);
				that.model = window.user;
				that.render();
				that.options.router.navigate(that.options.routeRedirect, {trigger: true});
			}
		}

		xhr.open("POST", "/account/authenticate");
		xhr.setRequestHeader("Content-Type", "application/json");
		xhr.send(JSON.stringify({
			username: document.getElementById("inputUserName").value,
			password: document.getElementById("inputPassword").value
		}));


		// add links

	},

	signout: function() {

		// logout

		// remove links

		// navigate to index

	}


});
