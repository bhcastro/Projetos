let calculo = document.querySelector('.calc__eritro');

function calcular(){

    let leucocitos = document.getElementById('valor__leuco').value;
    
    if (leucocitos.length == 0) {
        alert('Digite o valor de Leucócitos!');        
    }
    console.log(`Leuco: ${leucocitos}`);

    let eritroblastos = document.getElementById('valor__ret').value;
    
    if (eritroblastos.length == 0) {
        alert('Digite o valor de Eritroblastos!');        
    }
    console.log(`Eritro: ${eritroblastos}`);

    let leucocitosTotais = Number(leucocitos) * 100;
    console.log(leucocitosTotais);

    let eritroblastosTotais = Number(eritroblastos) + 100;
    console.log(eritroblastosTotais);

    let leucocitosCorrigidos = leucocitosTotais / eritroblastosTotais;
    console.log(`Leucos corrigidos ${leucocitosCorrigidos}`);

    document.querySelector('.leuco__corrigido').value = leucocitosCorrigidos.toFixed(3);

}
calculo.onclick = calcular;