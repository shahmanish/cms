var Donation = BaseModel.extend({
  urlRoot: "/api/donation",
  defaults: {
    "name" : null,
    "amount" : 0,
    "creditCard" : null,
    "date": Date.now()
  },
  initialize: function() {
    /*
    this.on("change:title", function() {
      console.dir(arguments);
      console.log("title in my model changed.");
    });
    */
  }
});
var Donations = BaseCollection.extend({
  model: Donation,
  url: "/api/donations"
});
