const inputPlaquetas = document.getElementById('input__plaquetas');
const paragrafoPlaquetas = document.getElementById('paragrafo__plaquetas');
const outputPlaquetas = document.getElementById('output__plaquetas');
const botaoCalcular = document.getElementById('botao__calcular');
const botaoLimpar = document.getElementById('botao__limpar');
const mensagemErro = 'Insira um número válido!';

function pegarValores() {
    const valorPlaquetas = Number(inputPlaquetas.value);
    if (!isNaN(valorPlaquetas) && valorPlaquetas != 0) {
        calcularPlaquetas(valorPlaquetas);
    } else {
        alert(mensagemErro);
    }
}

function calcularPlaquetas(plaq) {
    const plaquetasCalculadas = (plaq * 1.1) * 1000;
    outputPlaquetas.innerText = (plaquetasCalculadas.toLocaleString('pt-BR'));
    paragrafoPlaquetas.classList.remove('ocultar');
}

function zerarValores() {
    inputPlaquetas.value = "";
    paragrafoPlaquetas.classList.add('ocultar');
}
botaoCalcular.addEventListener('click', pegarValores);
botaoLimpar.onclick = zerarValores;