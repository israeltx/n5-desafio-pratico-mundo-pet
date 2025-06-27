import { api_config } from "./api-config.js";

export async function cancelAppointment(id) {
  try {
    await fetch(`${api_config.baseURL}/schedules/${id}`, {
      method: 'DELETE'
    })
    alert('Agendamento cancelado com sucesso')
  } catch (error) {
    alert('Não foi possível realizar o cancelamento')
    console.log(error);
  }
}