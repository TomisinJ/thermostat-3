document.addEventListener("DOMContentLoaded", () => {
  const selectElement = document.querySelector('#current-city');
  selectElement.addEventListener('change', (event) => {
    const city = event.target.value;
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=a3d9eb01d4de82b9b8d0849ef604dbed&units=metric`

    fetch(url)
      .then((response) => {
        return response.json()
      })
      .then((data) => {
        document.querySelector('#current-temperature').innerText = data.main.temp;
      })
    });

  const thermostat = new Thermostat();

  const updateTemperature = () => {
    document.querySelector('.temp-monitor').innerText = thermostat.getCurrentTemperature();
    document.querySelector('.temp-monitor').className = "temp-monitor " + thermostat.checkEnergyUsage();
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


