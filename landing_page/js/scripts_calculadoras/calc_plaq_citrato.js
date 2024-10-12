const inputPlaquetasCitrato = document.getElementById('input__plaquetas__citrato');
const paragrafoPlaquetasCitrato = document.getElementById('paragrafo__plaquetas__citrato');
const outputPlaquetasCitrato = document.getElementById('output__plaquetas__citrato');
const botaoCalcularCitrato = document.getElementById('botao__calcular__plaquetas__citrato');
const botaoLimparPlaquetasCitrato = document.getElementById('botao__limpar__plaquetas__citrato');
const mensagemErroCitrato = 'Insira um número válido!';

function pegarValoresCitrato() {
    const valorPlaquetas = Number(inputPlaquetasCitrato.value);
    if (!isNaN(valorPlaquetas) && valorPlaquetas != 0) {
        calcularPlaquetasCitrato(valorPlaquetas);
    } else {
        alert(mensagemErro);
    }
}

function calcularPlaquetasCitrato(plaq) {
    let plaquetasCalculadas = (plaq * 1.1) * 1000;
    outputPlaquetasCitrato.innerText = (plaquetasCalculadas.toLocaleString('pt-BR'));
    paragrafoPlaquetasCitrato.classList.remove('ocultar');
    botaoLimparPlaquetasCitrato.classList.remove('ocultar');
}

function zerarValoresCitrato() {
    inputPlaquetasCitrato.value = "";
    outputPlaquetasCitrato.innerText = "";
    paragrafoPlaquetasCitrato.classList.add('ocultar');
    botaoLimparPlaquetasCitrato.classList.add('ocultar');
}
botaoCalcularCitrato.addEventListener('click', pegarValoresCitrato);
botaoLimparPlaquetasCitrato.addEventListener('click', zerarValoresCitrato);