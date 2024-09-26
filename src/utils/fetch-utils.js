export async function fetchWeatherData(city, URL, API_KEY) {
    const res = await fetch(`${URL}?q=${city}&apiKey=${API_KEY}`);
    const data = await res.json();

    const weatherInfo = {
      cityName: data.name,
      weather: data.weather[0].description,
      icon: data.weather[0].icon
    };

    return weatherInfo;
  }
