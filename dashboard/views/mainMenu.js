define([
  "text!dashboard/tmpls/mainMenu.html",
  "css!dashboard/styles/mainMenu.css"
], function(tmpl) {

  function initialize() {
    this.$el
      .html($(this.template))
      .addClass("mainMenu");
  }


  return Backbone.View.extend({
    template: tmpl,
    initialize: initialize
  });
});
