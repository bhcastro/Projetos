const hbManha1 = document.getElementById('hb__manha__1');
const hbTarde1 = document.getElementById('hb__tarde__1');
const hbNoite1 = document.getElementById('hb__noite__1');
const htManha1 = document.getElementById('ht__manha__1');
const htTarde1 = document.getElementById('ht__tarde__1');
const outputHbTarde1 = document.getElementById('output__hb__tarde__1');
const outputHtTarde1 = document.getElementById('output__ht__tarde__1');
const botaoCalcular = document.getElementById('botao__calcular');

function executarTarde(){
    pegarValores(hbManha1, hbTarde1);
    pegarValores(htManha1, htTarde1);
}

function pegarValores(manha, tarde){
    const valorManha = parseFloat(manha.value.replace(',', '.'));
    const valorTarde = parseFloat(tarde.value.replace(',', '.'));
    if(!isNaN(valorManha) && !isNaN(valorTarde) && valorManha != 0 && valorTarde !=0){
        calcular(valorManha, valorTarde);
    }else{
        alert('Digite um número válido!');
    }
}

function calcular(manha, tarde) {
    let desvio = ((tarde - manha) / manha) * 100 ;
    desvio = desvio.toFixed(2);
    mostrarValor(outputHbTarde1, desvio);
    mostrarValor(outputHtTarde1, desvio);
}

function mostrarValor(output, valor){
    output.innerText = `${valor}%`;
}

botaoCalcular.onclick = executarTarde;