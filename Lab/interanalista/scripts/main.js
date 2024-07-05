const botaoAdicionarCelula = document.querySelector('.botao__adicionar');
const botaoRemoverCelula = document.querySelector('.botao__remover');
const inputCelula = document.querySelector('.celula');
const inputValor = document.querySelector('.valor__celulas');
const celulas = document.querySelector('.lista__celulas');
const valorTotalCelulas = document.querySelector('.total');
const listaDeCelulas = [];
const contagemGlobal = [];
inputCelula.focus();

function adicionarCelula(){
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
    }else{
        mostrarCelulas();
    }
    if(listaDeCelulas.length === 0){
        location.reload();
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
    if (total > 100) {
        botaoAdicionarCelula.classList.add('disable');
        valorTotalCelulas.textContent = `Total: ${total}`;
        valorTotalCelulas.classList.add('mostrar__total');
    }else{
        botaoAdicionarCelula.classList.remove('disable');
        valorTotalCelulas.textContent = `Total: ${total}`;
        valorTotalCelulas.classList.add('mostrar__total');
        console.log(total);
        }
    }
}