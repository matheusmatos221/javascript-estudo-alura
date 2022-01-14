const query = require('../infraestrutura/database/queries')

class Atendimento {
    adiciona(atendimento) {
        // Código SQL que será executado na query
        const sql = 'INSERT INTO atendimentos SET ?'
        return query(sql, atendimento)
    }

    lista() {
        // Código SQL que será executado na query
        const sql = 'SELECT * FROM atendimentos'
        return query(sql)

    }
}

module.exports = new Atendimento()