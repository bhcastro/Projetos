function calcularTarde() {
    let valorManha = document.querySelector('.rbc_manha').value;
    let valorTarde = document.querySelector('.rbc_tarde').value;
    let desvio = ((valorTarde - valorManha) / valorManha) * 100 ;
    let porcentagem = desvio.toFixed(2);
    const situacaoTarde = document.querySelector('.span_tarde');
    if(porcentagem < 1.5){
        situacaoTarde.innerHTML = (`(${porcentagem} %)`);
        situacaoTarde.classList.remove('reprovado');
        situacaoTarde.classList.add('aprovado');
    }else{
        situacaoTarde.innerHTML = (`(${porcentagem} %)`);
        situacaoTarde.classList.remove('aprovado');
        situacaoTarde.classList.add('reprovado');
    }
}

function calcularNoite() {
    let valorManha = document.querySelector('.rbc_manha').value;
    let valorNoite = document.querySelector('.rbc_noite').value;
    let desvio = ((valorNoite - valorManha) / valorManha) * 100 ;
    let porcentagem = desvio.toFixed(2);
    const situacaoNoite = document.querySelector('.span_noite');
    if(porcentagem < 1.5){ 
        situacaoNoite.innerHTML = (`(${porcentagem} %)`);
        situacaoNoite.classList.remove('reprovado');
        situacaoNoite.classList.add('aprovado');
    }else{
        situacaoNoite.innerHTML = (`(${porcentagem} %)`);
        situacaoNoite.classList.remove('aprovado');
        situacaoNoite.classList.add('reprovado');
    }
}