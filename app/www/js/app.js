var pages = new Pages();

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


});
