import { useState } from 'react'
import { useEffect } from 'react';
import { fetchWeatherData } from './scripts/fetchWeatherData.js'

import Card from './components/Card.jsx'

function App() {
  const [city, setCity] = useState('Merida')
  const [weatherInfo, setWeatherInfo] = useState({
    cityName: '',
    weather: '',
  })
  const [icon, setIcon] = useState('')

  const URL = 'https://api.openweathermap.org/data/2.5/weather'
  const API_KEY = 'a57c9e23bfa0b457b14e592bd72c87eb'

  useEffect(() => {
    async function getWeather() {
      try {
        const weatherData = await fetchWeatherData(city, URL, API_KEY);
        setWeatherInfo(weatherData);
      } catch (error) {

      }
    }

    getWeather();

    if (weatherInfo.weather === 'clear sky') {
      setIcon('./src/assets/weather-icons/sun.svg')
    }
    else if (weatherInfo.weather === 'few clouds') {
      setIcon('./src/assets/weather-icons/cloud-sun.svg')
    }
    else if (weatherInfo.weather === 'scattered clouds') {
      setIcon('./src/assets/weather-icons/cloud.svg')
    }
    else if (weatherInfo.weather === 'broken clouds') {
      setIcon('./src/assets/weather-icons/multiple-clouds.svg')
    }
    else if (weatherInfo.weather === 'shower rain') {
      setIcon('./src/assets/weather-icons/cloud-showers.svg')
    }
    else if (weatherInfo.weather === 'rain') {
      setIcon('./src/assets/weather-icons/cloud-rain.svg')
    }
    else if (weatherInfo.weather === 'thunderstorm') {
      setIcon('./src/assets/weather-icons/cloud-bolt.svg')
    }
    else if (weatherInfo.weather === 'snow') {
      setIcon('./src/assets/weather-icons/snowflake.svg')
    }
    else if (weatherInfo.weather === 'mist') {
      setIcon('./src/assets/weather-icons/mist.svg')
    }
  }, [city]);


  const changeCity = (name) => setCity(name)

  const handleInputChange = (event) => {
    setCity(event.target.value);
  };

  return (
    <div>
      <Card city={weatherInfo.cityName}
        weather={weatherInfo.weather}
        icon={icon}>
        <input type="text" value={city} onChange={handleInputChange} />
      </Card>
    </div>
  )
}

export default App
