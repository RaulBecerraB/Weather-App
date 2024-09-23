import { fetchWeatherData } from './fetchWeatherData.js';

export async function getWeather(city,URL,API_KEY) {
    try {
      const weatherData = await fetchWeatherData(city, URL, API_KEY);
      return weatherData;
    } catch (error) {
        console.warn('Error fetching weather data');
    }
  }