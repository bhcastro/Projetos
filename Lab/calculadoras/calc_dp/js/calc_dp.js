const inputValoresDp = document.getElementById('input__valores__dp');
const listaValoresDp = document.getElementById('lista__valores__dp');
const valoresMedia = [];
const valoresIntervalo = [];
const outputMedia = document.getElementById('output__media');
const outputDesvio1 = document.getElementById('output__desvio__1');
const outputDesvio2 = document.getElementById('output__desvio__2');
const outputDesvio3 = document.getElementById('output__desvio__3');
const outputDesvioAlto = document.getElementById('output__desvio__alto');
const outputDesvioBaixo = document.getElementById('output__desvio__baixo');
const divValores = document.getElementById('div__valores');

function pegarValores() {
    let valorInput = Number(inputValoresDp.value);
    if(!isNaN(valorInput) && valorInput > 0){
        valoresMedia.push(valorInput);
        calcularMedia();
        calcularIntervalos();
        listarValores();
        inputValoresDp.value = "";
        inputValoresDp.focus();
    }else{
        alert(`Digite um número válido!`);
    }
}

function removerValor(index) {
    const excluirValor = confirm(`Remover ${valoresMedia[index]}?`);
if (excluirValor === true) {
        valoresMedia.splice(index, 1);
        valoresIntervalo.splice(index, 1);
        calcularMedia();
        calcularIntervalos()
        listarValores();
    }else{
        listarValores()
    }
}

function calcularMedia() {
    let media = valoresMedia.reduce((acc, val) => acc + val, 0) / valoresMedia.length;
    media = media.toFixed(2);
    mostrarValores(outputMedia, media);
    }

function calcularIntervalos() {
    let intervalo = 0;
    let media = valoresMedia.reduce((acc, val) => acc + val, 0) / valoresMedia.length;
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
    listarValores();
}

function calcularLimites(valorDesvio){
    let media = valoresMedia.reduce((acc, val) => acc + val, 0) / valoresMedia.length;
    let desvio1 = valorDesvio;
    let desvio2 = valorDesvio * 2;
    let desvio3 = valorDesvio * 3;
    let limiteAlto = media + desvio3;
    let limiteBaixo = media - desvio3;
    if(valoresMedia.length > 1){
        divValores.classList.remove('ocultar');
    mostrarValores(outputDesvio1, desvio1.toFixed(2));
    mostrarValores(outputDesvio2, desvio2.toFixed(2));
    mostrarValores(outputDesvio3, desvio3.toFixed(2));
    mostrarValores(outputDesvioAlto, limiteAlto.toFixed(2));
    mostrarValores(outputDesvioBaixo, limiteBaixo.toFixed(2));
    }else{
        divValores.classList.add('ocultar');
    }
}

function mostrarValores(saida, valor) {
    saida.value = valor;
}

function listarValores(){
    let novoValor = '';
    valoresMedia.forEach((_, index) => {novoValor += 
        `<li>
            Valor ${index+1}= ${valoresMedia[index]}
            <img  id="botao__remover" src="https://icons.iconarchive.com/icons/custom-icon-design/mono-general-4/24/trash-icon.png" width="24" height="24" onclick="removerValor(${index})">
        </li>`});
    listaValoresDp.innerHTML = novoValor
    inputValoresDp.value = "";
    inputValoresDp.focus();
}