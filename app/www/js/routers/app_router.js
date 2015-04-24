var AppRouter = Backbone.Router.extend({

	routes: {
		"pages": "showPages"
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
	}

});
