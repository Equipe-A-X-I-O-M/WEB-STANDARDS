/*=============== ACESSO INVESTIDOR ===============*/
// Função para selecionar elementos do DOM usando um seletor CSS
const $ = element => document.querySelector(element)

const connectMessage = document.getElementById('connect-message')

// Adiciona um ouvinte de evento para o clique no botão "entrar"
$('#connect').addEventListener('click', e => {
  // Evita o comportamento padrão do clique (envio do formulário)
  e.preventDefault()

  // Obtém a string do localStorage com os dados do usuário cadastrado
  const stringUser = localStorage.getItem('userAxiom')

  // Converte a string em objeto JavaScript
  const registeredUser = JSON.parse(stringUser)

  // Extrai o email e senha do usuário cadastrado
  const { email, password } = registeredUser

  // Verifica se os dados inseridos pelo usuário correspondem aos cadastrados
  const correctData =
    email === $('#email').value && password === $('#password').value

  // Exibe no console se os dados estão corretos (apenas para depuração)
  console.log(correctData)

  // Se os dados não estiverem corretos, exibe um alerta e interrompe a execução
  if (!correctData) {
    connectMessage.textContent =
      'Você informou dados inválidos, tente novamente ❌'
    return
  }

  // Se os dados estiverem corretos, redireciona para a página de usuário logado
  window.location.href = './associate.html'
})
