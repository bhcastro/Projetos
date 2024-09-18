const inputValor1 = document.getElementById('valor__1');
const inputValor2 = document.getElementById('valor__2');
const resultado = document.getElementById('resultado');
const outputResultado = document.getElementById('output__resultado');

function calcular(){
    let valor1 = parseFloat(inputValor1.value.replace(',', '.'));
    let valor2 = parseFloat(inputValor2.value.replace(',', '.'));
    if(!isNaN(valor1) && !isNaN(valor2)){
        let valorResultado = (valor2 - valor1) / valor1 * 100;
        valorResultado = valorResultado.toFixed(2).replace('.', ',');
        outputResultado.textContent = `${valorResultado}%`;
        resultado.classList.remove('ocultar');
    }else{
        alert('Digite um número válido!');
    }
}