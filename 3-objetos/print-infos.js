const cliente = {
    nome:'Matheus',
    idade:25,
    cpf:'12332112312',
    email:'teste@email.com'
}

console.log(`Meu nome é: ${cliente.nome}, eu tenho ${cliente.idade} anos.`)

console.log(`Os primeiros 3 digitos do CPF: ${cliente.cpf.substring(0, 3)}`)