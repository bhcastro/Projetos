const botaoAdicionarCelula = document.querySelector('.botao__adicionar');
const botaoRemoverCelula = document.querySelector('.botao__remover');
const celulas = document.querySelector('.lista__celulas');
const listaDeCelulas = [];
const contagemGlobal = [];

const valorCerto = 'Valor de células atingido.';
const valorSuperior = 'Valor de células ultrapassado, reveja sua contagem!'
const nomeCelula = 'Não é possível inserir células sem nome!';
const valorCelula = 'Não é possível inserir células sem valor!';

let valorTotalCelulas = document.querySelector('.total');
let inputCelula = document.querySelector('.celula');
let inputValor = document.querySelector('.valor__celulas');

function adicionarCelula(){
    let campoCelula = inputCelula.value.trim();
    let campoValor = parseInt(inputValor.value);
    if (campoCelula === '') {
        alert(nomeCelula);
        inputCelula.focus();
        return;
    }
    if (isNaN(campoValor)) {
        alert(valorCelula);
        inputValor.focus();
        return;
    }
    listaDeCelulas.push(inputCelula.value);
    contagemGlobal.push(parseInt(inputValor.value));
    somarCelulas();
    mostrarCelulas();
    inputCelula.focus();
}

function removerCelula(celula){
    let excluirCelula = confirm(`Deseja mesmo remover: ${listaDeCelulas[celula]}?`);
    if(excluirCelula == true){
        listaDeCelulas.splice(celula, 1);
        contagemGlobal.splice(celula, 1);
        mostrarCelulas();
        somarCelulas();
    }
    if(listaDeCelulas.length === 0){
        celulas.innerHTML = '';
        valorTotalCelulas.textContent = '';
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
    if (total == 100){
        botaoAdicionarCelula.classList.add('disable');
        valorTotalCelulas.classList.add('valor__certo');
        valorTotalCelulas.classList.remove('valor__errado');
        alert(valorCerto);
    }else if (total > 100) {
        botaoAdicionarCelula.classList.add('disable');
        valorTotalCelulas.classList.add('valor__errado');
        valorTotalCelulas.classList.remove('valor__certo');
        alert(valorSuperior);
    } else {
        valorTotalCelulas.classList.remove('valor__errado');
        valorTotalCelulas.classList.remove('valor__certo');
        botaoAdicionarCelula.classList.remove('disable');
    }    
    valorTotalCelulas.textContent = `Total: ${total}`;
    valorTotalCelulas.classList.add('mostrar__total');
    }
}