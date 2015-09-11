import Autoparts from './Autoparts';

export default class CosmeticPart extends Autoparts {

  constructor(color, material, controls, cost, size, maker) {
    super(cost, size, maker);
    this.partColor = color;
    this.partMaterial = material;
    this.controlNumber = controls;

    var privateProp = 'private String';    // private property;
    var symkey = Symbol('privateKey');
    this[symkey] = privateProp;
    CosmeticPart.staticProp = 'static String';

    this.getPrivateProp = function() {  // privileged function access to private symkey;
      return this[symkey];
    };                                // DO NOT access privateProp directly, else instance closure && instance privacy is created!
  }

  accessProp() {                        // public function access to private symkey;
    return typeof symkey === 'undefined' ? undefined : this[symkey];
  }

  get color() {
    return this.partColor;
  }

  set color(color) {
    this.partColor = color;
  }

  get material() {
    return this.partMaterial;
  }

  set material(material) {
    this.partMaterial = material;
  }

  get controls() {
    return this.controlNumber;
  }

  set controls(controls) {
    this.controlNumber = controls;
  }
}