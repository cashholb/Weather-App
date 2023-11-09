import getDay from 'date-fns/getDay';
import format from 'date-fns/format';
import './styles.css';
import { constructDateToday, constructDayForcasted } from './utils';
import getWeather from "./api";
import { displayToday, displayForecast } from "./dom";

const NUMBER_OF_DAYS_TO_FORECAST = 3;
const forecastDays = ["a", "b", "c"];

let displayedDay = 0;
let location = 'New York, New York';

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

const main = async () => {
  try {
    const data = await getWeather(location);
    console.log(data);

    // get current weather
    console.log(typeof data.current.feelslike_f);
    forecastDays[0] = {
      date: constructDateToday(data.current.last_updated),
      location: `${data.location.name}, ${data.location.region}`,
      descriptor: `${data.current.condition.text}`,
      highTemp: `${data.forecast.forecastday[0].day.maxtemp_f.toString().split('.')[0]}\u00B0F`,
      lowTemp: `${data.forecast.forecastday[0].day.mintemp_f.toString().split('.')[0]}\u00B0F`,
      feelsLike: `${data.current.feelslike_f.toString().split('.')[0]}\u2109`,
      rainChance: `${data.forecast.forecastday[0].day.daily_chance_of_rain}%`,
      humidity: `${data.current.humidity}%`,
      currWind: `${data.current.wind_mph}mph`,
    };

    for (let i = 1; i < NUMBER_OF_DAYS_TO_FORECAST; i += 1) {
      const forecastData = data.forecast.forecastday[i];
      // get date
      const forcastedDate = new Date(constructDayForcasted(forecastData.date));

      forecastDays[i] = {
        date: `${format(forcastedDate, 'EEEE')}, ${format(forcastedDate, 'MMMM')} ${format(forcastedDate, 'do')}`,
        location: `${data.location.name}, ${data.location.region}`,
        descriptor: `${forecastData.day.condition.text}`,
        highTemp: `${forecastData.day.maxtemp_f.toString().split('.')[0]}\u00B0F`,
        lowTemp: `${forecastData.day.mintemp_f.toString().split('.')[0]}\u00B0F`,
        rainChance: `${forecastData.day.daily_chance_of_rain}%`,
        humidity: `${forecastData.day.avghumidity}%`,
        maxWind: `${forecastData.day.maxwind_mph}mph`,
      };
      console.log(forecastDays[i]);
    }

    if (displayedDay === 0) {
      displayToday(forecastDays[displayedDay], true);
    } else if (displayedDay === 1 || displayedDay === 2) {
      displayForecast(forecastDays[displayedDay], displayedDay === NUMBER_OF_DAYS_TO_FORECAST - 1);
    }
  } catch (e) {
    //TO-DO: displayCouldNotFind();
    console.log('CAUGHT', e);
  }
};

// create event handlers
document.querySelectorAll('.arrow').forEach((arrow) => arrow.addEventListener('click', (e) => {
  const parentElem = e.target.parentNode;
  if (parentElem.classList.contains('left')) {
    displayedDay -= 1;
  }
  if (parentElem.classList.contains('right')) {
    displayedDay += 1;
  }
  if (displayedDay === 0) {
    displayToday(forecastDays[displayedDay], true);
  } else if (displayedDay === 1 || displayedDay === 2) {
    displayForecast(forecastDays[displayedDay], displayedDay === NUMBER_OF_DAYS_TO_FORECAST - 1);
  }
}));

document.querySelector('form').addEventListener('submit', (e) => {
  e.preventDefault();

  if ((document.getElementById('location')).value !== "") {
    location = (document.getElementById('location')).value;
    displayedDay = 0;
    main(location);
  }
});

main(location);