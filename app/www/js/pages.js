
			function customSync(method, model, options) {
				if (!options) {
					options = {};
				}
				options.beforeSend = function(xhr) {
					xhr.setRequestHeader("X-CSRF-Token", window.csrfToken || document.cookies);
				};
				Backbone.sync.call(this, method, model, options)
					.then(function(data, status, xhr) {
						window.csrfToken = xhr.getResponseHeader("X-CSRF-Token");
					});
			}
			var BaseModel = Backbone.Model.extend({
				sync: customSync,
				idAttribute: "_id"
			});
			var BaseCollection = Backbone.Collection.extend({
				sync: customSync
			});
      var Page = BaseModel.extend({
        urlRoot: "/api/page",
        defaults: {
          "title" : null,
          "content" : null,
          "category" : null,
          "route" : null,
          "author" : null,
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

			var Pages = BaseCollection.extend({
				model: Page,
				url: "/api/pages"
			});

      var PagesView = Backbone.View.extend({
				events: {
					"click tbody": "pageTransaction"
				},
				template: templates["pages"],
				render: function() {
					this.$el.html(this.template({
						pages: this.collection
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
			});

			var ps = new Pages();

      document.getElementById("get-all-pages")
        .addEventListener("click", function() {
  			ps.fetch({ success: function() {
          console.log(ps.models);
  				var psView = new PagesView({
  					el: $("#view-content"),
  					collection: ps.toJSON()
  				});
  				console.dir(psView);
  				psView.render();
  			}});
      });
