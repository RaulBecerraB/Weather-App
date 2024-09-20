import { useState } from 'react'
import { useEffect } from 'react';

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
    async function fetchWeatherData(city) {
      const res = await fetch(`${URL}?q=${city}&apiKey=${API_KEY}`)
      const data = await res.json()
      console.log(data.weather[0].description)
      console.log(data.name)

      const weatherInfo =
      {
        cityName: data.name,
        weather: data.weather[0].description,
        icon: data.weather[0].icon
      }
      console.log(weatherInfo.icon)
      setWeatherInfo(weatherInfo)
    }

    fetchWeatherData(city)

  }, [city]);

  const changeCity = (name) => setCity(name)

  return (
    <div>
      <Card city={weatherInfo.cityName}
        weather={weatherInfo.weather}
        icon={weatherInfo.icon}>
      </Card>
      <button className='container' onClick={() => changeCity('London')}></button>
    </div>
  )
}

export default App
