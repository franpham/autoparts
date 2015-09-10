'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _MechanicalPartJs = require('./MechanicalPart.js');

var _MechanicalPartJs2 = _interopRequireDefault(_MechanicalPartJs);

var Electronics = (function (_MechanicalPart) {
  _inherits(Electronics, _MechanicalPart);

  function Electronics(processor, voltage, amps, isMechanic, cost, size, maker) {
    _classCallCheck(this, Electronics);

    _get(Object.getPrototypeOf(Electronics.prototype), 'constructor', this).call(this, true, isMechanic, false, cost, size, maker);
    this.partProcessor = processor;
    this.voltageAmount = voltage;
    this.ampsAmount = amps;
  }

  _createClass(Electronics, [{
    key: 'processor',
    get: function get() {
      return this.partProcessor;
    },
    set: function set(processor) {
      this.partProcessor = processor;
    }
  }, {
    key: 'voltage',
    get: function get() {
      return this.voltageAmount;
    },
    set: function set(voltage) {
      this.voltageAmount = voltage;
    }
  }, {
    key: 'amps',
    get: function get() {
      return this.ampsAmount;
    },
    set: function set(amps) {
      this.ampsAmount = amps;
    }
  }]);

  return Electronics;
})(_MechanicalPartJs2['default']);

exports['default'] = Electronics;
module.exports = exports['default'];