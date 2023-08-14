const operacaoAnterior = document.querySelector('.operacao-anterior');
const operacaoAtual = document.querySelector('.operacao-atual');

const botoes = document.querySelectorAll('.botoes');

botoes.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        const element = e.target;

        if(element.classList.contains('botao__numeros')) {
            mostraNoDiplay();
        }
    })

})

