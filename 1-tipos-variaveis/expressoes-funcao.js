/* // Forma classica de declarar uma função
function minhaFuncao(){
    // bloco de código
}

minhaFuncao();
 */
console.log(somaDois(2, 2))
function somaDois(num1, num2){
    return num1 + num2;
}

// Expressao de função

console.log(soma(1, 2))
const soma = function(num1, num2) {return num1 + num2};

// expressão de função não pode ser "chamada" antes da declaração da variável
// pois a sua declaração está atrelada à construção da variável,
// no caso da declaração "direta" ou clássica
