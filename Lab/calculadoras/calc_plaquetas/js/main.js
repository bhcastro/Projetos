const inputPlaquetas = document.getElementById('input__plaquetas');
const inputRbc = document.getElementById('input__rbc');
const paragrafoPlaquetas = document.getElementById('paragrafo__plaquetas');
const outputPlaquetas = document.getElementById('output__plaquetas');
const botaoCalcular = document.getElementById('botao__calcular');
const botaoLimpar = document.getElementById('botao__limpar');
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
    paragrafoPlaquetas.classList.remove('ocultar');
}

function zerarValores() {
    inputPlaquetas.value = "";
    inputRbc.value = "";
    paragrafoPlaquetas.classList.add('ocultar');
}
botaoCalcular.addEventListener('click', pegarValores);
botaoLimpar.onclick = zerarValores;