import getWeather from "./api";
import './styles.css';

const Current = (current) => current;

const Forecast = (dOne, dTwo) => ({ dayOne: dOne, dayTwo: dTwo });

// fetch data from api and console log it

const displayWeather = (currentObj, forecastObj) => {
  console.log(currentObj);
  console.log(forecastObj);
  console.log(document.querySelector('.content').childNodes);

  const currentWeather = document.querySelector('.current');
  currentWeather.textContent = `Current temp as of (${currentObj.last_updated}) is ${currentObj.temp_f}\u00B0F`;

  const dayOne = document.getElementById('day-one');
  dayOne.textContent = `The avg temp of ${forecastObj.dayOne.date} will be ${forecastObj.dayOne.day.avgtemp_f}\u00B0F`;

  const dayTwo = document.getElementById('day-two');
  dayTwo.textContent = `The avg temp of ${forecastObj.dayTwo.date} will be ${forecastObj.dayTwo.day.avgtemp_f}\u00B0F`;
};

const main = async (location) => {
  const data = await getWeather(location);

  const current = Current(data.current);

  const forecast = Forecast(data.forecast.forecastday[1], data.forecast.forecastday[2]);

  displayWeather(current, forecast);
};

document.querySelector('form').addEventListener('submit', async (e) => {
  e.preventDefault();
  const location = (document.getElementById('location')).value;
  if (location !== "") {
    main(location);
  }
});
