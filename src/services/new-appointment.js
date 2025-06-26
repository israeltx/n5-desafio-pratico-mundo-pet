import { api_config } from "./api-config.js";

export function newAppointment({id, name, pet_name, phone, service, appointment_date, appointment_hour}) {
  try {
    fetch(`${api_config.baseURL}/schedules`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({id, name, pet_name, phone, service, appointment_date, appointment_hour})
    })
    alert('Agendamento realizado com sucesso')
  } catch (error) {
    alert('Não foi possível realizar o agendamento')
    console.log(error);
  }
}