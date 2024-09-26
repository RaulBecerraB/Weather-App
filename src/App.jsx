import { useState } from 'react'
import { useEffect } from 'react';
import { fetchWeatherData } from './utils/fetch-utils.js'

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

  const isArrayEmpty = (array) => {

  }

  const fetchWeather = async () => {
    try {
      const weatherData = await fetchWeatherData(city, URL, API_KEY)
      if (weatherData && weatherData.cityName && weatherData.weather) {
        setWeatherInfo(weatherData)
      } else {
        console.error('Weather data is incomplete:', weatherData)
      }
    } catch (error) {
      console.error('Error fetching weather data:', error)
    }
  }

  useEffect(() => {

    fetchWeather()

    //useEffect will update the weatherInfo state when the city changes
  }, [city]);

  useEffect(() => {
    const weatherIcons = {
      'clear sky': './src/assets/weather-icons/sun.svg',
      'few clouds': './src/assets/weather-icons/cloud-sun.svg',
      'scattered clouds': './src/assets/weather-icons/cloud.svg',
      'broken clouds': './src/assets/weather-icons/multiple-clouds.svg',
      'shower rain': './src/assets/weather-icons/cloud-showers.svg',
      'rain': './src/assets/weather-icons/cloud-rain.svg',
      'thunderstorm': './src/assets/weather-icons/cloud-bolt.svg',
      'snow': './src/assets/weather-icons/snowflake.svg',
      'mist': './src/assets/weather-icons/mist.svg',
      'moderate rain': './src/assets/weather-icons/cloud-showers.svg',
      'light rain': './src/assets/weather-icons/cloud-showers.svg'
    };

    const iconPath = weatherIcons[weatherInfo.weather];
    if (iconPath) {
      setIcon(iconPath);
    }
    // useEffect will update the icon state when the weatherInfo state changes
  }, [weatherInfo])


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
