define([
  "text!app/json/settings.json"
], function(settings) {

  function initialize() {
  }

  return Backbone.Model.extend({
    defaults: JSON.parse(settings),
    initialize: initialize
  });

});
