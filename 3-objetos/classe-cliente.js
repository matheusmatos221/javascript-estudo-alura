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

// Instancia um novo objeto da classe
const matheus = new Cliente('Matheus', 'matheus@email.com', 1232123, 100)
console.log(matheus)

// Invoca um método do objeto instanciado a partir dos métodos definidos na classe
matheus.depositaSaldo(100)
matheus.exibirSaldo()