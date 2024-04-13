/*=============== ACESSO INVESTIDOR ===============*/
const pass = 'abc123X'

document.querySelector('form').addEventListener('submit', e => {
  e.preventDefault()
  const formPassword = document.querySelector('#password').value

  if (pass === formPassword) {
    window.location.href = 'associate.html'
  } else {
    alert('Você precisa de uma permissão para acessar a página!')
    document.querySelector('#password').focus()
  }
})
