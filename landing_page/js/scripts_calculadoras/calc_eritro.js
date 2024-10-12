const inputLeuco = document.getElementById('valor__leuco');
const inputEritro = document.getElementById('valor__eritro');
const paragrafoResultado = document.getElementById('resultado__eritro')
const outputResultadoEritro = document.getElementById('output__resultado__eritro')
const botaoCalcularEritro = document.getElementById('botao__calcular__eritro');
const botaoLimparEritro = document.getElementById('botao__limpar__eritro');


function calcularEritro(){
    let valorLeuco = parseFloat(inputLeuco.value.replace(',', '.'));
    let valorEritro = parseFloat(inputEritro.value);
    if(!isNaN(valorLeuco) && !isNaN(valorEritro) && valorLeuco != 0 && valorEritro != 0){
        let leucoTotal = valorLeuco * 100;
        let eritroTotal = valorEritro + 100;
        let valorResultado = leucoTotal / eritroTotal;
        outputResultadoEritro.innerText = (valorResultado.toLocaleString('pt-BR'));
        paragrafoResultado.classList.remove('ocultar');
        botaoLimparEritro.classList.remove('ocultar');
    }else{
        alert('Digite um número válido!');
    }
}

function limpar(){
    inputLeuco.value = "";
    inputEritro.value = "";
    paragrafoResultado.classList.add('ocultar');
    botaoLimparEritro.classList.add('ocultar');
    outputResultadoEritro.innerText = "";
}

botaoCalcularEritro.addEventListener('click', calcularEritro);
botaoLimparEritro.addEventListener('click', limpar);