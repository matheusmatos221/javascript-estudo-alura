// objeto cliente
const cliente = {
    nome:'Matheus',
    idade:25,
    cpf:'12332112321',
    email:'matheus@email.com'
}
console.log(cliente)

// Adiciona um campo ao objeto
cliente.fone = '9876542123'
console.log(cliente)
// Altera o valor de um campo do objeto
cliente.fone = '99999999999'
console.log(cliente)
// Deleta um campo do objeto
delete cliente.fone
console.log(cliente)
