const email = document.querySelector('#email');
const senha = document.querySelector('#senha');
const botao = document.querySelector('#botao-senha');

function validaFormulario(event) {
  event.preventDefault();
  if (email.value === 'tryber@teste.com' && senha.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
};
botao.addEventListener('click', validaFormulario);

const send = document.getElementById('submit-btn');
const agreement = document.getElementById('agreement');
agreement.disabled = true;

agreement.addEventListener('click', function sendButton () {
 if(agreement.checked === true) {
  agreement.disabled = false;
  }
});

