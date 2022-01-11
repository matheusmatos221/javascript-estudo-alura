// Responsabilidade: Iniciar o servidor

// Define uma variavel para declarar a porta
const port = 3000

// Importa módulos
// "importa o express já configurado"
const customExpress = require('./config/custom-express')

// Instancia o 'app' a partir do módulo 'customExpress'
const app = customExpress()

app.listen(port, () => {
    console.log(`Example app listening localhost ${port}`)
})