document.addEventListener("DOMContentLoaded", () => {
  const thermostat = new Thermostat();
  document.querySelector('.temp-monitor').innerText = thermostat.getCurrentTemperature()

  document.querySelector('#btnUp').addEventListener('click', () => {
    thermostat.up();
    document.querySelector('.temp-monitor').innerText = thermostat.getCurrentTemperature();
  })

  document.querySelector('#btnDown').addEventListener('click', () => {
    thermostat.down();
    document.querySelector('.temp-monitor').innerText = thermostat.getCurrentTemperature();
  })
});


