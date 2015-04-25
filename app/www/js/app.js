var pages = new Pages();
var donations = new Donations();

window.addEventListener("DOMContentLoaded", function() {


  var indexView = new IndexView({
    el: $("#main-content")[0],
    router: appRouter,
//    routeRedirect: "transactions",
    model: null
   });
  indexView.render();

  Backbone.history.start({ pushState: true });

	$("#pages-button").on("click", function() {
			appRouter.navigate("/pages", { trigger: true });
	});

	$("#page-add-button").on("click", function() {
			appRouter.navigate("/newPage", { trigger: true });
	});

	$("#donations-button").on("click", function() {
			appRouter.navigate("/donations", { trigger: true });
	});

	$("#donation-add-button").on("click", function() {
			appRouter.navigate("/newDonation", { trigger: true });
	});

  $("#signin-button").on("click", function() {
			appRouter.navigate("/signin", { trigger: true });
	});


});
