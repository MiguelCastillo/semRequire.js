define([
  "text!tests/main.html"
], function(tmpl) {

  function initialize() {
    this.$el
      .html(this.template)
      .addClass("tests");
  }

  return Backbone.View.extend({
    template: tmpl,
    initialize: initialize
  });

});
