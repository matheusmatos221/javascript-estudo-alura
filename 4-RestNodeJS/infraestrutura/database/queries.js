const { param } = require('express/lib/request')
const { promise } = require('./conexao')
const conexao = require('./conexao')

const executaQuery = (query, parametros = '') =>{
    return new Promise((resolve, reject) => {
        conexao.query(query, parametros, (erros, resultados, campos) => {
            if (!erros) {
                resolve(resultados)
            } else {
                reject(erros)
            }
        })
    })
}

module.exports = executaQuery