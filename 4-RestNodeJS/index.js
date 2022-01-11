// Responsabilidade: Iniciar o servidor

// Define uma variavel para declarar a porta
const port = 3000

// Importa módulos
// "importa o express já configurado"
const customExpress = require('./config/custom-express')

// Conexao com banco de dados (Persistent)
const conexao = require('./infraestrutura/conexao')

conexao.connect(erro => {
    console.log(`Tentando conexão com banco de dados...`)
    if(erro) {
        // Erro de conexao
        console.error(erro)
    } else {
        console.log(`BD conectado com sucesso!`)
        // Instancia o 'app' a partir do módulo 'customExpress'
        const app = customExpress()
        app.listen(port, () => {
            console.log(`***APP - |Example app listening localhost ${port}|***`)
        })
    }
} )
