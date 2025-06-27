import { fetchDailyAppointments } from "../services/fetch-daily-appointments.js";

// Get the lists by time period
const morning_list = document.getElementById('morning-list')
const afternoon_list = document.getElementById('afternoon-list')
const evening_list = document.getElementById('evening-list')

// Get the search date input
const search_date = document.getElementById('search-date')

// Render the list on change of the search date input
search_date.addEventListener('change', () => {
  const date = search_date.value
  fetchDailyAppointments(date).then((appointments) => {
    morning_list.innerHTML = ''
    afternoon_list.innerHTML = ''
    evening_list.innerHTML = ''
    
    // Render the appointments
    appointments.forEach((appointment) => {
      // Create the li element
      const li = document.createElement('li')
      li.innerHTML = `
        <label for="" class="label-medium scheduled-time">${appointment.appointment_hour}</label>
        <label for="" class="label-medium">${appointment.pet_name} &nbsp</label>
        <p class="paragraph-medium pet-owner-name"> / ${appointment.name}</p>
        <p class="paragraph-medium service-description">${appointment.service}</p>
        <a href="" class="paragraph-small btn-remove">Remover agendamento</a>
      `
      if (appointment.appointment_hour.split(":")[0] <= 12) {
        morning_list.appendChild(li)
      } else if (appointment.appointment_hour.split(":")[0] > 18) {
        evening_list.appendChild(li)
      } else {
        afternoon_list.appendChild(li)
      }
    })
  }).catch((error) => {
    console.log(error);
  })
})