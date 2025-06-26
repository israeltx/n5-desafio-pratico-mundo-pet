import dayjs from "dayjs";
import { api_config } from "./api-config.js";

export function fetchDailyAppointments(date) {
  try {
    // Request the data from the API
    const response = fetch(`${api_config.baseURL}/schedules`)
    // Convert the data from the request
    const data = response.json()
    // Filter the day schedule by the selected date
    const selected_date_schedule = data.filter((appointment) => {
      dayjs(date).isSame(appointment.appointment_date)
    })

    return selected_date_schedule

  } catch (error) {
    alert('Não foi possível buscar os agendamentos do dia selecionado')
    console.log(error);
  }
}