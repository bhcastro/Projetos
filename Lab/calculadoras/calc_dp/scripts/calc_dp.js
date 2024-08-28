const inputValores = document.getElementById('input__valores');
const valoresMedia = [9,10,11,13];
const valoresIntervalo = [];
const outputMedia = document.getElementById('output__media');
const outputDesvio = document.getElementById('output__desvio');
let media = 0;


function pegarValores() {
    let valorInput = Number(inputValores.value);
    valoresMedia.push(valorInput);
    calcularMedia();
    inputValores.value = "";
    inputValores.focus();
}

function calcularMedia() {
    let valorMedia = 0;
    for (let i = 0; i < valoresMedia.length; i++) {
        valorMedia += valoresMedia[i];
    }
    let media = valorMedia / valoresMedia.length;
    media = media.toFixed(2);
    mostrarValores(outputMedia, media);
    calcularIntervalos(media);
}

function calcularIntervalos(valorM) {
    for (let i = 0; i < valoresMedia.length; i++) {
        intervalo = 0;
        let intervaloQuadrado = 0;
        intervalo = valoresMedia[i] - valorM;
        // intervaloQuadrado = intervalo * intervalo;
        // valoresIntervalo.push(intervaloQuadrado);
    }
    console.log(`Intervalo: ${intervalo}`);
    
    
    //calcularDesvio();
}

// function calcularDesvio() {
//     let raizDesvio = 0;
//     let totalIntervalo = 0;
//     let desvio = 0;
//     for (let i = 0; i < valoresIntervalo.length; i++) {
//         totalIntervalo += valoresIntervalo[i];
//     }
//     desvio = totalIntervalo / valoresMedia.length;
//     raizDesvio = Math.sqrt(desvio);
//     raizDesvio = raizDesvio.toFixed(2);
//     mostrarValores(outputDesvio, raizDesvio);

    
    // console.log(`Total do intervalo: ${totalIntervalo}`);
    // console.log(`Total do desvio: ${desvio}`);
    // console.log(`Lista de intervalos: ${valoresIntervalo}`);
//}

function mostrarValores(output, valor) {
    output.value = valor;
}