// objeto cliente
const cliente = {
    nome:'Matheus',
    idade:25,
    cpf:'12332112321',
    email:'matheus@email.com',
    fones:['1232123123', '9139193193'],
    dependentes:[
        {
        nome:'Sara Silva',
        parentesco:'filha',
        dataNasc:'20/02/2010'
        },
        {
        nome:'Samia Maria',
        parentesco:'filha',
        dataNasc:'04/06/2014'
        }
    ],
    saldo:100,
    depositar:function(valor) {
        this.saldo += valor
        console.log(`Você depositou ${valor} e o seu saldo atual é ${this.saldo}`)
    }

}

// Tras todas as chaves do objeto
// const propsClientes = Object.keys(cliente);

// console.log(propsClientes)

function oferecerSeguro(obj) {
    const propsClientes = Object.keys(obj);
    if (propsClientes.includes('dependentes'))
    {
        console.log(`Oferta de seguro de vida para ${obj.nome}`)
    }
    
}

oferecerSeguro(cliente)