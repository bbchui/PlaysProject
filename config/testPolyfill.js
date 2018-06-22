// shim for polyfills for testing
global.requestAnimationFrame = function(callback) {
  setTimeout(callback, 0);
};
