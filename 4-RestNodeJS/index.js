// Responsabilidade: Iniciar o servidor

// Importa módulos
// "importa o express já configurado"
const customExpress = require('./config/custom-express')

// Instancia o 'app' a partir do módulo 'customExpress'
const app = customExpress()

app.listen(3000, () => {
    console.log(`Example app listening localhost 3000`)
})