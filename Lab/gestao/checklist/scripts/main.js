const botaoCriarTarefa = document.querySelector('.botao__adicionar');
const botaoConfirmar = document.querySelector('.botao__confirmar');
const botaoApagar = document.querySelector('.botao__apagar');
const inserirTarefa = document.querySelector('.nova__tarefa');

let listaDeTarefasHTML = document.querySelector('.lista__tarefas');
let listaDeTarefas = []

function criarTarefa(){
    let novaTarefa = inserirTarefa.value;
    if(novaTarefa == novaTarefa.length){
        alert('Digite uma tarefa para criar!');
    }else{
        listaDeTarefasHTML.innerHTML = 
        `
        <li class="tarefas tarefa-2">
            <img class="imagens botao__confirmar" src="../img/check.png" alt="Confirmar" onclick="confirmar()">${novaTarefa}<img class="imagens botao__apagar" src="../img/trash.png" alt="Excluir" onclick="apagar()">
        </li>
        `
        
    }
    novaTarefa.focus();
}

function confirmar(){
    alert('Tarefa concluida')
}

function apagar(){
    alert('Tarefa apagada')
}