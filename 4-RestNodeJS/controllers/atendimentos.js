// Importa modelo de atendimento
const Atendimento = require('../models/atendimentos')

// Exporta as funções
// |Função recebe 'app' e retorna o que está entre '{}'|
module.exports = app => {
    // Exporta as funções para APP    
    app.get('/atendimentos', (req, res) => {
        Atendimento.lista() // Lista atendimentos cadastrados
            .then(resultados => res.status(200).json(resultados))
            .catch(erros => res.status(400).json(400))
    })
    
    app.get('/atendimentos/:id', (req, res) => {
        const id = parseInt(req.params.id)
        Atendimento.buscaPorId(id) // Lista atendimento específico
            .then(atendimento => res.status(200).json(atendimento))
            .catch(erros => res.status(400).json(erros))
    })
    
    app.post('/atendimentos', (req, res) => {
        const atendimento = req.body
        Atendimento.adiciona(atendimento) // A resposta é enviada aqui! Não enviar de novo com console.log(res)
            .then(atendimentoCadastrado => res.status(201).json(atendimentoCadastrado))
            .catch(erros => res.status(400).json(erros))
    })
    
    app.patch('/atendimentos/:id', (req, res) => {
        const id = parseInt(req.params.id)
        const valores = req.body
        Atendimento.altera(id, valores)
            .then(resultado => res.status(200).json(resultado))
            .catch(erros => res.status(400).json(erros))
    })
    
    app.delete('/atendimentos/:id', (req, res) => {
        const id = parseInt(req.params.id)
        Atendimento.deletaPorId(id, res)
    })
}
