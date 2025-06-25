import dayjs from 'dayjs'

// Import all the hours available
import {available_hours} from '../utils/available-hours.js'

// Select element
const select = document.getElementById('hours')
// Hours input
const hour = document.getElementById('hour')
// Get actual hour
const actualHour = dayjs(new Date()).format('H')


function loadHours() {
  available_hours.forEach((hour) => {
    // Create the option
    const option = document.createElement('option')
    // Set the option's value to an hour
    option.innerHTML = hour
    // Append option to the select element
    select.appendChild(option)
  })
}

loadHours()