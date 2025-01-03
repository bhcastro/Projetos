const botaoAdicionarCelula = document.querySelector('.botao__adicionar');
const botaoRemoverCelula = document.querySelector('.botao__remover');
const celulas = document.querySelector('.lista__celulas');
const botaoImprimir = document.querySelector('.botao__imprimir');
const listaDeCelulas = [];
const contagemGlobal = [];

const valorInvalido = 'Não é possível inserir mais do que 99 células do mesmo tipo!'
const valorSuperior = 'Valor de células ultrapassado, reveja sua contagem!'
const nomeCelula = 'Digite uma célula válida!';
const valorCelula = 'Digite um valor válido!';

let valorTotalCelulas = document.querySelector('.total');
let inputCelula = document.querySelector('.celula');
let inputValor = document.querySelector('.valor__celulas');

function adicionarCelula(){
    let campoCelula = inputCelula.value.trim();
    let campoValor = parseInt(inputValor.value);
    if (campoCelula === '' || !isNaN(campoCelula)) {
        alert(nomeCelula);
        inputCelula.value = '';
        inputCelula.focus();
        return;
    }
    if (!isNaN(campoValor) && campoValor < 100) {
    listaDeCelulas.push(inputCelula.value);
    contagemGlobal.push(parseInt(inputValor.value));
    somarCelulas();
    mostrarCelulas();
    inputCelula.focus();
    }else if(inputValor.value >= 100){
        alert(valorInvalido);
        inputValor.value = '';
        inputValor.focus();
    }else{
        alert(valorCelula);
        inputValor.value = '';
        inputValor.focus();
    }
}

function removerCelula(celula){
    let excluirCelula = confirm(`Deseja mesmo remover: ${listaDeCelulas[celula]}?`);
    if(excluirCelula === true){
        listaDeCelulas.splice(celula, 1);
        contagemGlobal.splice(celula, 1);
        mostrarCelulas();
        somarCelulas();
    }
    if(listaDeCelulas.length === 0){
        celulas.innerHTML = '';
        valorTotalCelulas.textContent = '';
        botaoAdicionarCelula.classList.remove('ocultar');
        botaoImprimir.classList.add('ocultar');
    }
}

function mostrarCelulas(){
    let novaCelula = '';
    listaDeCelulas.forEach((celula, index) =>{novaCelula = novaCelula += `<li class="diferencial">${celula}: ${contagemGlobal[index]}<input type="button" class="botoes botao__remover" value="-" onclick="removerCelula(${index})"></li>`
});
    celulas.innerHTML = novaCelula;
    inputCelula.value = '';
    inputValor.value = '';
}

function somarCelulas(){
    let total = 0;
    for (let celula of contagemGlobal) {
    total += celula;
    if (total === 100){
        botaoAdicionarCelula.classList.add('ocultar');
        botaoImprimir.classList.remove('ocultar')
        valorTotalCelulas.classList.add('valor__certo');
        valorTotalCelulas.classList.remove('valor__errado');
    }else if (total > 100) {
        botaoImprimir.classList.add('ocultar');
        botaoAdicionarCelula.classList.add('ocultar');
        valorTotalCelulas.classList.add('valor__errado');
        valorTotalCelulas.classList.remove('valor__certo');
        alert(valorSuperior);
    } else{
        botaoImprimir.classList.add('ocultar');
        botaoAdicionarCelula.classList.remove('ocultar');
        valorTotalCelulas.classList.remove('valor__errado');
        valorTotalCelulas.classList.remove('valor__certo');
}  
    valorTotalCelulas.textContent = `Total: ${total}`;
    valorTotalCelulas.classList.add('mostrar__total');
    }
}