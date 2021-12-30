function soma(num1, num2){
    // retorna valor da soma de 'a' + 'b'
    return num1 + num2;
}

// console.log(soma(2, 5))

function nomeIdade(nome, idade){
    return `Meu nome é ${nome} e minha idade é ${idade}`;
}

//console.log(nomeIdade("Matheus", 25))

function multiplica(num1 = 1, num2 = 1){
    return num1 * num2;
}

//console.log(multiplica(soma(2, 3), soma(2, 0)))

console.log(multiplica(soma(4, 5)))
