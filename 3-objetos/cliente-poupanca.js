// Define uma função 'Cliente'
function Cliente(nome, cpf, email, saldo) {
    this.nome = nome    
    this.cpf = cpf    
    this.email = email    
    this.saldo = saldo    
    this.depositar = function(valor){
        this.saldo += valor
    }    
}

// Define uma função 'ClientePoupanca' que herda propriedades características da função 'Cliente'
function ClientePoupanca(nome, cpf, email, saldo, saldoPoup) {
    Cliente.call(this, nome, cpf, email, saldo)   
    this.saldoPoup = saldoPoup
}

// Cria uma nova instância de 'ClientePoupanca'
const matheus = new ClientePoupanca('Matheus', '12321231', 'abce@email.com', 100, 200)

// Adiciona uma nova propriedade ao protótipo 'ClientePoupança' - Neste caso adiciona uma função/método
ClientePoupanca.prototype.depositarPoup = function(valor){
    this.saldoPoup += valor
}

matheus.depositarPoup(100)
console.log(matheus.saldoPoup)