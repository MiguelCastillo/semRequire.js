// Setup requirejs configuration
requirejs.config({
  paths: {
    "backbone": "libs/backbone/backbone",
    "underscore": "libs/underscore/underscore",
    "jquery": "libs/jquery/dist/jquery",
    "hash.route": "libs/hash.route/hash.route",
    "rivets": "libs/rivets/dist/rivets",
    "text": "libs/js/require.text",
    "css": "libs/js/require.css"
  },
  "shim": {
    "app/main":  {
      deps: ["backbone"]
    },
    "backbone": {
      deps: ["jquery", "underscore"],
      exports: "Backbone"
    },
    "underscore": {
      "exports": "_"
    }
  },
  packages: [
    "app",
    "dashboard",
    "tests"
  ],
  waitSeconds: 15
});
