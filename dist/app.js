'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _Autoparts = require('./Autoparts');

var _Autoparts2 = _interopRequireDefault(_Autoparts);

var _CosmeticPart = require('./CosmeticPart');

var _CosmeticPart2 = _interopRequireDefault(_CosmeticPart);

var _MechanicalPart = require('./MechanicalPart');

var _MechanicalPart2 = _interopRequireDefault(_MechanicalPart);

var _Size = require('./Size');

// non-class objects must be in braces;

var myPart = new _Autoparts2['default'](1000, _Size.Size.small.key, 'Toyota');
console.log('myPart.cost: ', myPart.cost);

var myCosmetic = new _CosmeticPart2['default']('red', 'metal', true, 2000, 'small', 'Toyota');
console.log('myCosmetic.maker', myCosmetic.partMaker);

var myMech = new _MechanicalPart2['default'](false, true, true, 2000, _Size.Size.large.key, 'Honda');
console.log('myMech.size: ', myMech.size);

console.log('MechanicalPart instanceof Autoparts: ' + (myMech instanceof _Autoparts2['default']));

console.log(_Size.Size);