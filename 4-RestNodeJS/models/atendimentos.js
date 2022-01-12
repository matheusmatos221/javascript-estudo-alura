// Importa o moment para manipular e formatar a data no formato do SQL
const moment = require('moment')
// Importa a conexão, necessária para utilizar o BD
const conexao = require('../infraestrutura/conexao')

// Nova classe modelo
class Atendimento {
    // Função adiciona
    adiciona(atendimento) {

        const dataCriacao = moment().format('YYYY-MM-DD HH:MM:SS')
        const data = moment(atendimento.data, 'DD/MM/YYYY').format('YYYY-MM-DD HH:MM:SS')
        // ...atendimento = Tudo que estiver dentro de atendimento
        const atendimentoDatado = {...atendimento, dataCriacao, data}

        // Código SQL que será executado na query
        const sql = 'INSERT INTO atendimentos SET ?'

        // A partir da conexão com o BD, executa a query SQL com os valores e a função callback é a resposta do SQL (Erro ou resultado).
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