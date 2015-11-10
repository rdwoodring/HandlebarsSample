(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['films.hbs'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div>\r\n  <h2>"
    + alias4(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper)))
    + "</h2>\r\n  <p>"
    + alias4(((helper = (helper = helpers.opening_crawl || (depth0 != null ? depth0.opening_crawl : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"opening_crawl","hash":{},"data":data}) : helper)))
    + "</p>\r\n</div>\r\n";
},"useData":true});
templates['header.hbs'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<header>\r\n    <h1>The Star Wars API Sample</h1>\r\n    <h4>Ryan Woodring<br />\r\n    <a href=\"mailto:rdwoodring@gmail.com\">rdwoodring@gmail.com</a><br />\r\n    410-627-6156</h4>\r\n</header>\r\n";
},"useData":true});
templates['people.hbs'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div>\r\n    <h2>"
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "</h2>\r\n    <p>\r\n        Height: "
    + alias4(((helper = (helper = helpers.height || (depth0 != null ? depth0.height : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"height","hash":{},"data":data}) : helper)))
    + " centimeters<br />\r\n        Mass: "
    + alias4(((helper = (helper = helpers.mass || (depth0 != null ? depth0.mass : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"mass","hash":{},"data":data}) : helper)))
    + " kilograms<br />\r\n        Birth Year: "
    + alias4(((helper = (helper = helpers.birth_year || (depth0 != null ? depth0.birth_year : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"birth_year","hash":{},"data":data}) : helper)))
    + "<br />\r\n        Gender: "
    + alias4(((helper = (helper = helpers.gender || (depth0 != null ? depth0.gender : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"gender","hash":{},"data":data}) : helper)))
    + "<br />\r\n        Eye Color: "
    + alias4(((helper = (helper = helpers.eye_color || (depth0 != null ? depth0.eye_color : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"eye_color","hash":{},"data":data}) : helper)))
    + "<br />\r\n        Hair Color: "
    + alias4(((helper = (helper = helpers.hair_color || (depth0 != null ? depth0.hair_color : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"hair_color","hash":{},"data":data}) : helper)))
    + "<br />\r\n    </p>\r\n</div>\r\n";
},"useData":true});
})();