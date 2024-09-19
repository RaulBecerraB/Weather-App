import { useState } from 'react'
import { useEffect } from 'react';

import Card from './components/Card.jsx'

function App() {

  const URL = 'https://api.openweathermap.org/data/2.5/weather'
  const API_KEY = 'a57c9e23bfa0b457b14e592bd72c87eb'
  let city = 'Merida'

  useEffect(() => {

    async function fetchWeatherData() {
      const res = await fetch(`${URL}?q=${city}&apiKey=${API_KEY}`)
      const data = await res.json()
      console.log(data.weather[0].description)
      console.log(data.name)

      const weatherInfo =
      {
        city: data.name,
        weather: data.weather[0].description
      }

      return weatherInfo
    }

    const weatherInfo = fetchWeatherData()
  }, []);

  return (
    <div>
      <Card></Card>
    </div>
  )
}

export default App
