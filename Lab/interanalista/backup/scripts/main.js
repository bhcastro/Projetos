function iniciar(){

    const botaRealizar = document.querySelector('.botao__realizar');
    const dadosAnalista = document.querySelector('nav');

    let analista = prompt ('Digite seu nome:');
    document.getElementById('nome').value = analista;

    let matricula = prompt ('Digite seu ID:');
    document.getElementById('id').value = matricula;

    let filial = prompt ('Digite sua unidade:');
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
    botaRealizar.classList.add('ocultar__botao');
}