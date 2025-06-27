// Get all the uls
const ul = document.querySelectorAll('ul')

// Give each time period ul a click event listener
ul.forEach((period) => {
  period.addEventListener('click', (event) => {
    // console.log(event.target.classList.contains('btn-remove'));
    if (event.target.classList.contains('btn-remove')) {
      // Get the parent li for the click
      const item = event.target.closest('li')
      const {id} = item.dataset

      if (id) {
        const isConfirmed = confirm('Tem certeza que deseja remover o agendamento?')

        if (isConfirmed) {
          console.log('Removido')
        }

      }

    }
  })
})