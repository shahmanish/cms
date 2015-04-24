var PageAddView = Backbone.View.extend({

  // subscribe to button save event
  events: {
		"click #page-create-button": "createPage"
	},

  // save model to db

  // update collection, which should then update the collection view

	render: function() {
		this.$el.html(templates["page_new"]());
	},

	initialize: function(options) {
		this.options = options;
	},

  createPage: function() {
    // create new model
    var p = new Page({});
    // set fields
    p.set("title", $("#title").val());
    p.set("content", $("#content").val());
    p.set("category", $("#category").val());
    p.set("route", $("#route").val());
    p.set("author", $("#author").val());
    p.set("description", $("#description").val());
    p.set("date", Date.now());
    // call save
    p.save(null, {
      success: function() {
        console.dir(p.attributes);
        pages.fetch({
          success: function() {
            console.log("fetched pages");
            appRouter.navigate("/pages", { trigger: true });
          }
        });
      }
    });

    // change route to pages

    //console.log("called create page");
    //console.dir(p.toJSON());
  }

});
