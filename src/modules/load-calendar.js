// Dayjs library to deal with calendars
import dayjs from "dayjs"

// Date input
const date_input = document.getElementById('date')
const search_date = document.getElementById('search-date')

// Get today's date
const todaysDate = dayjs(new Date()).format('YYYY-MM-DD')
// Load the actual date on the date inputs
date_input.value = todaysDate
search_date.value = todaysDate
// Prevent the user from selecting a date before today
date_input.min = todaysDate
search_date.min = todaysDate