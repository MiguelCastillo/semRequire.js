define([
  "text!dashboard/main.html",
  "dashboard/views/chat",
  "css!dashboard/main.css"
], function(tmpl, ChatView) {

  function initialize() {
    this.$el
      .html(this.template)
      .addClass("dashboard");

    this.chatView = new ChatView({
      el: this.$el.children(".content")
    });
  }

  return Backbone.View.extend({
    template: tmpl,
    initialize: initialize
  });

});
