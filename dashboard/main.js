define([
  "text!dashboard/main.html",
  "dashboard/views/chat"
], function(tmpl, ChatView) {

  function initialize() {
    this.$el
      .html(this.template)
      .addClass("dashboard");

    this.chatView = new ChatView({
      el: this.$el.children(".chatroom")
    });
  }

  return Backbone.View.extend({
    template: tmpl,
    initialize: initialize
  });

});
