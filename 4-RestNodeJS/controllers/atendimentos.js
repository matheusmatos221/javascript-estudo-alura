// Exporta as funções
module.exports = app => {
    // Exporta as funções para APP
    app.get('/', (req, res) => {
        res.send('Hello World')
    })
    
    app.get('/atendimentos', (req, res) => {
        res.send('Você está na rota de ATENDIMENTOS e está realizando um GET')
    })
}
