const inputValores = document.getElementById('input__valores');
const valoresMedia = [];
const valoresIntervalo = [];
const outputMedia = document.getElementById('output__media');
const outputDesvio1 = document.getElementById('output__desvio__1');
const outputDesvio2 = document.getElementById('output__desvio__2');
const outputDesvio3 = document.getElementById('output__desvio__3');
const outputDesvioAlto = document.getElementById('output__desvio__alto');
const outputDesvioBaixo = document.getElementById('output__desvio__baixo');

function pegarValores() {
    let valorInput = Number(inputValores.value);
    if(!isNaN(valorInput) && valorInput > 0){
        valoresMedia.push(valorInput);
        calcularMedia();
        inputValores.value = "";
        inputValores.focus();
    }else{
        alert(`${inputValores.value} não é um número válido!`);
    }
}

function calcularMedia() {
    let media = valoresMedia.reduce((acc, val) => acc + val) / valoresMedia.length;
    media = media.toFixed(2);
    mostrarValores(outputMedia, media);
    }

function calcularIntervalos() {
    let intervalo = 0
    let media = valoresMedia.reduce((acc, val) => acc + val) / valoresMedia.length;
    for (let i = 0; i < valoresMedia.length; i++) {
        intervalo = (valoresMedia[i] - media) ** 2;
        valoresIntervalo.push(intervalo);
    }
    calcularDesvio();
}

function calcularDesvio(){
    let totalDesvio = valoresIntervalo.reduce((acc, val) => (acc + val));
    let desvio = totalDesvio / valoresIntervalo.length;
    let raizDesvio= Math.sqrt(desvio);
    calcularLimites(raizDesvio);
}

function calcularLimites(valorDesvio){
    let media = valoresMedia.reduce((acc, val) => acc + val) / valoresMedia.length;
    let desvio1 = valorDesvio;
    let desvio2 = valorDesvio * 2;
    let desvio3 = valorDesvio * 3;
    let limiteAlto = media + desvio3;
    let limiteBaixo = media - desvio3;
    mostrarValores(outputDesvio1, desvio1.toFixed(2));
    mostrarValores(outputDesvio2, desvio2.toFixed(2));
    mostrarValores(outputDesvio3, desvio3.toFixed(2));
    mostrarValores(outputDesvioAlto, limiteAlto.toFixed(2));
    mostrarValores(outputDesvioBaixo, limiteBaixo.toFixed(2));
}

function mostrarValores(saida, valor) {
    saida.value = valor;
}