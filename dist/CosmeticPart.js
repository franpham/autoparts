'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _Autoparts2 = require('./Autoparts');

var _Autoparts3 = _interopRequireDefault(_Autoparts2);

var CosmeticPart = (function (_Autoparts) {
  _inherits(CosmeticPart, _Autoparts);

  function CosmeticPart(color, material, controls, cost, size, maker) {
    _classCallCheck(this, CosmeticPart);

    _get(Object.getPrototypeOf(CosmeticPart.prototype), 'constructor', this).call(this, cost, size, maker);
    this.partColor = color;
    this.partMaterial = material;
    this.controlNumber = controls;

    var privateProp = 'private String'; // private property;
    var symkey = Symbol('privateKey');
    this[symkey] = privateProp;
    CosmeticPart.staticProp = 'static String';

    this.getPrivateProp = function () {
      // privileged function access to private symkey;
      return this[symkey];
    }; // DO NOT access privateProp directly, else instance closure && instance privacy is created!
  }

  _createClass(CosmeticPart, [{
    key: 'accessProp',
    value: function accessProp() {
      // public function access to private symkey;
      return typeof symkey === 'undefined' ? undefined : this[symkey];
    }
  }, {
    key: 'color',
    get: function get() {
      return this.partColor;
    },
    set: function set(color) {
      this.partColor = color;
    }
  }, {
    key: 'material',
    get: function get() {
      return this.partMaterial;
    },
    set: function set(material) {
      this.partMaterial = material;
    }
  }, {
    key: 'controls',
    get: function get() {
      return this.controlNumber;
    },
    set: function set(controls) {
      this.controlNumber = controls;
    }
  }]);

  return CosmeticPart;
})(_Autoparts3['default']);

exports['default'] = CosmeticPart;
module.exports = exports['default'];