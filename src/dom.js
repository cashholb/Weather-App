const displayToday = (currentObj) => {
  // hide left side
  (document.querySelector('.left.arrow')).style.visibility = 'hidden';
  
  (document.querySelector('.right.arrow')).style.visibility = 'visible';

  const content = document.querySelector('.current');
  content.innerHTML = "";

  // description
  const descriptionDom = document.createElement('div');
  descriptionDom.classList.add('description');
  descriptionDom.textContent = currentObj.descriptor;
  content.appendChild(descriptionDom);

  // location
  const locationDom = document.createElement('div');
  locationDom.classList.add('location');
  locationDom.textContent = currentObj.location;
  content.appendChild(locationDom);

  // date
  const dateDom = document.createElement('div');
  dateDom.classList.add('date');
  dateDom.textContent = currentObj.date;
  content.appendChild(dateDom);

  const weatherDetailsDom = document.createElement('div');
  weatherDetailsDom.classList.add('weather-details');
  content.appendChild(weatherDetailsDom);

  // current temp
  const tempDom = document.createElement('div');
  tempDom.classList.add('current-temp');
  tempDom.textContent = currentObj.feelsLike;
  weatherDetailsDom.appendChild(tempDom);

  const rightSideDom = document.createElement('div');
  rightSideDom.classList.add('right-side-details');
  weatherDetailsDom.appendChild(rightSideDom);

  // high temp
  const highTempDom = document.createElement('div');
  highTempDom.textContent = `H: ${currentObj.highTemp}`;
  rightSideDom.appendChild(highTempDom);

  // low temp
  const lowTempDom = document.createElement('div');
  lowTempDom.textContent = `L: ${currentObj.lowTemp}`;
  rightSideDom.appendChild(lowTempDom);

  // chance of rain
  const rainChanceDom = document.createElement('div');
  rainChanceDom.textContent = `Chance of rain: ${currentObj.rainChance}`;
  rightSideDom.appendChild(rainChanceDom);

  // humidity
  const humidityDom = document.createElement('div');
  humidityDom.textContent = `Humidity: ${currentObj.humidity}`;
  rightSideDom.appendChild(humidityDom);

  // current wind speed
  const currWind = document.createElement('div');
  currWind.textContent = `Current wind speed: ${currentObj.currWind}`;
  rightSideDom.appendChild(currWind);
};

const displayForecast = (forecastObj, isLastDay) => {
  // arrow visibility
  (document.querySelector('.left.arrow')).style.visibility = 'visible';
  if (isLastDay) {
    (document.querySelector('.right.arrow')).style.visibility = 'hidden';
  } else {
    (document.querySelector('.right.arrow')).style.visibility = 'visible';
  }

  const content = document.querySelector('.current');
  content.innerHTML = "";

  // description
  const descriptionDom = document.createElement('div');
  descriptionDom.classList.add('description');
  descriptionDom.textContent = forecastObj.descriptor;
  content.appendChild(descriptionDom);

  // location
  const locationDom = document.createElement('div');
  locationDom.classList.add('location');
  locationDom.textContent = forecastObj.location;
  content.appendChild(locationDom);

  // date
  const dateDom = document.createElement('div');
  dateDom.classList.add('date');
  dateDom.textContent = forecastObj.date;
  content.appendChild(dateDom);

  const weatherDetailsDom = document.createElement('div');
  weatherDetailsDom.classList.add('weather-details', 'forecast');
  content.appendChild(weatherDetailsDom);

  const leftSideDom = document.createElement('div');
  leftSideDom.classList.add('left-side-details');
  weatherDetailsDom.appendChild(leftSideDom);

  // high temp
  const highTempDom = document.createElement('div');
  highTempDom.textContent = `H: ${forecastObj.highTemp}`;
  highTempDom.classList.add('high-temp');
  leftSideDom.appendChild(highTempDom);

  // low temp
  const lowTempDom = document.createElement('div');
  lowTempDom.textContent = `L: ${forecastObj.lowTemp}`;
  lowTempDom.classList.add('low-temp');
  leftSideDom.appendChild(lowTempDom);

  const rightSideDom = document.createElement('div');
  rightSideDom.classList.add('right-side-details');
  weatherDetailsDom.appendChild(rightSideDom);

  // chance of rain
  const rainChanceDom = document.createElement('div');
  rainChanceDom.textContent = `Chance of rain: ${forecastObj.rainChance}`;
  rightSideDom.appendChild(rainChanceDom);

  // humidity
  const humidityDom = document.createElement('div');
  humidityDom.textContent = `Average Humidity: ${forecastObj.humidity}`;
  rightSideDom.appendChild(humidityDom);

  // avg wind speed
  const maxWind = document.createElement('div');
  maxWind.textContent = `Max wind speed ${forecastObj.maxWind}`;
  rightSideDom.appendChild(maxWind);
};

export { displayToday, displayForecast };
