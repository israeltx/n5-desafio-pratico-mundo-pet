// Agendar Button
const new_appointment = document.getElementById('new-appointment')
// Modal
const modal_form = document.querySelector('dialog')
// Close (X) button
const btn_close = document.getElementById('close-btn')

console.log(btn_close);
// Add open modal behaviour to the "Agendar" button
new_appointment.addEventListener('click', () => {
  modal_form.showModal()
})

// Add close modal bevariour to the close button (X)
btn_close.addEventListener('click', () => {
  modal_form.close()
})
