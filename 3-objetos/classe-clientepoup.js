// Cria uma nova classe chamada 'Cliente'
class Cliente{
    // Define o construtor da classe
    constructor(nome, email, cpf, saldo){
        this.nome = nome
        this.email = email
        this.cpf = cpf
        this.saldo = saldo
    }
    // Define um método para a classe
    depositaSaldo(valor){
        this.saldo += valor
        console.log(`${this.nome}, você acabou de depositar: ${valor}`)
    }
    
    // Define um método para a classe
    exibirSaldo(){
        console.log(`${this.nome}, seu saldo é: ${this.saldo}`)
    }
}

// Cria uma nova classe 'ClientePoup' que herda propriedades da classe 'Cliente'
class ClientePoup extends Cliente{
    // Define o construtor
    constructor(nome, email, cpf, saldo, saldoPoup){
        // Herança do construtor da classe super
        super(nome, email, cpf, saldo)
        // Adiciona ao construtor da classe atual
        this.saldoPoup = saldoPoup
    }

    depositarPoup(valor){
        this.saldoPoup += valor
        console.log(`${this.nome}, você depositou: ${valor} na poupança`)
    }
}

// CONSOLE
const matheus = new ClientePoup('Matheus', 'email@email.com', 12323121, 1000, 200)
console.log(matheus)

matheus.depositaSaldo(100)
matheus.depositarPoup(20)