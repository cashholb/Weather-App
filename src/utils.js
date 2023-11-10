import format from "date-fns/format";

// Util function to return current formatted date / time from weatherAPI.com
// param: date - takes date in the format 'year-month-day hour-min'
// returns: formatted date as 'day_of_the_week, month-in-english day at hour:minute'
const constructDateToday = (date) => {
  const datePattern = /(\d{4})-(\d{2})-(\d{2}) (\d{2}):(\d{2})/;
  const match = date.match(datePattern);

  if (match) {
    const year = (match[1]);
    const month = parseInt(match[2], 10) - 1; // Months are 0-based in JavaScript
    const day = parseInt(match[3], 10);
    const hour = (match[4]);
    const minute = (match[5]);

    const dayOfWeek = format(new Date(year, month, day), 'EEEE');
    const monthReadable = format(new Date(year, month, day), 'LLLL');
    return `${dayOfWeek}, ${monthReadable} ${day} at ${hour}:${minute}`;
  }
  return 'Could not format date provided';
};

// Util function to return forcasted formatted date from weatherAPI.com
// param: date - takes date in the format 'year-month-day hour-min'
// returns: formatted date as 'day_of_the_week, month-in-english day at hour:minute'
const constructDayForcasted = (date) => {
  // format 'yyyy-month-day
  const splitDate = date.split('-');
  return `${splitDate[0]}/${splitDate[1]}/${splitDate[2]}`;
};

// set last location in local storage
const setLastLocation = (currentLocation) => {
  localStorage.clear();
  localStorage.setItem('lastLocation', JSON.stringify(currentLocation));
};

const loadLastLocation = () => {
  const lastLocation = JSON.parse(localStorage.getItem('lastLocation'));
  if (lastLocation) {
    return lastLocation;
  }
  return false;
};

export {
  constructDateToday, constructDayForcasted, loadLastLocation, setLastLocation,
};
