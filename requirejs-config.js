// Setup requirejs configuration
requirejs.config({
  paths: {
    "backbone": "libs/backbone/backbone",
    "underscore": "libs/underscore/underscore",
    "jquery": "libs/jquery/dist/jquery",
    "hash.route": "libs/hash.route/hash.route",
    "rivets": "libs/rivets/dist/rivets",
    "md5": "libs/js/md5",
    "text": "libs/js/require.text",
    "css": "libs/js/require.css"
  },
  "shim": {
    "main": {
      deps: ["common/js/cachebuster"]
    },
    "common/js/cachebuster": {
      deps: ["backbone", "md5"]
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
    "tests",
    "yourmodule"
  ]
});
