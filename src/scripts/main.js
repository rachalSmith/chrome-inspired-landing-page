// DOM Elements
const day = document.getElementById('day');
const time = document.getElementById('time');
const greeting = document.getElementById('greeting');
const name = document.getElementById('name');
const focus = document.getElementById('focus');


// Show day
function showDay() {
  let x = new Date();
  let weekday = new Array(7);
  weekday[0] = "Sunday";
  weekday[1] = "Monday";
  weekday[2] = "Tuesday";
  weekday[3] = "Wednesday";
  weekday[4] = "Thursday";
  weekday[5] = "Friday";
  weekday[6] = "Saturday";

  //output day
  let outputDay = weekday[x.getDay()];
  day.innerHTML = outputDay;
}


// Show time
function showTime() {
  let today = new Date(),
  hour = today.getHours(),
  min = today.getMinutes(),
  sec = today.getSeconds();
  // Set AM or PM
  const amPm = hour >= 12 ? 'PM' : 'AM';
  //12hr Format
  hour = hour % 12 || 12;
  // Output time
  time.innerHTML = `${hour}<span>:</span>${addZero(min)}<span>:</span>${
    addZero(sec)} ${amPm}`;

  setTimeout(showTime, 1000);
}


// Add Zero for single digit mins and secs
function addZero(n) {
  return (parseInt(n, 10) < 10 ? '0' : '') + n;
}


// Set Background
function setBg() {
  let today = new Date(),
  hour = today.getHours();

  if(hour < 12) {
    // Morning
    document.body.style.backgroundImage = "url('images/morning/morn1.jpg')";
  } else if (hour < 18) {
    //Afternoon
    document.body.style.backgroundImage = "url('images/afternoon/aft1.jpg')";
  } else {
    // Evening
    document.body.style.backgroundImage = "url('images/evening/evn1.jpg')";
  }
}


// Set greeting
function setGreet() {
  let today = new Date(),
  hour = today.getHours();

  if(hour < 12) {
    // Morning
    greeting.textContent = 'Good Morning';
    document.body.style.color = 'black';
  } else if (hour < 18) {
    //Afternoon
    greeting.textContent = 'Good noonin';
  } else {
    // Evening
    greeting.textContent = 'Good Evening';
  }
}


// Get name
function getName() {
  if (localStorage.getItem('name') === null) {
      name.textContent = '[ENTER NAME]';
  } else {
    name.textContent = localStorage.getItem('name');
  }
}


// Set name
function setName(e) {
  if(e.type === 'keypress') {
    // Make sure ENTER is pressed
    if (e.which == 13 || e.keyCode == 13) {
          localStorage.setItem('name', e.target.innerText);
          name.blur();
    }
  } else {
    localStorage.setItem('name', e.target.innerText);
  }
}


// Get focus
function getFocus() {
  if (localStorage.getItem('focus') === null) {
      focus.textContent = '[ENTER FOCUS]';
  } else {
    focus.textContent = localStorage.getItem('focus');
  }
}


// Set focus
function setFocus(e) {
  if(e.type === 'keypress') {
    // Make sure ENTER is pressed
    if (e.which == 13 || e.keyCode == 13) {
          localStorage.setItem('focus', e.target.innerText);
          focus.blur();
    }
  } else {
    localStorage.setItem('focus', e.target.innerText);
  }
}


// Event listeners
name.addEventListener('keypress', setName);
name.addEventListener('blur', setName);
focus.addEventListener('keypress', setFocus);
focus.addEventListener('blur', setFocus);


// Run
showDay();
showTime();
setBg();
setGreet();
getName();
getFocus();
