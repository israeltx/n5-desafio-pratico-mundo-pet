import { api_config } from "./api-config.js";

export async function fetchDailyAppointments(date) {
  try {
    // Request the data from the API
    const response = await fetch(`${api_config.baseURL}/schedules`)
    // Convert the data from the request
    const data = await response.json()
    
    // Filter only the appointments within the selected date
    const result = data.filter((appointment) => appointment.appointment_date === date)

    return result

  } catch (error) {
    alert('Não foi possível buscar os agendamentos do dia selecionado')
    console.log(error);
  }
}
