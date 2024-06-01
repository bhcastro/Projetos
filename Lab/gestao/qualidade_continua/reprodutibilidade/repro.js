function calcularTarde() {
    let valorManha = document.querySelector('.rbc_manha').value;
    let valorTarde = document.querySelector('.rbc_tarde').value;
    let desvio = ((valorTarde - valorManha) / valorManha) * 100 ;
    let situacao = desvio.toFixed(2);
    if(situacao > 15){
        const situacaoTarde = document.querySelector('.span_tarde');
        situacaoTarde.innerHTML = (`(${situacao} %)`);
        situacaoTarde.classList.add('.aprovado');
    }else{
        const situacaoTarde = document.querySelector('.span_tarde');
        situacaoTarde.innerHTML = (`(${situacao} %)`);
        situacaoTarde.classList.add('.reprovado');
    }
}

function calcularNoite() {
    let valorManha = document.querySelector('.rbc_manha').value;
    let valorNoite = document.querySelector('.rbc_noite').value;
    let desvio = ((valorNoite - valorManha) / valorManha) * 100 ;
    let situacao = desvio.toFixed(2);
    if(situacao > 15){
        const situacaoNoite = document.querySelector('.span_tarde');
        situacaoNoite.innerHTML = (`(${situacao} %)`);
        situacaoNoite.classList.add('.aprovado');
    }else{
        const situacaoNoite = document.querySelector('.span_tarde');
        situacaoNoite.innerHTML = (`(${situacao} %)`);
        situacaoNoite.classList.add('.reprovado');
    }
}