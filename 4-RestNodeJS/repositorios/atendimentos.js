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
    buscaPorId(id){
        const sql = `SELECT * FROM atendimentos WHERE id=?`
        return query(sql, id)
    }
    altera(valores, id){
        const sql = 'UPDATE atendimentos SET ? WHERE id=?'
        return query(sql, [valores, id])
    }
    deletaPorId(id){
        const sql = `DELETE FROM atendimentos WHERE id=?`
        return query(sql, id)
    }

}

module.exports = new Atendimento()