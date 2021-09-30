document.addEventListener("DOMContentLoaded", () => {

  const thermostat = new Thermostat();

  const updateTemperature = () => {
    document.querySelector('.temp-monitor').innerText = thermostat.getCurrentTemperature();
    // document.querySelector('.temp-monitor').className = thermostat.checkEnergyUsage();
  }

  updateTemperature();

  document.querySelector('#btnUp').addEventListener('click', () => {
    thermostat.up();
    updateTemperature();
  })

  document.querySelector('#btnDown').addEventListener('click', () => {
    thermostat.down();
    updateTemperature();
  })

  document.querySelector('#btnReset').addEventListener('click', () => {
    thermostat.resetTemperature();
    updateTemperature();
  })

  document.querySelector('#btnEnergySave').addEventListener('click', () => {
    thermostat.switchPowerSavingMode();
    updateTemperature();
  })
});


