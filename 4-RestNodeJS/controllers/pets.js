const Pet = require('../models/pets')

// Exporta rotas para o app
module.exports = app => {
    app.get('/pets', (req, res) => {
        res.status(200).send('ok')
    })

    app.post('/pets', (req, res) => {
        const pet = req.body
        
        Pet.adiciona(pet, res)
    })
}