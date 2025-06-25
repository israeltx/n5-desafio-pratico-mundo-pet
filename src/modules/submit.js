import dayjs from "dayjs"
// Form
const form = document.querySelector('form')
const date_input = document.getElementById('date')

// Load the actual date on the date input
date_input.value = dayjs(new Date()).format('YYYY-MM-DD')

// Listen to the submit event on the form
form.addEventListener('submit', (event) => {
  // Prevent the default load behaviour from the form
  event.preventDefault()
})