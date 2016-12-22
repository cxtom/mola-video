(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', 'mola', './babelHelpers'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('mola'), require('./babelHelpers'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.mola, global.babelHelpers);
    global.constants = mod.exports;
  }
})(this, function (exports, _mola, babelHelpers) {
  'use strict';

  exports.__esModule = true;
  exports.level = exports.type = undefined;
  /**
   * @file constants
   * @author leon <ludafa@outlook.com>
   */

  var type = exports.type = 'Video';
  var level = exports.level = _mola.MOLA_COMPONENT_LEVEL_ATOM;
});
//# sourceMappingURL=constants.js.map
