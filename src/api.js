const getWeather = async (location) => {
  try {
    const response = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=2678e6bb9fa24eb594e183637230611&q=${location}&days=3`);
    const data = await response.json();
    console.log(data);

    // log location
    console.log(`The three day forecast in ${data.location.name}, ${data.location.region} is...`);

    // log forecast
    data.forecast.forecastday.forEach((day) => {
      console.log(`Date: ${day.date}, Average Temp: ${day.day.avgtemp_f}\u00B0F`);
    });

    return data;
  } catch (response) {
    console.log(`error finding ${location} with code: ${response}`);
    return response;
  }
};

export default getWeather;
