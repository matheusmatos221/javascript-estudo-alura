// Responsabilidade: Configurar o servidor (Configuração do express)

// Importa módulos
const express = require('express')
const consign = require('consign')
const bodyParser = require('body-parser') // Necessário para receber informações do tipo body com verbo POST

module.exports = () => {
    // Instânciação dos módulos
    // "cria a variável 'app'"
    const app = express()

    // Pede para o app usar o bodyParser
    // 'use' é um método do próprio Express
    app.use(bodyParser.urlencoded({extended: true}))
    app.use(bodyParser.json())

    // Configura servidor
    // "configura a variável 'app' com o 'consign'"
    consign()
        // INCLUI todos os controles na pasta 'controllers'
        .include('controllers')
        // (ONDE?) No app
        .into(app)

    // retorna a variável 'app' configurada    
    return app
}