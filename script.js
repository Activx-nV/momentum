let days = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday'
];

let months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
];

//API

const blockquote = document.querySelector('blockquote');
const figcaption = document.querySelector('figcaption');
const btn = document.querySelector('.btn-quoteChange');

const weatherIcon = document.querySelector('.weather-icon');
const temperature = document.querySelector('.temperature');
const weatherDescription = document.querySelector('.weather-description');
const city = document.querySelector('.city');
const humidity = document.querySelector('.humidity');
const windSpeed = document.querySelector('.wind-speed');
const hamburger = document.querySelector('.hamburger');
const weatherBlock = document.querySelector('.weather-block');

async function getQuote() {
  const url = `https://cors-anywhere.herokuapp.com/https://api.forismatic.com/api/1.0/?method=getQuote&format=json&lang=en`;
  const res = await fetch(url);
  const data = await res.json();
  blockquote.textContent = data.quoteText;
  figcaption.textContent = data.quoteAuthor;
}
document.addEventListener('DOMContentLoaded', getQuote);
btn.addEventListener('click', getQuote);


//Hamburger

hamburger.addEventListener('click', () => {
  weatherBlock.classList.toggle('weather-block_active');
  hamburger.classList.toggle('hamburger_active');
})

// API Weather

async function getWeather() {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city.textContent}&lang=en&appid=e33d57c5c809a8f6e45c6832ca43fa00&units=metric`;
  const res = await fetch(url);
  const data = await res.json();

  weatherIcon.className = 'weather-icon owf';
  weatherIcon.classList.add(`owf-${data.weather[0].id}`);
  temperature.textContent = `${data.main.temp}°C`;
  humidity.textContent = `RH ${data.main.humidity}%`;
  windSpeed.textContent = `${data.wind.speed}m/s`;
  weatherDescription.textContent = data.weather[0].description;
}
getWeather()



function setCity(event) {
  if (event.code === 'Enter') {
    getWeather();
    city.blur();
  }
}

document.addEventListener('DOMContentLoaded', getWeather);
city.addEventListener('keypress', setCity);


// DOM Elements
const time = document.querySelector('.time'),
  greeting = document.querySelector('.greeting'),
  name = document.querySelector('.name'),
  focus = document.querySelector('.focus'),
  date = document.querySelector('.date'),
  resetName = document.querySelector('.reset-name'),
  resetFocus = document.querySelector('.reset-focus'),
  changeBgButton = document.querySelector('.change-bg-button');

// Options
const showAmPm = true;

//Counter for background
let counter = 1;

// Show Time
function showTime() {
  let today = new Date(),
    hour = today.getHours(),
    min = today.getMinutes(),
    sec = today.getSeconds(),
    month = today.getMonth() + 1,
    dayOfTheWeek = today.getDay(),
    day = today.getDate();

  // Set AM or PM
  const amPm = hour >= 12 ? 'PM' : 'AM';

  // Output Time
  time.innerHTML = `${hour}<span>:</span>${addZero(min)}<span>:</span>${addZero(sec)}`;

  setTimeout(showTime, 1000);
}

//Reset Name/Focus
resetName.addEventListener('click', () => {
  localStorage.setItem('name', "[Enter Name]");
  name.textContent = "[Enter Name]"
});
resetFocus.addEventListener('click', () => {
  localStorage.setItem('focus', "[Enter Focus]");
  focus.textContent = "[Enter Focus]"
});

// Add Zeros
function addZero(n) {
  return (parseInt(n, 10) < 10 ? '0' : '') + n;
}

// Set Date
function setDate() {
  let getToday = new Date(),
    month = getToday.getMonth() + 1,
    dayOfTheWeek = getToday.getDay(),
    day = getToday.getDate();

  date.textContent = `${day} ${months[month]} - ${days[dayOfTheWeek]}`;
}

//Change background button
changeBgButton.addEventListener('click', () => {
  let today = new Date(),
    hour = today.getHours();
  if (hour < 12 && hour > 6) {
    if (counter > 20) {
      counter = 1;
    } else {
      document.body.style.backgroundImage = `url('assets/images/morning/${counter}.jpg')`
      counter++;
    }


  } else if (hour < 18) {
    if (counter > 20) {
      counter = 1;
    } else {
      document.body.style.backgroundImage = `url('assets/images/day/${counter}.jpg')`
      counter++;
    }

  } else if (hour < 24) {
    if (counter > 20) {
      counter = 1;
    } else {
      document.body.style.backgroundImage = `url('assets/images/evening/${counter}.jpg')`
      counter++;
    }


  } else if (hour < 6 && hour > 0) {
    if (counter > 23) {
      counter = 1;
    } else {
      document.body.style.backgroundImage = `url('assets/images/night/${counter}.jpg')`
      counter++;
    }

  }
});

// Set Background and Greeting
function setBgGreet() {
  let today = new Date(),
    hour = today.getHours();
  setTimeout(setBgGreet, 360000);
  if (hour < 12 && hour > 6) {
    // Morning
    switch (hour) {
      case 6: document.body.style.backgroundImage = "url('assets/images/morning/4.jpg')";
        break;
      case 7: document.body.style.backgroundImage = "url('assets/images/morning/5.jpg')";
        break;
      case 8: document.body.style.backgroundImage = "url('assets/images/morning/9.jpg')";
        break;
      case 9: document.body.style.backgroundImage = "url('assets/images/morning/10.jpg')";
        break;
      case 10: document.body.style.backgroundImage = "url('assets/images/morning/19.jpg')";
        break;
      case 11: document.body.style.backgroundImage = "url('assets/images/morning/17.jpg')";
        break;
    }
    greeting.textContent = "Good Morning, ";
  } else if (hour < 18) {
    // Afternoon
    switch (hour) {
      case 12: document.body.style.backgroundImage = "url('assets/images/day/2.jpg')";
        break;
      case 13: document.body.style.backgroundImage = "url('assets/images/day/3.jpg')";
        break;
      case 14: document.body.style.backgroundImage = "url('assets/images/day/8.jpg')";
        break;
      case 15: document.body.style.backgroundImage = "url('assets/images/day/9.jpg')";
        break;
      case 16: document.body.style.backgroundImage = "url('assets/images/day/12.jpg')";
        break;
      case 17: document.body.style.backgroundImage = "url('assets/images/day/20.jpg')";
        break;
    }
    greeting.textContent = "Good Afternoon, ";
    document.body.style.color = 'white';
  } else if (hour < 24) {
    // Evening
    switch (hour) {
      case 18: document.body.style.backgroundImage = "url('assets/images/evening/3.jpg')";
        break;
      case 19: document.body.style.backgroundImage = "url('assets/images/evening/10.jpg')";
        break;
      case 20: document.body.style.backgroundImage = "url('assets/images/evening/14.jpg')";
        break;
      case 21: document.body.style.backgroundImage = "url('assets/images/evening/19.jpg')";
        break;
      case 22: document.body.style.backgroundImage = "url('assets/images/evening/20.jpg')";
        break;
      case 23: document.body.style.backgroundImage = "url('assets/images/evening/07.jpg')";
        break;
    }
    greeting.textContent = "Good Evening, ";
    document.body.style.color = 'white';
  } else {
    switch (hour) {
      case 00: document.body.style.backgroundImage = "url('assets/images/day/1.jpg')";
        break;
      case 24: document.body.style.backgroundImage = "url('assets/images/day/3.jpg')";
        break;
      case 1: document.body.style.backgroundImage = "url('assets/images/day/8.jpg')";
        break;
      case 2: document.body.style.backgroundImage = "url('assets/images/day/4.jpg')";
        break;
      case 3: document.body.style.backgroundImage = "url('assets/images/day/21.jpg')";
        break;
      case 4: document.body.style.backgroundImage = "url('assets/images/day/22.jpg')";
        break;
      case 5: document.body.style.backgroundImage = "url('assets/images/day/23.jpg')";
        break;
    }
    greeting.textContent = "Good Night, ";
    document.body.style.color = 'white';
  }
}







// Get Name
function getName() {
  if (localStorage.getItem('name') === null) {
    name.textContent = '[Enter Name]'
  } else {
    name.textContent = localStorage.getItem('name');
  }
}

// Set Name
function setName(e) {
  if (e.type === 'keypress') {
    // Make sure enter is pressed
    if (e.which == 13 || e.keyCode == 13) {
      localStorage.setItem('name', e.target.innerText);
      name.blur();
    }
  } else {
    localStorage.setItem('name', e.target.innerText);
  }
}

name.addEventListener('click', clearName);
focus.addEventListener('click', clearFocus);


// Clear Areas on Click
function clearName(e) {
  if (localStorage.getItem('name') == "[Enter Name]") {
    e.target.textContent = '';
  }
}

function clearFocus(e) {
  if (localStorage.getItem('focus') == "[Enter Focus]") {
    e.target.textContent = '';
  }
}



// Get Focus
function getFocus() {
  if (localStorage.getItem('focus') === null) {
    focus.textContent = '[Enter Focus]'
  } else {
    focus.textContent = localStorage.getItem('focus');
  }
}

// Set Focus
function setFocus(e) {
  if (e.type === 'keypress') {
    // Make sure enter is pressed
    if (e.which == 13 || e.keyCode == 13) {
      localStorage.setItem('focus', e.target.innerText);
      focus.blur();
    }
  } else {
    localStorage.setItem('focus', e.target.innerText);
  }
}

name.addEventListener('keypress', setName);
name.addEventListener('blur', setName);
focus.addEventListener('keypress', setFocus);
focus.addEventListener('blur', setFocus);

name.addEventListener('keypress', checkLocalStorageName);
focus.addEventListener('keypress', checkLocalStorageFocus);
name.addEventListener('blur', checkLocalStorageName);
focus.addEventListener('blur', checkLocalStorageFocus);

function checkLocalStorageName() {
  if (localStorage.getItem('name') == "") {
    localStorage.setItem('name', '[Enter Name]');
    location.reload();
  } else if (localStorage.getItem('focus') == "") {
    localStorage.setItem('focus', '[Enter Focus]');
    location.reload();
  }
}


function checkLocalStorageFocus() {
  if (localStorage.getItem('focus') == "" || focus.innerHTML == '<br>') {
    localStorage.setItem('focus', '[Enter Focus]');
    location.reload();
  }
}

// Run
showTime();
setBgGreet();
getName();
getFocus();
setDate();
checkLocalStorageName();
checkLocalStorageFocus();
