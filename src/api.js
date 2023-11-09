const getWeather = async (location) => {
  try {
    const response = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=2678e6bb9fa24eb594e183637230611&q=${location}&days=3`);
    const data = await response.json();
    return data;
  } catch (response) {
    return response;
  }
};
export default getWeather;
