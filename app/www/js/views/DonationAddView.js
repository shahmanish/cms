var DonationAddView = Backbone.View.extend({

  // subscribe to button save event
  events: {
		"click #donation-create-button": "createDonation"
	},

  // save model to db

  // update collection, which should then update the collection view

	render: function() {
		this.$el.html(templates["donation_new"]());
	},

	initialize: function(options) {
		this.options = options;
	},

  createDonation: function() {
    // create new model
    var d = new Donation({});
    // set fields
    d.set("name", $("#name").val());
    d.set("amount", $("#amount").val());
    d.set("creditCard", $("#creditCard").val());
    d.set("date", Date.now());
    // call save
    d.save(null, {
      success: function() {
        console.dir(d.attributes);
        donations.fetch({
          success: function() {
            console.log("fetched donations");
            appRouter.navigate("/donations", { trigger: true });
          }
        });
      }
    });

    // change route to pages

    console.log("called create donation");
    //console.dir(p.toJSON());
  }

});
