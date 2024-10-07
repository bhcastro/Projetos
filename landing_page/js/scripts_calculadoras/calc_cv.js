const inputValor1 = document.getElementById('valor__1');
const inputValor2 = document.getElementById('valor__2');
const resultado = document.getElementById('resultado__cv');
const outputResultado = document.getElementById('output__resultado');
const botaoCalcular = document.getElementById('botao__calcular__cv');
const botaoLimpar = document.getElementById('botao__limpar__cv');

function calcularCv(){
    let valor1 = parseFloat(inputValor1.value.replace(',', '.'));
    let valor2 = parseFloat(inputValor2.value.replace(',', '.'));
    if(!isNaN(valor1) && !isNaN(valor2) && valor1 != 0 && valor2 != 0){
        let valorResultado = (valor2 - valor1) / valor1 * 100;
        valorResultado = valorResultado.toFixed(2).replace('.', ',');
        outputResultado.textContent = `${valorResultado}%`;
        resultado.classList.toggle('ocultar');
    }else{
        alert('Digite um número válido!');
    }
}

function limpar(){
    inputValor1.value = "";
    inputValor2.value = "";
    resultado.classList.toggle('ocultar');
    outputResultado.textContent = "";
}

botaoCalcular.addEventListener('click', calcularCv);
botaoLimpar.addEventListener('click', limpar);