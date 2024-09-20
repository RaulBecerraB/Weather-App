import { useState } from 'react'
import { useEffect } from 'react';
import { fetchWeatherData } from './scripts/fetchWeatherData.js'

import Card from './components/Card.jsx'

function App() {
  const [city, setCity] = useState('Merida')
  const [weatherInfo, setWeatherInfo] = useState({
    cityName: '',
    weather: '',
    icon: ''
  })

  const URL = 'https://api.openweathermap.org/data/2.5/weather'
  const API_KEY = 'a57c9e23bfa0b457b14e592bd72c87eb'

  useEffect(() => {
    async function getWeather() {
      try {
        const weatherData = await fetchWeatherData(city, URL, API_KEY);
        setWeatherInfo(weatherData);
      } catch (error) {
        console.error("Error fetching weather data:", error);
      }
    }

    getWeather();
  }, [city]);


  const changeCity = (name) => setCity(name)

  const handleInputChange = (event) => {
    setCity(event.target.value);
  };

  return (
    <div>
      <Card city={weatherInfo.cityName}
        weather={weatherInfo.weather}
        icon={weatherInfo.icon}>
        <input type="text" value={city} onChange={handleInputChange} />
      </Card>
    </div>
  )
}

export default App
