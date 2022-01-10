// objeto cliente
const cliente = {
    nome:'Matheus',
    idade:25,
    cpf:'12332112321',
    email:'matheus@email.com',
    fones:['1232123123', '9139193193'],
    dependentes:[{
        nome:'Sara Silva',
        parentesco:'filha',
        dataNasc:'20/02/2010'
    }]
}
// Adiciona
cliente.dependentes.push({
    nome:'Samia Samarino',
    parentesco:'filha',
    dataNasc:'10/12/2019'})

console.log(cliente)

const filhaMaisNova = cliente.dependentes.filter(dependente => dependente.dataNasc==='20/02/2010')
console.log(filhaMaisNova[0].nome)
console.log(filhaMaisNova)