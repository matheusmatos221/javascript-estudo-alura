// objeto cliente
const cliente = {
    nome:'Matheus',
    idade:25,
    cpf:'12332112321',
    email:'matheus@email.com',
    fones:['1232123123', '9139193193']
}

cliente.fones.forEach(fone => {
    console.log(fone)
});