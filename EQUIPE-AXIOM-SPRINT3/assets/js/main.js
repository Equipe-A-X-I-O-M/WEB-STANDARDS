/*=============== EMAIL JS ===============*/
const contactForm = document.getElementById('contact-form')
const contactMessage = document.getElementById('contact-message')

function sendEmail(e) {
  e.preventDefault()

  // serviceID - templateID - #form - publicKey
  emailjs
    .sendForm(
      'service_d6p0xi6',
      'template_dm12nml',
      '#contact-form',
      'oR9wea1SIlIItWxTS'
    )
    .then(
      () => {
        // Show sent message
        contactMessage.textContent = 'Mensagem enviada com sucesso ✅'

        // Remove message after five seconds
        setTimeout(() => {
          contactMessage.textContent = ''
        }, 5000)

        // Clear input fields
        contactForm.reset()
      },
      () => {
        // Show error message
        contactMessage.textContent = 'Message não enviada (Erro no processo) ❌'
      }
    )
}

contactForm.addEventListener('submit', sendEmail)
