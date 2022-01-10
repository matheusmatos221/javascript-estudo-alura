const cliente = {
    nome:'Matheus',
    idade:25,
    cpf:'12332112321',
    email:'matheus@email.com'
}

const chaves = ['nome', 'idade', 'cpf', 'email']

// pode acessar o valor pegando pela chave
/* console.log(cliente['nome'])
console.log(cliente[chaves[0]]) */

chaves.forEach(element => {
    console.log(`${element}: ${cliente[element]}`)
});