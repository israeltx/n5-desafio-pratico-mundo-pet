// Body
const body = document.querySelector('body')
// Blur div
const blur_div = document.getElementById('blur')
// Agendar Button
const new_appointment = document.getElementById('new-appointment')
// Modal
const modal_form = document.querySelector('dialog')
// Close (X) button
const btn_close = document.getElementById('close-btn')

console.log(btn_close);
// Add open modal behaviour to the "Agendar" button
new_appointment.addEventListener('click', () => {
  // Remove scroll from body
  body.classList.add('lock-scroll')
  // Add blur to the background
  blur_div.classList.add('blur')
  // Add zoom in to the modal
  modal_form.classList.add('show')
  // Open modal
  modal_form.showModal()
})

// Add close modal bevariour to the close button (X)
btn_close.addEventListener('click', () => {
  // Add scroll to body
  body.classList.remove('lock-scroll')
  // Remove blur to the background
  blur_div.classList.remove('blur')
  // Close modal
  modal_form.close()
})
