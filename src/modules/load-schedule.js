import { fetchDailyAppointments } from "../services/fetch-daily-appointments.js";

// Get main
const main = document.querySelector('main')
// Get the search date input
const search_date = document.getElementById('search-date')
const date = search_date.value

// Render the list on load
document.addEventListener('DOMContentLoaded', () => {
  fetchDailyAppointments(date).then((resolve) => {
    console.log(resolve);
  }).catch((error) => {
    console.log(error);
  })
})