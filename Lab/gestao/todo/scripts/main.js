const botaoCriarTarefa = document.querySelector('.botao__adicionar');
const botaoConfirmar = document.querySelector('.botao__confirmar');
const botaoApagar = document.querySelector('.botao__apagar');
const botaoLimparTudo = document.querySelector('botao__limpar');
const inserirTarefa = document.querySelector('.nova__tarefa');

let listaCompleta = document.querySelector('.lista__tarefas');
let listaDeTarefas = [];

function criarTarefa(){
    let novaTarefa = inserirTarefa.value;
    if(novaTarefa == novaTarefa.length){
        alert('Não é possível criar tarefas vazias!');
    }else{
        listaDeTarefas.push({
            item: inserirTarefa.value,
            concluida: false
        });
        mostrarTarefa();
    }
    inserirTarefa.focus();
}

function mostrarTarefa(){
    let novaTarefa = '';
    listaDeTarefas.forEach((tarefa, posicao) => {
        novaTarefa = novaTarefa + 
        `<li class="tarefas ${tarefa.concluida && "tarefa__completa"}">
            <img class="imagens botao__confirmar" src="../img/check.png" alt="Confirmar" onclick="concluir(${posicao})">${tarefa.item}<img class="imagens botao__apagar" src="../img/trash.png" alt="Excluir" onclick="apagar(${posicao})">
        </li>`
    })
    listaCompleta.innerHTML = novaTarefa;
    inserirTarefa.value = ''
}

function concluir(posicao){
    listaDeTarefas[posicao].concluida = !listaDeTarefas[posicao].concluida;
    mostrarTarefa();
}

function apagar(posicao){
    if(listaDeTarefas[posicao].concluida == false){
        excluirTarefa = confirm('A tarefa não foi concluída, deseja apagar mesmo assim?');
        if(excluirTarefa == true){
            listaDeTarefas.splice(posicao, 1);
            mostrarTarefa();
        }
    }else{
        listaDeTarefas.splice(posicao, 1);
        mostrarTarefa();
    }
    if(listaDeTarefas.length == 0){
        location.reload()
    }
}

function apagarTudo(){
    console.log('apagados')
    listaDeTarefas.splice(0, listaDeTarefas.length);
    mostrarTarefa();
    if(listaDeTarefas.length == 0){
        location.reload()
    }
}