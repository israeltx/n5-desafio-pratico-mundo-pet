import dayjs from "dayjs"
// Form
const form = document.querySelector('form')
const date_input = document.getElementById('date')

// Get today's date
const todaysDate = dayjs(new Date()).format('YYYY-MM-DD')
// Load the actual date on the date input
date_input.value = todaysDate
// Prevent the user from selecting a date before today
date_input.min = todaysDate

// Listen to the submit event on the form
form.addEventListener('submit', (event) => {
  // Prevent the default load behaviour from the form
  event.preventDefault()
})