const botaoAdicionarCelula = document.querySelector('.botao__adicionar');
const botaoRemoverCelula = document.querySelector('.botao__remover');
const contagemGlobal = document.querySelector('.lista__celulas');
const contagemDiferencial = [];
let celula = document.querySelector('.celula');

function adicionarCelula(){
    
    contagemDiferencial.push(celula.value);
    console.log(contagemDiferencial);
}