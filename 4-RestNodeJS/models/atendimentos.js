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

        //Regra de negócio: Data é posterior a data de criação?
        const dataIsValid = moment(data).isSameOrAfter(dataCriacao) //Retorna booleano
        const clienteIsValid = atendimento.cliente.length >= 4 //Retorna booleano

        const validacoes = [
            {
                nome: 'data',
                valido: dataIsValid,
                mensagem: 'Data deve ser maior ou igual a data atual'
            },
            {
                nome: 'cliente',
                valido: clienteIsValid,
                mensagem: 'Data deve ser maior ou igual a data atual'
            }
        ]

        const erros = validacoes.filter(campo => !campo.valido)
        const existemErros = erros.length

        if (existemErros){
            res.status(400).json(erros)
        } else {
            // ...atendimento = Tudo que estiver dentro de atendimento
        const atendimentoDatado = {...atendimento, dataCriacao, data}

        // Código SQL que será executado na query
        const sql = 'INSERT INTO atendimentos SET ?'

        // A partir da conexão com o BD, executa a query SQL com os valores e a função callback é a resposta do SQL (Erro ou resultado).
        conexao.query(sql, atendimentoDatado, (erro, resultado) => {
            if (erro) {
                res.status(400).json(erro)
            } else {
                res.status(201).json(atendimento)
            }
        } 
        )}
    }
}

module.exports = new Atendimento