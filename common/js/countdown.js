define(function() {

  function counter(from, cb) {
    cb(from);
    if (from-- === 0) {
      return;
    }

    setTimeout(function() {
      counter(from, cb);
    }, 1000);
  }

  return counter;
});
