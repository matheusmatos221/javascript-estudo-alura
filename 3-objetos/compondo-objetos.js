// objeto cliente
const cliente = {
    nome:'Matheus',
    idade:25,
    cpf:'12332112321',
    email:'matheus@email.com',
    fones:['1232123123', '9139193193']
}

// Objeto dentro de um outro objeto
cliente.dependentes = {
    nome:'Sara',
    parentesco:'Filha',
    dataNasc:'20/02/2010'
}
console.log(cliente)

// Fazer alteração dentro do objeto que está dentro do objeto
cliente.dependentes.nome = 'Sara Silva'
console.log(cliente)
