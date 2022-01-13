// Responsabilidade: Iniciar o servidor

// Define uma variavel para declarar a porta
const port = 3000

// Importa módulos
// "importa o express já configurado"
const customExpress = require('./config/custom-express')

// Conexao com banco de dados (Persistent)
const conexao = require('./infraestrutura/conexao')
const Tabelas = require('./infraestrutura/tabelas')

console.log('|-----------------------------------------------------------------|')
console.log(`|*********  APP -  Example app listening localhost ${port}  *********|`)
console.log('|-----------------------------------------------------------------|')

conexao.connect((erro) => {
    console.log(`Conectando com banco de dados...`)
    if(erro) {
        // Erro de conexao
        console.log(`Falha de conexão com Banco de Dados!`)
        console.error(erro)
    } else {
        console.log(`Conexão com Banco de Dados OK!`)
        Tabelas.init(conexao)

        // Instancia o 'app' a partir do módulo 'customExpress'
        const app = customExpress()
        app.listen(port, () => {
        })
    }
} )
