this["templates"] = this["templates"] || {};

this["templates"]["donation"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "<div><div><label>Name</label>"
    + alias3(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"name","hash":{},"data":data}) : helper)))
    + "</div><div><label>Date:</label>"
    + alias3(((helper = (helper = helpers.date || (depth0 != null ? depth0.date : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"date","hash":{},"data":data}) : helper)))
    + "</div><div><label>Amount:</label>"
    + alias3(((helper = (helper = helpers.amount || (depth0 != null ? depth0.amount : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"amount","hash":{},"data":data}) : helper)))
    + "</div><div><label>Credit Card:</label>"
    + alias3(((helper = (helper = helpers.creditCard || (depth0 != null ? depth0.creditCard : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"creditCard","hash":{},"data":data}) : helper)))
    + "</div></div>";
},"useData":true});

this["templates"]["donation_new"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<div class=\"container\"><div class=\"panel panel-primary\"><div class=\"panel-heading\"><h3 class=\"panel-title\">Please provide the payment information.</h3></div><div class=\"panel-body\"><form><div class=\"form-group\"><label class=\"sr-only\" for=\"amount\">Amount (in dollars)</label><div class=\"input-group\"><div class=\"input-group-addon\">$</div><input type=\"text\" class=\"form-control\" id=\"amount\" placeholder=\"Amount\"><div class=\"input-group-addon\">.00</div></div></div><div class=\"form-group\"><label for=\"paymentMethod\">Payment Method</label><select class=\"form-control\" id=\"paymentMethod\"><option>Visa</option><option>Mastercard</option><option>Amex</option></select></div><div class=\"form-group\"><label for=\"creditCardNumber\">Credit Card Number</label><input type=\"text\" class=\"form-control\" id=\"creditCardNumber\" placeholder=\"xxxx-xxxx-xxxx-xxxx\"></div><div class=\"form-group\"><label for=\"dateOfExpiry\">Expiry</label><input type=\"text\" class=\"form-control\" id=\"dateOfExpiry\" placeholder=\"MM/YY\"></div><div class=\"form-group\"><label for=\"cvv\">CVV</label><input type=\"text\" class=\"form-control\" id=\"cvv\" placeholder=\"xxx\"></div><div class=\"form-group\"><label for=\"addres\">Address</label><input type=\"text\" class=\"form-control\" id=\"address\" placeholder=\"123 Main St, Mountain View, CA 94040\"></div><div class=\"form-group\"><label for=\"name\">Name</label><input type=\"text\" class=\"form-control\" id=\"name\" placeholder=\"John Doe\"></div><div class=\"form-group\"><label for=\"comments\">Comments</label><textarea class=\"form-control\" rows=\"3\" id=\"comments\"></textarea></div><button type=\"button\" class=\"btn btn-primary\" id=\"donation-create-button\">Submit</button></form></div></div></div>";
},"useData":true});

this["templates"]["donations"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "<tr><td>"
    + alias3(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"name","hash":{},"data":data}) : helper)))
    + "</td><td>"
    + alias3(((helper = (helper = helpers.date || (depth0 != null ? depth0.date : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"date","hash":{},"data":data}) : helper)))
    + "</td><td>"
    + alias3(((helper = (helper = helpers.amount || (depth0 != null ? depth0.amount : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"amount","hash":{},"data":data}) : helper)))
    + "</td><td>"
    + alias3(((helper = (helper = helpers.creditCard || (depth0 != null ? depth0.creditCard : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"creditCard","hash":{},"data":data}) : helper)))
    + "</td></tr>";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1;

  return "<table class=\"table table-bordered\"><caption>Donations</caption><thead><tr><th>Name</th><th>Payment Date</th><th>Credit Card (Last 4)</th><th>Amount</th></tr></thead><tbody>"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.donations : depth0),{"name":"each","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "</tbody></table>";
},"useData":true});

this["templates"]["galleries"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "<tr><td>"
    + alias3(((helper = (helper = helpers.fileName || (depth0 != null ? depth0.fileName : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"fileName","hash":{},"data":data}) : helper)))
    + "</td><td>"
    + alias3(((helper = (helper = helpers.type || (depth0 != null ? depth0.type : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"type","hash":{},"data":data}) : helper)))
    + "</td><td>"
    + alias3(((helper = (helper = helpers.author || (depth0 != null ? depth0.author : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"author","hash":{},"data":data}) : helper)))
    + "</td></tr>";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1;

  return "<table class=\"table table-bordered\"><caption>Galleries</caption><thead><tr><th>Filename</th><th>Type</th><th>Author</th></tr></thead><tbody>"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.galleries : depth0),{"name":"each","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "</tbody></table>";
},"useData":true});

this["templates"]["gallery"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "<div><div><label>FileName</label>"
    + alias3(((helper = (helper = helpers.fileName || (depth0 != null ? depth0.fileName : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"fileName","hash":{},"data":data}) : helper)))
    + "</div><div><label>Type:</label>"
    + alias3(((helper = (helper = helpers.type || (depth0 != null ? depth0.type : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"type","hash":{},"data":data}) : helper)))
    + "</div><div><label>Author:</label>"
    + alias3(((helper = (helper = helpers.author || (depth0 != null ? depth0.author : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"author","hash":{},"data":data}) : helper)))
    + "</div></div>";
},"useData":true});

this["templates"]["home"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<div class=\"col-xs-offset-3 col-xs-6 col-xs-offset-3\"><p class=\"text-center\">Our campaigners have done some pretty amazing things to raise money for clean water. And they’re thinking of new things to do every day. What will you do?</p></div>";
},"useData":true});

this["templates"]["login"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<div class=\"form-group\"><label for=\"inputUserName\">Username</label><input type=\"text\" class=\"form-control\" id=\"inputUserName\" placeholder=\"Enter your username\"></div><div class=\"form-group\"><label for=\"inputPassword\">Password</label><input type=\"password\" class=\"form-control\" id=\"inputPassword\" placeholder=\"Password\"></div><button type=\"button\" id=\"login-submit-button\" class=\"btn btn-default\">Submit</button>";
},"useData":true});

this["templates"]["main"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<div class=\"col-xs-2\"><ul class=\"nav nav-pills nav-stacked\"><li role=\"presentation\" class=\"active\"><a href=\"#\">Home</a></li><li role=\"presentation\"><a href=\"#\">Profile</a></li><li role=\"presentation\"><a href=\"#\">Messages</a></li></ul></div><div class=\"col-xs-10 content\">content</div><div class=\"row\"><div class=\"col-xs-offset-8 col-xs-4\"><a href=\"#\">Terms</a> <a href=\"#\">Copyright</a></div></div>";
},"useData":true});

this["templates"]["page"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "<div><div><label>Title</label>"
    + alias3(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"title","hash":{},"data":data}) : helper)))
    + "</div><div><label>Author:</label>"
    + alias3(((helper = (helper = helpers.author || (depth0 != null ? depth0.author : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"author","hash":{},"data":data}) : helper)))
    + "</div><div><label>Category:</label>"
    + alias3(((helper = (helper = helpers.category || (depth0 != null ? depth0.category : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"category","hash":{},"data":data}) : helper)))
    + "</div></div>";
},"useData":true});

this["templates"]["page_new"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<div class=\"container\"><p class=\"lead\">Create a new page.</p><form><div class=\"form-group\"><label for=\"inputTitle\">Title</label><input type=\"text\" class=\"form-control\" id=\"title\" placeholder=\"Getting started\"></div><div class=\"form-group\"><label for=\"inputCategory\">Category</label><input type=\"text\" class=\"form-control\" id=\"category\" placeholder=\"eg. Intro\"></div><div class=\"form-group\"><label for=\"inputAuthor\">Author</label><input type=\"text\" class=\"form-control\" id=\"author\" placeholder=\"John\"></div><div class=\"form-group\"><label for=\"inputContent\">Content</label><textarea class=\"form-control\" rows=\"3\" id=\"content\"></textarea></div><div class=\"form-group\"><label for=\"inputRoute\">Slug/Route</label><input type=\"text\" class=\"form-control\" id=\"route\" placeholder=\"Home>Intro\"></div><button type=\"button\" class=\"btn btn-default\" id=\"page-create-button\">Submit</button></form></div>";
},"useData":true});

this["templates"]["pages"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "<tr><td>"
    + alias3(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"title","hash":{},"data":data}) : helper)))
    + "</td><td>"
    + alias3(((helper = (helper = helpers.author || (depth0 != null ? depth0.author : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"author","hash":{},"data":data}) : helper)))
    + "</td><td>"
    + alias3(((helper = (helper = helpers.category || (depth0 != null ? depth0.category : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"category","hash":{},"data":data}) : helper)))
    + "</td><td><button data-model-id=\""
    + alias3(((helper = (helper = helpers._id || (depth0 != null ? depth0._id : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"_id","hash":{},"data":data}) : helper)))
    + "\">View</button></td></tr>";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1;

  return "<table class=\"table table-bordered\"><caption>Pages</caption><thead><tr><th>Title</th><th>Author</th><th>Category</th></tr></thead><tbody>"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.pages : depth0),{"name":"each","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "</tbody></table>";
},"useData":true});

this["templates"]["pages_default"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "Listing of pages goes here.";
},"useData":true});