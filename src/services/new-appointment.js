import { api_config } from "./api-config.js";

export function newAppointment({id, name, pet_name, phone, service, appointment_date, appointment_hour}) {
  try {
    // Post request for the new appointments
    fetch(`${api_config.baseURL}/schedules`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({id, name, pet_name, phone, service, appointment_date, appointment_hour})
    })
    // Sucessful register message
    alert('Agendamento realizado com sucesso')
  } catch (error) {
    // Failed register message
    alert('Não foi possível realizar o agendamento')
    console.log(error);
  }
}