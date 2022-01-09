function calculadora() {
    const OPERADOR = Number(prompt("Escolha uma operação: \n 1 - Soma (+) \n 2 - Subtração (-) \n 3 - Multiplicação (*) \n 4 - Divisão Real (/) \n 5 - Divisão Inteira (%) \n 6 - Potenciação(**)"));

    if (!OPERADOR || OPERADOR < 0 || OPERADOR >= 7) {
        alert("Operação invalida!");
        calculadora();
    } else {

        let n1 = Number(prompt("Insira o primeiro numero: "));
        let n2 = Number(prompt("Insira o segundo numero: "));
        let resultado;

        if (!n1 | !n2) {
            alert("Parametros Invalidos!!!!!");
            calculadora();
        } else {

            function soma() {
                resultado = n1 + n2;
                alert(`O resultado de ${n1} + ${n2} = ${resultado}`);
                novaOperacao();

            }
            function subtracao() {
                resultado = n1 - n2;
                alert(`O resultado de ${n1} - ${n2} = ${resultado}`);
                novaOperacao();

            }
            function multiplicacao() {
                resultado = n1 * n2;
                alert(`O resultado de ${n1} * ${n2} = ${resultado}`);
                novaOperacao();

            }
            function divisao() {
                resultado = n1 / n2;
                alert(`O resultado de ${n1} / ${n2} = ${resultado}`);
                novaOperacao();

            }
            function resto() {
                resultado = n1 % n2;
                alert(`O resto de ${n1} / ${n2} = ${resultado}`);
                novaOperacao();

            }
            function potencia() {
                resultado = n1 ** n2;
                alert(`O resultado de ${n1} ** ${n2} = ${resultado}`);
                novaOperacao();

            }
            function novaOperacao() {
                let opcao = Number(prompt("Deseja fazer outra operação? \n1 - Sim \n2 - Não"));
                if (opcao == 1) {
                    calculadora();
                }
                else if (opcao == 2) {
                    alert("Tchau!")
                }
                else {
                    alert("Digite uma opção válida!")
                    novaOperacao();
                }
            }
        }
    }
    switch (OPERADOR) {
        case 1:
            soma();
            break;
        case 2:
            subtracao();
            break;
        case 3:
            multiplicacao();
            break;
        case 4:
            divisao();
            break;
        case 5:
            resto();
            break;
        case 6:
            potencia();
            break;
        default:
            alert("Operação invalida!")
            calculadora();


    }
}

calculadora();