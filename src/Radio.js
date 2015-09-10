import CosmeticPart from './CosmeticPart.js';

export default class Radio extends CosmeticPart {

  constructor(cdplayer, bluetooth, color, material, controls, cost, size) {
    super(color, material, controls, cost, size, 'Bose');
    this._hasCD = cdplayer;
    this._hasBluetooth = bluetooth;
    this._speakers = 4;
  }

  get hasCD() {
    return this._hasCD;
  }

  set hasCD(cdplayer) {
    this._hasCD = cdplayer;
  }

  get hasBluetooth() {
    return this._hasBluetooth;
  }

  set hasBluetooth(bluetooth) {
    this._hasBluetooth = bluetooth;
  }

  get speakers() {
    return this._speakers;
  }

  set speakers(speakerNum) {
    this._speakers = speakerNum;
  }
}