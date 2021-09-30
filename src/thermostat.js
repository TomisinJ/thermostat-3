'use strict';

class Thermostat {
  constructor() {
    this.MINIMUM_TEMPERATURE = 10;
    this.MAX_LIMIT_PSM_ON = 25;
    this.MAX_LIMIT_PSM_OFF = 32;
    this.temperature = 20;
    this.powerSavingMode = true;
  }

  getCurrentTemperature() {
    return this.temperature;
  }

  up() {
    if (this.isMaximumTemperature()) {
      return;
    }
    this.temperature += 1
  }

  down() {
    if (this.isMinimumTemperature()) {
      return;
    }
    this.temperature -= 1;
  }

  resetTemperature() {
    this.temperature = 20;
  }

  checkEnergyUsage() {
    if (this.temperature < 18 ) {
      return 'low-usage' 
    } else if (this.temperature <= 25 ) {
      return 'medium-usage'
    } else {
      return 'high-usage'
    }
  }
  
  isPowerSavingModeOn() {
    return this.powerSavingMode === true;
  }

  switchPowerSavingMode() {
    if (this.powerSavingMode === true) {
      this.switchPowerSavingModeOff();
    } else {
      this.switchPowerSavingModeOn();
    }
  }

  switchPowerSavingModeOff() {
    this.powerSavingMode = false;
  }

  switchPowerSavingModeOn() {
    this.powerSavingMode = true; 
  }

  isMinimumTemperature() {
    return this.temperature === this.MINIMUM_TEMPERATURE;
  }

  isMaximumTemperature() {
    if(this.isPowerSavingModeOn() === false) {
      return this.temperature === this.MAX_LIMIT_PSM_OFF;
    }
    return this.temperature === this.MAX_LIMIT_PSM_ON;
  }
}
