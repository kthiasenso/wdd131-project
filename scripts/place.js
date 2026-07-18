// place.js

// ----- Footer: dynamic year and last-modified date -----
document.getElementById('year').textContent = new Date().getFullYear();
document.getElementById('lastModified').textContent = document.lastModified;

// ----- Wind chill -----
const temperature = 24;   // °C
const windSpeed = 15;     // km/h

// Metric wind chill formula:
// returns the wind chill in one line, given temp (°C) and wind speed (km/h)
function calculateWindChill(temp, wind) {
  return (13.12 + 0.6215 * temp - 11.37 * Math.pow(wind, 0.16) + 0.3965 * temp * Math.pow(wind, 0.16)).toFixed(1);
}

// Only call calculateWindChill when the metric conditions are met:
// temperature <= 10°C AND wind speed > 4.8 km/h. Otherwise, show "N/A".
const windchillEl = document.getElementById('windchill');

if (temperature <= 10 && windSpeed > 4.8) {
  windchillEl.textContent = `${calculateWindChill(temperature, windSpeed)}°C`;
} else {
  windchillEl.textContent = 'N/A';
}
