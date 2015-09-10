
import Autoparts from './Autoparts';
import CosmeticPart from './CosmeticPart';
import MechanicalPart from './MechanicalPart';
import {Size} from './Size';      // non-class objects must be in braces;

var myPart = new Autoparts(1000, Size.small.key, 'Toyota');
console.log('myPart.cost: ', myPart.cost);

var myCosmetic = new CosmeticPart('red', 'metal', true, 2000, 'small', 'Toyota');
console.log('myCosmetic.maker', myCosmetic.partMaker);

var myMech = new MechanicalPart(false, true, true, 2000, Size.large.key, 'Honda');
console.log('myMech.size: ', myMech.size);

console.log('MechanicalPart instanceof Autoparts: ' + (myMech instanceof Autoparts));
