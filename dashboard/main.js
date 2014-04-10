define([
  "text!dashboard/main.html"
], function(tmpl) {

  function initialize() {
    this.$el
      .html(this.template)
      .addClass("dashboard");
  }


  return Backbone.View.extend({
    template: tmpl,
    initialize: initialize
  });

});
