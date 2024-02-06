let analista = prompt ('Digite seu nome:');
document.getElementById('nome').innerHTML = analista;

let matricula = prompt ('Digite seu ID:');
document.getElementById('id').innerHTML = matricula;

let filial = prompt ('Digite sua unidade:');
document.getElementById('unidade').innerHTML = filial;

let data = new Date();
console.log(data)

let dia = data.getDate();
dia = dia <10? "0" + dia : dia;

let mes = data.getMonth();
mes = mes <10? "0" + mes + 1 : mes + 1;

let ano = data.getFullYear();

let dataRealizacao = dia + '/' + mes + '/' + ano;
document.getElementById('data').innerHTML = dataRealizacao;

let zerar = document.getElementById('limpar');
function limpar() {
    document.getElementById('total');
    total.innerHTML = 0;
}
zerar.onclick=limpar;

let valorInferior = 'Valor de células inferior a 100, por favor reveja sua contagem.';
let valorSuperior = 'Valor de células superior a 100, por favor reveja sua contagem.';
let totalCelulas = document.getElementById('calcular');
function somar() {
    let cel1 = Number(document.getElementById('cel_1').value);
    let cel2 = Number(document.getElementById('cel_2').value);
    let cel3 = Number(document.getElementById('cel_3').value);
    let cel4 = Number(document.getElementById('cel_4').value);
    let cel5 = Number(document.getElementById('cel_5').value);
    let cel6 = Number(document.getElementById('cel_6').value);
    let cel7 = Number(document.getElementById('cel_7').value);
    let cel8 = Number(document.getElementById('cel_8').value);
    let cel9 = Number(document.getElementById('cel_9').value);
    let cel10 = Number(document.getElementById('cel_10').value);
    let cel11 = Number(document.getElementById('cel_11').value);
    let cel12 = Number(document.getElementById('cel_12').value);
    let cel13 = Number(document.getElementById('cel_13').value);
    let cel14 = Number(document.getElementById('cel_14').value);

    let soma = cel1 + cel2 + cel3 + cel4 + cel5 + cel6 + cel7 + cel8 + cel9 + cel10 + cel11 + cel12 + cel13 + cel14;
    document.getElementById('total').innerHTML = soma;

    if (soma < 100){
        alert(valorInferior);
    }else{
        if (soma > 100){
            alert(valorSuperior);
        }
    }

}
totalCelulas.onclick = somar;