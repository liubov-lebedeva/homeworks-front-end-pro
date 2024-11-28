const weatherDiv = document.getElementById('weather');
const refreshBtn = document.getElementById('refreshBtn');

async function fetchWeather() {
    try {
        const response = await fetch('https://api.openweathermap.org/data/2.5/weather?lat=50.447731&lon=30.542721&appid=fb0d665eb50842a27a6ceffd9f153167');

        if (!response.ok) {
            throw new Error('Failed to fetch weather data');
        }

        const data = await response.json();

        displayWeather(data);
    } catch (error) {
        console.error('Error:', error.message);
        weatherDiv.innerHTML = `<div class="error">Error: ${error.message}</div>`;
    }
}


function displayWeather(data) {
    const {main, weather, name} = data;
    const tempCelsius = (main.temp - 273.15).toFixed(2);
    const feelsLikeCelsius = (main.feels_like - 273.15).toFixed(2);

    const currentTime = new Date();
    const dateOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const timeOptions = { hour: '2-digit', minute: '2-digit', hour12: true };
    const formattedDate = currentTime.toLocaleDateString('en-US', dateOptions);
    const formattedTime = currentTime.toLocaleTimeString('en-US', timeOptions);

    weatherDiv.innerHTML = `
        <div>
            <h2>${name}</h2>
            <p>${weather[0].description}</p>
            <p>Temperature: ${tempCelsius}°C</p>
            <p>Feels like: ${feelsLikeCelsius}°C</p>
            <p class="time">${formattedDate}</p>
            <p class="time">${formattedTime}</p>
        </div>
    `;
}


fetchWeather();

refreshBtn.addEventListener("click", async () => {
    await fetchWeather();
});