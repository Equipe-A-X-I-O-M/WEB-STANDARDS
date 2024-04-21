// Função para selecionar elementos do DOM usando um seletor CSS
const $ = element => document.querySelector(element)

const registerForm = document.getElementById('register-form')
const registerMessage = document.getElementById('register-message')

// Adiciona um ouvinte de evento para o clique no botão "cadastro"
$('#createAccount').addEventListener('click', e => {
  // Evita o comportamento padrão do clique (envio do formulário)
  e.preventDefault()

  // Obtém os valores dos campos de entrada do formulário
  const fullName = $('#fullName').value
  const email = $('#email').value
  const password = $('#password').value

  // Verifica se todos os campos do formulário foram preenchidos
  const allFiled =
    fullName.length !== 0 && email.length !== 0 && password.length !== 0

  // Se algum campo estiver vazio, exibe um alerta e interrompe a execução
  if (!allFiled) {
    registerMessage.textContent = 'Preencha todos os campos antes de enviar. ❌'
    return
  }

  // Cria um objeto contendo os dados do usuário cadastrado
  const registeredUser = {
    fullName,
    email,
    password
  }

  // Converte o objeto em uma string JSON
  const stringUser = JSON.stringify(registeredUser)

  // Armazena os dados do usuário no localStorage
  localStorage.setItem('userAxiom', stringUser)

  // Mostra mensagem de que o cadastro foi finalizado
  registerMessage.textContent = 'Cadastro realizado com sucesso ✅'

  // Remove mensagem após 5 segundos
  setTimeout(() => {
    registerMessage.textContent = ''
    // Limpa inputs
    registerForm.reset()

    // Redireciona o usuário para a página de login
    window.location.href = './login.html'
  }, 3500)
})
