define(function() {
  function Transition(options) {
    this.options = options;
  }

  Transition.prototype.enter = function (View, options) {
    if ( this.current ) {
      // Make sure we clean up the current view
      this.current.trigger("leave");
      this.current.remove();
    }

    this.current = new View();
    this.current.$el.appendTo((options || this.options).$el);
    this.current.trigger("enter");
  };

  return Transition;
});
