let calculo = document.querySelector('.calc__eritro');

function calcular(){

let leucocitos = Number(document.getElementById('valor__leuco').value);
console.log(`Leuco: ${leucocitos}`);

let eritroblastos = Number(document.getElementById('valor__ret').value);
console.log(`Eritro: ${eritroblastos}`);

let leucocitosTotais = leucocitos * 100;
console.log(leucocitosTotais);

let eritroblastosTotais = eritroblastos + 100;
console.log(eritroblastosTotais);

 let leucocitosCorrigidos = leucocitosTotais / eritroblastosTotais;
console.log(leucocitosCorrigidos);

document.querySelector('.leuco__corrigido').innerHTML = leucocitosCorrigidos;

}
calculo.onclick = calcular;

