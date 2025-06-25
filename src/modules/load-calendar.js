// Dayjs library to deal with calendars
import dayjs from "dayjs"

// Date input
const date_input = document.getElementById('date')

// Get today's date
const todaysDate = dayjs(new Date()).format('YYYY-MM-DD')
// Load the actual date on the date input
date_input.value = todaysDate
// Prevent the user from selecting a date before today
date_input.min = todaysDate