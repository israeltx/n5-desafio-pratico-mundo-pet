// List renders API > Add button functionality
// Form captures the inputs and generates id > Register on the API
  // Inputs date and hours and treated apart, returning their values


// Dayjs library to deal with calendars
import dayjs from "dayjs"
import { newAppointment } from "../services/new-appointment.js"

// Form
const form = document.querySelector('form')

// Inputs
// Tutor's name
const tutors_name = document.getElementById('tutors-name')
// Pet's name
const pets_name = document.getElementById('pets-name')
// Phone number
const phone_number = document.getElementById('phone-number')
// Service Description
const service_description = document.getElementById('service-description')
// Date
const date = document.getElementById('date')
// Hour
const hours = document.getElementById('hours')



// Listen to the submit event on the form
form.addEventListener('submit', (event) => {
  // Prevent the default load behaviour from the form
  event.preventDefault()

  try {
    // Capture inputs and remove empthy spaces
    const name = tutors_name.value.trim()
    const pet_name = pets_name.value.trim()
    const phone = phone_number.value.trim()
    const service = service_description.value.trim()
    const appointment_date = date.value
    const appointment_hour = hours.value
  
    // If there's no name, don't continue
    if (!name) {
      alert('Por favor, insira o nome do tutor')
    }

    const id = new Date().getTime()

    newAppointment({
      id, 
      name, 
      pet_name, 
      phone, 
      service, 
      appointment_date, 
      appointment_hour
    })
    
  } catch (error) {
    alert('Não foi possível realizar o agendamento')
    console.log(error);
  }
})
// console.log(name, pets_name.value, phone_number.value, service_description.value, date.value, selected_hour);