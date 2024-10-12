const inputPlaquetas = document.getElementById('input__plaquetas');
const inputRbc = document.getElementById('input__rbc');
const outoutPlaquetas = document.getElementById('output__plaquetas');
const outputPlaquetas = document.getElementById('output__plaquetas');
const botaoCalcularPlaquetas = document.getElementById('botao__calcular__plaquetas');
const botaoLimparPlaquetas = document.getElementById('botao__limpar__plaquetas');
const mensagemErro = 'Insira um número válido!';

function pegarValores() {
    const valorPlaquetas = Number(inputPlaquetas.value);
    const valorRbc = Number(inputRbc.value.replace(',', '.'));
    if (!isNaN(valorPlaquetas) && !isNaN(valorRbc) && valorPlaquetas != 0 && valorRbc != 0) {
        calcularPlaquetas(valorPlaquetas, valorRbc);
    } else {
        alert(mensagemErro);
    }
}

function calcularPlaquetas(rbc, plaq) {
    const plaquetasCalculadas = (plaq * rbc) * 1000;
    outputPlaquetas.innerText = (plaquetasCalculadas.toLocaleString('pt-BR'));
    outoutPlaquetas.classList.remove('ocultar');
    botaoLimparPlaquetas.classList.remove('ocultar');
}

function zerarValores() {
    inputPlaquetas.value = "";
    inputRbc.value = "";
    outputPlaquetas.innerText = "";
    outoutPlaquetas.classList.add('ocultar');
    botaoLimparPlaquetas.classList.add('ocultar');
}
botaoCalcularPlaquetas.addEventListener('click', pegarValores);
botaoLimparPlaquetas.addEventListener('click', zerarValores);