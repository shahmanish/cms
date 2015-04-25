var AppRouter = Backbone.Router.extend({

	routes: {
		"pages": "showPages",
		"donations": "showDonations",
		"newPage": "showPageForm",
		"newDonation": "showDonationForm",
		"signin": "showLoginForm"
	},

	showPages: function() {

		// only do this if a new is being created
		if (this.currentView) {
			this.currentView.undelegateEvents();
		}

/*
		// create a new view
		this.currentView = new PagesView({
			// passing the element passed into the router
			el: this.options.el,
			// give view access to the router to navigate in response to events
			router: this
		});
*/


/*
		this.currentView = new PagesView({
	    el: $("#main-content")[0],
	    router: this,
			routeRedirect: "pages",
	    model: null
	   });
*/

		this.currentView = new PagesView({
			collection: new Pages(),
			el: $("#main-content")[0],
			router: this
		});
		// render the new view
		this.currentView.render();
	},

	initialize: function(options) {
		this.options = options;
	},

	showDonations: function() {

		// only do this if a new is being created
		if (this.currentView) {
			this.currentView.undelegateEvents();
		}

		this.currentView = new DonationsView({
			collection: new Donations(),
			el: $("#main-content")[0],
			router: this
		});
		// render the new view
		this.currentView.render();
	},

	initialize: function(options) {
		this.options = options;
	},

	showPageForm: function() {

		// only do this if a new is being created
		if (this.currentView) {
			this.currentView.undelegateEvents();
		}

		// create a new view
		this.currentView = new PageAddView({
			// passing the element passed into the router
			el: $("#main-content")[0],
			// give view access to the router to navigate in response to events
			router: this
		});

		// render the new view
		this.currentView.render();
	},

	initialize: function(options) {
		this.options = options;
	},

	showDonationForm: function() {

		// only do this if a new is being created
		if (this.currentView) {
			this.currentView.undelegateEvents();
		}

		// create a new view
		this.currentView = new DonationAddView({
			// passing the element passed into the router
			el: $("#main-content")[0],
			// give view access to the router to navigate in response to events
			router: this
		});

		// render the new view
		this.currentView.render();
	},

	initialize: function(options) {
		this.options = options;
	},

	showLoginForm: function() {

		// only do this if a new is being created
		if (this.currentView) {
			this.currentView.undelegateEvents();
		}

		// create a new view
		this.currentView = new LoginView({
			// passing the element passed into the router
			el: $("#main-content")[0],
			// give view access to the router to navigate in response to events
			router: this,
			routeRedirect: "pages"
		});

		// render the new view
		this.currentView.render();
	},

	initialize: function(options) {
		this.options = options;
	}




});

var appRouter = new AppRouter({
	el: $("#view-content")[0]
});
