function iniciar(){
    const botaoImprimir = document.querySelector('.botao__imprimir');
    const botaRealizar = document.querySelector('.botao__realizar');
    const dadosAnalista = document.querySelector('nav');

    let analista = prompt ('Digite seu nome:');
    let matricula = prompt ('Digite seu ID:');
    let filial = prompt ('Digite sua unidade:');

    document.getElementById('id').value = matricula;
    document.getElementById('nome').value = analista;
    document.getElementById('unidade').value = filial;

    let data = new Date();
    let dia = data.getDate();
    dia = dia <10? "0" + dia : dia;

    let mes =data.getMonth();
    mes = mes++ <10? "0" + mes : mes++;
    
    let ano = data.getFullYear();
    let dataRealizacao = dia + '/' + mes + '/' + ano;
    document.getElementById('data').value = dataRealizacao;

    dadosAnalista.classList.remove('dados__analista');
    dadosAnalista.classList.add('mostrar__nav');
    botaRealizar.classList.add('ocultar');
    botaoImprimir.classList.remove('ocultar');
}

function imprimir(){
    const zerarBordas = document.querySelector('main');
    const questao01Imprimir = document.querySelector('.lista__questao_01');
    const botaoImprimir = document.querySelector('.botao__imprimir');
    const seletor = document.querySelector('.seletor');
    seletor.classList.add('ocultar');
    zerarBordas.classList.add('zerar_bordas')
    questao01Imprimir.classList.add('impressao');
    botaoImprimir.classList.add('ocultar');
    print();
}