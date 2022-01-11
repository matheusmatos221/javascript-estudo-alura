// Importa o moment
const moment = require('moment')
// Importa a conexão
const conexao = require('../infraestrutura/conexao')

// Nova classe modelo
class Atendimento {

    // Função adiciona
    adiciona(atendimento) {
        //
        const dataCriacao = moment().format('YYYY-MM-DD HH:MM:SS')
        const data = moment(atendimento.data, 'DD/MM/YYYY').format('YYYY-MM-DD HH:MM:SS')
        const atendimentoDatado = {...atendimento, dataCriacao}
        // Código SQL que será executado na query
        const sql = 'INSERT INTO Atendimentos SET ?'
        // A partir da conexão com o BD, executa uma query passando o código SQL
        // os valores e a função callback
        conexao.query(sql, atendimentoDatado, (erro, resultado) => {
            if (erro) {
                console.error(erro);
            } else {
                console.log(resultado)
            }
        } )

    }
}

module.exports = new Atendimento