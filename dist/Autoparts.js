"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Autoparts = (function () {
  function Autoparts(cost, size, maker) {
    _classCallCheck(this, Autoparts);

    this.partCost = cost;
    this.partSize = size;
    this.partMaker = maker;
  }

  _createClass(Autoparts, [{
    key: "cost",
    get: function get() {
      return this.partCost;
    },
    set: function set(cost) {
      this.partCost = cost;
    }
  }, {
    key: "size",
    get: function get() {
      return this.partSize;
    },
    set: function set(size) {
      this.partSize = size;
    }
  }, {
    key: "maker",
    get: function get() {
      return this.partMaker;
    },
    set: function set(maker) {
      this.partMaker = maker;
    }
  }]);

  return Autoparts;
})();

exports["default"] = Autoparts;
module.exports = exports["default"];