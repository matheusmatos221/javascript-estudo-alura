// Exporta as funções
// |Função recebe 'app' e retorna o que está entre '{}'|
module.exports = app => {
    // Exporta as funções para APP
    app.get('/', (req, res) => {
        res.send('Hello World')
    })
    
    app.get('/atendimentos', (req, res) => {
        res.send('Você está na rota de ATENDIMENTOS e está realizando um GET')
    })
}
