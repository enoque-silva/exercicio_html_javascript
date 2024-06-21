
const formulario = document.querySelector('form')


function validador(a, b){
    return (b > a)
}

function comparador(evento){
    evento.preventDefault();

    const campoA = document.getElementById('campoA');
    const campoB = document.getElementById('campoB');

    const numA = Number(campoA.value);
    const numB = Number(campoB.value);   
    
    eValido = validador(numA, numB);

    const mensagem = document.querySelector('.mensagem');

    const msgSucesso = `<b>Válido!</b> B: <b>${numB}</b> é maior que A: <b>${numA}</b>.`
    const msgFalha = '<b>Inválido!</b> <b>B</b> precisa ser maior que <b>A</b>.'

    if(eValido){
        mensagem.style.color = '#008000';
        mensagem.innerHTML = msgSucesso;
    } else {
        mensagem.style.color = '#8B0000';
        mensagem.innerHTML = msgFalha; 
    }

    console.log(mensagem)

    campoA.value = ''
    campoB.value = ''

}

formulario.addEventListener('submit', comparador);






