define([
  "text!dashboard/tmpls/chat.html",
  "common/js/chat",
  "css!dashboard/styles/chat.css"
], function(tmpl, Chat) {

  function initialize() {
    var _self = this;
    this.$el
      .html($(this.template))
      .addClass("chat");

    this.chat = new Chat(this.$el);
    this.chat.getAll();
    setInterval(function() {
      _self.chat.getAll();
    }, 5000);
  }

  return Backbone.View.extend({
    template: tmpl,
    initialize: initialize
  });
});
