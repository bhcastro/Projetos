const botaoAcessar = document.getElementById('login');
const botaoCadastrar = document.getElementById('cadastrar');
const backgroundLogin = document.getElementById ('div__login');
const popupLogin = document.getElementById('popup__login');

botaoAcessar.addEventListener('click', abrirPopupLogin);
backgroundLogin.addEventListener('click', fecharPopupLogin);

function abrirPopupLogin() {
    backgroundLogin.classList.toggle('ocultar');
    popupLogin.classList.toggle('ocultar');
}

function fecharPopupLogin() {
    backgroundLogin.classList.toggle('ocultar');
    popupLogin.classList.toggle('ocultar');
}