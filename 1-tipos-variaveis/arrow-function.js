const apresentaNome = nome => `Meu nome é ${nome}`;
const soma = (num1, num2) => num1 + num2;

const somaNumerosPequenos = (num1, num2) => {
    if (num1 || num2 > 10){
        return `somente números menores que 10`;
    } else{
        return num1 + num2;  
    }
}