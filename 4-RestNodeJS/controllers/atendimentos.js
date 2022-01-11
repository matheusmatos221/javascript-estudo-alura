// Exporta as funções
// |Função recebe 'app' e retorna o que está entre '{}'|

const Atendimento = require('../models/atendimentos')

module.exports = app => {
    // Exporta as funções para APP    
    app.get('/atendimentos', (req, res) => {
        res.send('Você está na rota de ATENDIMENTOS e está realizando um GET')
    })
    
    app.post('/atendimentos', (req, res) => {
        const atendimento = req.body
        Atendimento.adiciona(atendimento)
        // console.log(req.body)
        res.send('Você está na rota de ATENDIMENTOS e está realizando um POST')
    })
}
