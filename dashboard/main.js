define([
  "text!dashboard/main.html",
  "dashboard/views/mainMenu",
  "dashboard/views/chat",
  "css!dashboard/main.css"
], function(tmpl, MainMenu, ChatView) {

  function initialize() {
    this.$el
      .html(this.template)
      .addClass("dashboard");

    this.mainMenuView = new MainMenu({
      el: this.$el.find(".mainMenu > .content")
    });

    this.chatView = new ChatView({
      el: this.$el.children(".content")
    });
  }

  return Backbone.View.extend({
    template: tmpl,
    initialize: initialize
  });

});
