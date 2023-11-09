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
  const tempDom = document.createElement('span');
  tempDom.classList.add('current-temp', 'degrees');
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
  currWind.textContent = `Wind speed: ${currentObj.currWind}`;
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

const displayCouldNotFind = (location) => {
  // disable arrow buttons
  (document.querySelector('.left.arrow')).style.visibility = 'hidden';
  (document.querySelector('.right.arrow')).style.visibility = 'hidden';

  // display error message
  const content = document.querySelector('.current');
  content.innerHTML = "";

  const errorContainer = document.createElement('div');
  errorContainer.classList.add('error-container');
  content.appendChild(errorContainer);

  const sadFace = document.createElement('div');
  sadFace.classList.add('sad-face');
  sadFace.textContent = ':(';
  errorContainer.appendChild(sadFace);

  const errorMessage = document.createElement('div');
  errorMessage.classList.add('error-message');
  errorMessage.textContent = `Could not find location '${location}'`;
  errorContainer.appendChild(errorMessage);

  const solutionContainer = document.createElement('ul');
  solutionContainer.classList.add('solution-container');
  errorContainer.appendChild(solutionContainer);

  const solutionMessage = document.createElement('p');
  solutionMessage.classList.add('solution-message');
  solutionMessage.textContent = 'Locations can be inputed with the following formats ...';
  solutionContainer.appendChild(solutionMessage);

  const possibleSolutions = ["Latitude and Longitude (Decimal degree) e.g: 48.8567,2.3508", "city name e.g.: Paris", "US zip e.g.: 10001", "UK postcode e.g: SW1", "Canada postal code e.g: G2J", "IP address (IPv4 and IPv6 supported) e.g: 100.0.0.1"];
  possibleSolutions.forEach((solution) => {
    const listElem = document.createElement('li');
    listElem.classList.add('solution');
    listElem.innerHTML = solution;
    solutionContainer.appendChild(listElem);
  });
};

export { displayToday, displayForecast, displayCouldNotFind };
