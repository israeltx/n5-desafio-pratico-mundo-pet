import {cancelAppointment} from '../services/cancel-appointment.js'

// Get all the uls
const ul = document.querySelectorAll('ul')

// Give each time period ul a click event listener
ul.forEach((period) => {
  period.addEventListener('click', async (event) => {
    // console.log(event.target.classList.contains('btn-remove'));
    if (event.target.classList.contains('btn-remove')) {
      // Get the parent li for the click
      const item = event.target.closest('li')
      // Get he id from the appointment
      const {id} = item.dataset

      // Check if the selected li has an id
      if (id) {
        const isConfirmed = confirm('Tem certeza que deseja remover o agendamento?')
        // Check if the deletion was confirmed
        if (isConfirmed) {
          // Sends the id for the API request for deletion
          await cancelAppointment(id)
        }
      }
    }
  })
})