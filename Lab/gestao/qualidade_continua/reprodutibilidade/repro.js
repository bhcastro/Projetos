function calcularTarde() {
    let valorManha = document.querySelector('.rbc_manha').value;
    let valorTarde = document.querySelector('.rbc_tarde').value;
    let desvio = ((valorTarde - valorManha) / valorManha) * 100 ;
    let situacao = desvio.toFixed(2);
    const situacaoTarde = document.querySelector('.span_tarde');
    if(situacao < 1.5){
        situacaoTarde.innerHTML = (`(${situacao} %)`);
  situacaoTarde.classList.add('aprovado');
    }else{
        situacaoTarde.innerHTML = (`(${situacao} %)`);
        situacaoTarde.classList.add('reprovado');
    }
}

function calcularNoite() {
    let valorManha = document.querySelector('.rbc_manha').value;
    let valorNoite = document.querySelector('.rbc_noite').value;
    let desvio = ((valorNoite - valorManha) / valorManha) * 100 ;
    let situacao = desvio.toFixed(2);
    const situacaoNoite = document.querySelector('.span_noite');
    if(situacao < 1.5){ 
        situacaoNoite.innerHTML = (`(${situacao} %)`);
        situacaoNoite.classList.add('aprovado');
    }else{
        const situacaoNoite = document.querySelector('.span_noite');
        situacaoNoite.innerHTML = (`(${situacao} %)`);
        situacaoNoite.classList.add('reprovado');
    }
}