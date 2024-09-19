import { useState } from 'react'
import { useEffect } from 'react';

import Card from './components/Card.jsx'

function App() {

  const URL = 'https://api.openweathermap.org/data/2.5/weather'
  const API_KEY = 'a57c9e23bfa0b457b14e592bd72c87eb'

  useEffect(() => {
    async function fetchWeatherData() {
      const res = await fetch(`${URL}?q=${'London'}&apiKey=${API_KEY}`)
      const data = await res.json()
      console.log(data.weather)
    }
    fetchWeatherData()
  }, []);

  return (
    <div>
      <Card></Card>
    </div>
  )
}

export default App
