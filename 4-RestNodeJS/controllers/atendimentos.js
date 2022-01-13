// Importa modelo de atendimento
const Atendimento = require('../models/atendimentos')

// Exporta as funções
// |Função recebe 'app' e retorna o que está entre '{}'|
module.exports = app => {
    // Exporta as funções para APP    
    app.get('/atendimentos', (req, res) => {
        res.send('Você está na rota de ATENDIMENTOS e está realizando um GET')
    })
    
    app.post('/atendimentos', (req, res) => {
        const atendimento = req.body
        Atendimento.adiciona(atendimento, res) // A resposta é enviada aqui! Não enviar de novo com console.log(res)
    })
}
