
import Autoparts from './Autoparts';
import CosmeticPart from './CosmeticPart';
import MechanicalPart from './MechanicalPart';
import {Size} from './Size';      // non-class objects must be in braces;

var myPart = new Autoparts(1000, Size.small.key, 'Toyota');
console.log('myPart.cost: ', myPart.cost);

var myCosmetic = new CosmeticPart('red', 'metal', true, 2000, 'small', 'Toyota');
console.log('myCosmetic.privateProp: ', myCosmetic.privateProp);              // directly access private property;
console.log('myCosmetic.getPrivateProp(): ', myCosmetic.getPrivateProp());    // call privileged method;
console.log('myCosmetic.accessProp(): ', myCosmetic.accessProp());            // call public method;
console.log('static property: ' + CosmeticPart.staticProp);                   // directly access static property;

var myMech = new MechanicalPart(false, true, true, 2000, Size.large.key, 'Honda');
console.log('myMech.size: ', myMech.size);
console.log('MechanicalPart instanceof Autoparts: ' + (myMech instanceof Autoparts));
