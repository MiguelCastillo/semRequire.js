define([
  "text!app/main.html",
  "app/routes/transition"
], function(tmpl, transition) {


  function initialize() {
    var _self = this;
    setTimeout(function() {
      _init(_self);
    }, 10000);
  }


  function _init(_self) {
    _self.$el
      .html(_self.template)
      .addClass("appMain");

    // Setup the transition route
    transition({
      $el: _self.$el.children(".content")
    });
  }


  // Return app view constructor
  return Backbone.View.extend({
    template: tmpl,
    initialize: initialize
  });

});

