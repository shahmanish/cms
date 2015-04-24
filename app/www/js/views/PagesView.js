var PagesView = Backbone.View.extend({

/*
	render: function() {
		this.$el.html(templates["pages_default"]());
	},

	initialize: function(options) {
		this.options = options;
	}
*/

/*
	events: {
		"click tbody": "pageTransaction"
	},
	template: templates["pages"],
	render: function() {
		this.$el.html(this.template({
			pages: this.collection // this.pages.toJSON();
		}));
	},
	initialize: function(options) {
		this.options = options;
	},
	pageTransaction: function(e) {
		if (e.target instanceof HTMLButtonElement) {
			console.dir($(e.target).attr("data-model-id"));
			console.log("handle page fired!");
			console.dir($(e.target).closest("tr"));
		}
	}
	*/

	render: function() {
		var that = this;
		this.collection.fetch({
			success: function() {
				that.$el.html(templates["pages"]({ pages: that.collection.toJSON() }))
			}
		});
	},

	initialize: function(options) {
		this.options = options;
	}

});
