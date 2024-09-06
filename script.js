// Static weather data for different cities
const weatherData = {
    'new-york': {
        city: 'New York',
        temperature: '22°C',
        humidity: '65%',
        conditions: 'Cloudy'
    },
    'london': {
        city: 'London',
        temperature: '18°C',
        humidity: '72%',
        conditions: 'Rainy'
    },
    'tokyo': {
        city: 'Tokyo',
        temperature: '27°C',
        humidity: '80%',
        conditions: 'Sunny'
    },
    'paris': {
        city: 'Paris',
        temperature: '20°C',
        humidity: '70%',
        conditions: 'Partly Cloudy'
    }
};

// Selecting elements from the DOM
const locationSelect = document.getElementById('location');
const cityName = document.getElementById('city-name');
const temperature = document.getElementById('temperature');
const humidity = document.getElementById('humidity');
const conditions = document.getElementById('conditions');

// Function to update weather details when a new location is selected
function updateWeather() {
    const selectedLocation = locationSelect.value;
    const data = weatherData[selectedLocation];
    
    cityName.textContent = data.city;
    temperature.textContent = data.temperature;
    humidity.textContent = data.humidity;
    conditions.textContent = data.conditions;
}

// Event listener for location select dropdown
locationSelect.addEventListener('change', updateWeather);
