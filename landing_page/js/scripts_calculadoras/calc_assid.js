const inputPlantoes = document.getElementById('input__plantoes');
const inputFaltas = document.getElementById('input__faltas');
const inputAtrasos = document.getElementById('input__atrasos');
const inputAtestados = document.getElementById('input__atestados');
const outputAssiduidade = document.getElementById('output__assiduidade');
const buttonCalcularAssid = document.getElementById('botao__calc__assid');
const buttonZerarCampos = document.getElementById('botao__limpar__campos')
const paragrafoAssiduidade = document.getElementById('paragrafo__assiduidade');

function calcularAssiduidade(){
    let diasTrabalhados = parseInt(inputPlantoes.value);
    let faltasNaoJustificadas = parseInt(inputFaltas.value) || 0;
    let totalAtestados = parseInt(inputAtestados.value) || 0;
    let atrasos = parseInt(inputAtrasos.value) || 0;
    if(!isNaN(diasTrabalhados) && !isNaN(atrasos)){
    faltasNaoJustificadas = faltasNaoJustificadas*2;
    totalAtestados = totalAtestados * 0.5;
    atrasos = atrasos + faltasNaoJustificadas + totalAtestados;
    let totalAtrasos = (atrasos/diasTrabalhados)*100;
    let totalAssiduidade = 100 - totalAtrasos;
    totalAssiduidade = totalAssiduidade.toFixed(2); 
    outputAssiduidade.innerText = `${totalAssiduidade}%`;
    paragrafoAssiduidade.classList.remove('ocultar');
    buttonZerarCampos.classList.remove('ocultar');
    }else{
    alert('Insira um valor válido!');
    }
}

function limparCampos(){
    inputPlantoes.value = "";
    inputFaltas.value = "";
    inputAtrasos.value = "";
    inputAtestados.value = "";
    outputAssiduidade.innerText = "";
    paragrafoAssiduidade.classList.add('ocultar');
    buttonZerarCampos.classList.add('ocultar');
}

buttonZerarCampos.addEventListener('click', limparCampos)
buttonCalcularAssid.addEventListener('click', calcularAssiduidade);
