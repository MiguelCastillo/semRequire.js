define([
  "text!app/main.html",
  "app/routes/transition",
  "common/js/countdown",
  "css!app/main.css"
], function(tmpl, transition, countdown) {


  function initialize() {
    var _self = this;
    this.$el
      .html($(this.template))
      .addClass("appMain");

    // Add a coundown
    countdown(10, function(val) {
      if ( val === 0 ) {
        _init(_self);
      }
      else {
        _self.$el
          .find(".content .counter")
          .html(val);
      }
    });
  }


  function _init(_self) {
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

