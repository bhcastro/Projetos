const mensagemValidacao = ('Atenção! Ao clicar em verificar não será possível editar o valor inserido. Tem certeza que desa validar os valores?');

let data = new Date();
let dia = data.getDate();
dia = dia <10? "0" + dia : dia;
let mes =data.getMonth();
mes = mes++ <10? "0" + mes : mes++;
let ano = data.getFullYear();
let dataPreenchimento = dia + '/' + mes + '/' + ano;

document.querySelector('.data').value = dataPreenchimento;

function calcularTarde() {
    let valorManha = document.querySelector('.rbc_manha').value;
    let valorTarde = document.querySelector('.rbc_tarde').value;
    let desvio = ((valorTarde - valorManha) / valorManha) * 100 ;
    let porcentagem = desvio.toFixed(2);
    let botaoTarde = document.querySelector('.tarde');
    let porcentagemTarde = (`(${porcentagem} %)`);
    let situacaoTarde = document.querySelector('.desvio_tarde')
    validar = confirm(mensagemValidacao);
    if(validar == true){
        if(porcentagem > -1.5 && porcentagem < 1.5){
            document.querySelector('.desvio_tarde').value = porcentagemTarde;
            situacaoTarde.classList.remove('reprovado');
            situacaoTarde.classList.add('aprovado');
            botaoTarde.classList.add('ocultar');
        }else{
            document.querySelector('.desvio_tarde').value = porcentagemTarde;
            situacaoTarde.classList.remove('aprovado');
            situacaoTarde.classList.add('reprovado');
            botaoTarde.classList.add('ocultar');
        }
    }
}

function calcularNoite() {
    let valorManha = document.querySelector('.rbc_manha').value;
    let valorNoite = document.querySelector('.rbc_noite').value;
    let desvio = ((valorNoite - valorManha) / valorManha) * 100 ;
    let porcentagem = desvio.toFixed(2);
    let botaoNoite = document.querySelector('.noite');
    let porcentagemNoite = (`(${porcentagem} %)`);
    let situacaoNoite = document.querySelector('.desvio_noite');
    validar = confirm(mensagemValidacao);
    if(validar == true){
        if(porcentagem > -1.5 && porcentagem < 1.5){ 
            document.querySelector('.desvio_noite').value = porcentagemNoite
            situacaoNoite.classList.remove('reprovado');
            situacaoNoite.classList.add('aprovado');
            botaoNoite.classList.add('ocultar');
        }else{
            document.querySelector('.desvio_noite').value = porcentagemNoite
            situacaoNoite.innerHTML = (`(${porcentagem} %)`);
            situacaoNoite.classList.remove('aprovado');
            situacaoNoite.classList.add('reprovado');
            botaoNoite.classList.add('ocultar');
        }
    }

}

function imprimir(){
    const gerarPdf = document.querySelector('.gerar_pdf');
    gerarPdf.classList.add('ocultar');
    print();
}