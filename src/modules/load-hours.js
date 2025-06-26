import dayjs from 'dayjs'
// Import all the hours available
import {available_hours} from '../utils/available-hours.js'

// Select element
const select = document.getElementById('hours')
// Hours input
const hour = document.getElementById('hour')
// Get actual hour
const actualHour = dayjs(new Date()).format('H')



let unavailableHours = []
let schedule_hours = []

// Check hour availability
available_hours.forEach((hour) => {
  if (hour < actualHour) {
    unavailableHours.push(hour)
  } else {
    schedule_hours.push(hour)
  }
})

// Render available hours as options inside select
schedule_hours.forEach((hour) => {
  // Create the option
  const option = document.createElement('option')
  // Set the option's innerHTML to an hour
  option.innerHTML = hour
  option.value = hour
  // Append option to the select element
  select.appendChild(option)
})

