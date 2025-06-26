import dayjs from "dayjs";
import { api_config } from "./api-config.js";

// Get the search date input
const search_date = document.getElementById('search-date')
const date = search_date.value
// console.log(date);

export async function fetchDailyAppointments() {
  try {
    // Request the data from the API
    const response = await fetch(`${api_config.baseURL}/schedules`)
    // Convert the data from the request
    const data = await response.json()
    
    //Filter the day schedule by the selected date
    // const selected_date_schedule = data.filter((appointment) => {
    //   dayjs(date).isSame(appointment.appointment_date)
    // })

    // console.log(selected_date_schedule);
    
    // return selected_date_schedule

    // data.forEach(element => {
    //   console.log(element.appointment_date);
    // });

    let result = []

    data.forEach(element => {
      if (element.appointment_date === date) {
        result.push(element)
      }
    });

    // console.log(result);
    return result

  } catch (error) {
    alert('Não foi possível buscar os agendamentos do dia selecionado')
    console.log(error);
  }
}
