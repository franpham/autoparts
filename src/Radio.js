import CosmeticPart from './CosmeticPart.js';

export default class Radio extends CosmeticPart {

  constructor(cdplayer, bluetooth, color, material, controls, cost, size) {
    super(color, material, controls, cost, size, 'Bose');
    this.hasCD = cdplayer;
    this.hasBluetooth = bluetooth;
    this.speakers = 4;
  }

  get hasCD() {
    return this.hasCD;
  }

  set hasCD(cdplayer) {
    this.hasCD = cdplayer;
  }

  get hasBluetooth() {
    return this.hasBluetooth;
  }

  set hasBluetooth(bluetooth) {
    this.hasBluetooth = bluetooth;
  }

  get speakers() {
    return this.speakers;
  }

  set speakers(speakerNum) {
    this.speakers = speakerNum;
  }
}