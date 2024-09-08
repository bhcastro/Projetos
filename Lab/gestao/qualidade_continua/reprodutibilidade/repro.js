    const hbManha1 = Number(document.getElementById('hb__manha__1').value);
    const hbTarde1 = Number(document.getElementById('hb__tarde__1').value);
    const hbNoite1 = document.getElementById('hb__noite__1');
    const outputHbTarde1 = document.getElementById('output__hb__tarde__1');

function calcular(manha, tarde) {
    let desvio = ((tarde - manha) / manha) * 100 ;
    desvio = desvio.toFixed(2);
    console.log(`${desvio}%`);
    mostrarValor(outputHbTarde1, desvio);
}

function mostrarValor(output, valor){
    output.value = `${valor}%`;
}