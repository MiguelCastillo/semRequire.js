define([
  "hash.route",
  "common/js/transition"
], function(hash, Transition) {

  // Handle empty routes
  hash("").on("change", function() {
    hash.navigate("dashboard");
  });

  function registerRoute(options) {
    // Transition manager
    var transition = new Transition(options);

    var current;
    hash(":root/**").on("change", function(evt, root) {
      if ( current === root ) {
        return;
      }

      // Load the root of the URL as a package module
      require([root], function(view) {
        transition.enter(view);
      });
    });
  }

  return registerRoute;
});
