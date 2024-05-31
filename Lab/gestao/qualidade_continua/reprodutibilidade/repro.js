let rbcTarde = document.querySelector('.rbc_tarde').value;
function calcularTarde() {
    let valorManha = document.querySelector('.rbc_manha').value;
    let valorTarde = document.querySelector('.rbc_tarde').value;
    let desvio = ((valorTarde - valorManha) / valorManha) * 100 ;
    let situacao = desvio.toFixed(2);
    if(situacao > 15){
    document.querySelector('.span_tarde').innerHTML = (`(${situacao} %)`);
    }else{
        document.querySelector('.span_tarde').innerHTML = (`(${situacao} %)`);
    }
}

function calcularNoite() {
    let valorManha = document.querySelector('.rbc_manha').value;
    let valorNoite = document.querySelector('.rbc_noite').value;
    let desvio = ((valorNoite - valorManha) / valorManha) * 100 ;
    let situacao = desvio.toFixed(2);
    if(situacao > 15){
        document.querySelector('.span_noite').innerHTML = (`(${situacao} %)`);
        }else{
            document.querySelector('.span_noite').innerHTML = (`(${situacao} %)`);
        }
}