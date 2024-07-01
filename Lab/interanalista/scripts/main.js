const botaoAdicionarCelula = document.querySelector('.botao__adicionar');
const botaoRemoverCelula = document.querySelector('.botao__remover');
const inputCelula = document.querySelector('.celula');
const inputValor = document.querySelector('.valor__celulas');
const celulas = document.querySelector('.lista__celulas');
const totalCelulas = document.querySelector('.total__celulas');
const valorTotalCelulas = document.querySelector('.total');
const listaDeCelulas = [];
inputCelula.focus();

function adicionarCelula(){
    listaDeCelulas.push(inputCelula.value);
    //somarCelulas();
    mostrarCelulas();
    inputCelula.focus();
}

function removerCelula(celula){
    let excluirCelula = confirm(`Deseja mesmo remover: ${listaDeCelulas[celula]}?`);
    if(excluirCelula == true){
        listaDeCelulas.splice(celula, 1);
        mostrarCelulas()
    }else{
        mostrarCelulas();
    }
    if(listaDeCelulas.length == 0){
        location.reload()
    }
}

function mostrarCelulas(){
    let novaCelula = '';
    listaDeCelulas.forEach((celula, index) =>{novaCelula = novaCelula += `<li class="diferencial">${celula}: ${inputValor.value}<input type="button" class="botoes botao__remover" value="-" onclick="removerCelula(${index})"></li>`
});
    celulas.innerHTML = novaCelula;
    inputCelula.value = '';
    inputValor.value = '';
}

function somarCelulas(){
    let contagem = inputValor.value;
    let total = 0;
    total = total + contagem;
    console.log(total);
    valorTotalCelulas.classList.add('mostrar__total');
}