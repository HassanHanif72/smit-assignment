const apiKey = '244177dbcc38209a73a517de371ad0c5';

document.getElementById('search').addEventListener('click', () => {
  const city = document.getElementById('city-name').value;
  if (city) {
    getWeather(city);
  } else {
    alert('Please enter a city name');
  }
});

async function getWeather(city) {
//   console.log(city);
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

  try {
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error('City not found');
    }
    const data = await response.json();
    displayWeather(data);
  } catch (error) {
    document.getElementById('weather-info').innerHTML = `<p>${error.message}</p>`;
  }
}

function displayWeather(data) {
  const weatherInfo = `
    <h2>${data.name}, ${data.sys.country}</h2>
    <p>Temperature: ${data.main.temp}°C</p>
    <p>Weather: ${data.weather[0].description}</p>
    <p>Humidity: ${data.main.humidity}%</p>
    <p>Wind Speed: ${data.wind.speed} m/s</p>
  `;
  document.getElementById('weather-info').innerHTML = weatherInfo;
}
