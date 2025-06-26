import dayjs from 'dayjs'
// Import all the hours available
import {available_hours} from '../utils/available-hours.js'

// Select element
const select = document.getElementById('hours')
// Get selected date
const date_input = document.getElementById('date')
// Get actual date
const actual_date = dayjs(new Date()).format('YYYY-MM-DD')
// Get actual hour
const actual_hour = dayjs(new Date()).format('H')

// First render of hours on load
renderHours(checkAvailableHours(date_input.value))

// Listen to date input to render the hours accordingly
date_input.addEventListener('change', () => { 
  renderHours(checkAvailableHours(date_input.value))
})

function checkAvailableHours(date) {
  let schedule_hours = []
  
  if (date > actual_date) {
    available_hours.forEach((hour) => {
      schedule_hours.push(hour)
  })
  } else {
    available_hours.forEach((hour) => {
      if (hour >= actual_hour) {
        schedule_hours.push(hour)
      }
    })
  }
  return schedule_hours
}

function renderHours(hours) { 
  // Clear previous list
  select.innerHTML = ''
  // Render available hours as options inside select
  hours.forEach((hour) => {
    // Create the option
    const option = document.createElement('option')
    // Set the option's innerHTML to an hour
    option.innerHTML = hour
    option.value = hour
    // Append option to the select element
    select.appendChild(option)
  })
}
