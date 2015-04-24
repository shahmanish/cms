window.addEventListener("DOMContentLoaded", function() {


	var appRouter = new AppRouter({
		el: $("#view-content")[0]
	});

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

	$("#donations-button").on("click", function() {
			appRouter.navigate("/donations", { trigger: true });
	});


});
