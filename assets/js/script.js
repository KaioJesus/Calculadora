function criaCalculadora(){
    return {
        display: document.querySelector('.display'),
        btnClear: document.querySelector('.clear'),

        inicia(){
            this.cliqueBotoes();
            this.pressionaBackSpace();
            this.pressionaEnter();
        },

        pressionaEnter(){
            this.display.addEventListener('keyup', (e) => {
                if(e.keyCode === 13){
                    this.realizaConta();
                }
            });
        },

        pressionaBackSpace() {
            this.display.addEventListener('keydown', e => {
              if (e.keyCode === 8) {
                e.preventDefault();
                this.clearDisplay();
              }
            });
          },

        realizaConta(){
            let conta = this.display.value;

            try{
                conta = eval(conta);
                if(!conta){
                    alert('Conta inválida');
                    return;
                }

                this.display.value = conta;

            } catch(error){
                alert('Conta inválida');
            }
        },

        clearDisplay(){
            this.display.value = '';
        },

        apagaUm(){
            this.display.value = this.display.value.slice(0, -1); //apaga o último
        },


        cliqueBotoes(){
            document.addEventListener('click', (e) => {
                const element = e.target;

                if(element.classList.contains('botao__numeros') || element.classList.contains('botao__operadores')) {
                    this.btnParaDisplay(element.innerText); //Então sempre que eu quero referenciar uma chave do meu objeto dentro do objeto eu preciso da palavrinha this
                }

                if(element.classList.contains('clear')){
                    this.clearDisplay();
                }

                if(element.classList.contains('igual')){
                    this.realizaConta();
                }

                this.display.focus();
            });
        },

        btnParaDisplay(valor){
            this.display.value += valor;
            console.log(valor);
        }

    };
}

const calculadora = criaCalculadora();
calculadora.inicia();