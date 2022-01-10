// Importa módulos
const express = require('express')
const consign = require('consign')

// Instânciação dos módulos
const app = express()
const port = 3000

app.listen(port, () => {
    console.log(`Example app listening localhost ${port}`)
})