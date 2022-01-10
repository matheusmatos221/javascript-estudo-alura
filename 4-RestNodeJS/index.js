const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('Hello World')
})

app.get('/atendimentos', (req, res) => {
    res.send('Você está na rota de ATENDIMENTOS e está realizando um GETgi')
})

app.listen(port, () => {
    console.log(`Example app listening localhost ${port}`)
})