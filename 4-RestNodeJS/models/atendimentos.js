// Importa o moment para manipular e formatar a data no formato do SQL
const moment = require('moment')

const axios = require('axios')
const atendimentos = require('../controllers/atendimentos')
// Importa a conexão, necessária para utilizar o BD
const conexao = require('../infraestrutura/database/conexao')

// Nova classe modelo
class Atendimento {
    // Função adiciona
    adiciona(atendimento, res) {

        const dataCriacao = moment().format('YYYY-MM-DD HH:MM:SS') // moment() = data atual
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
                res.status(201).json(atendimentoDatado)
                // console.log(`Novo atendimento criado com sucesso: ${JSON.stringify(atendimentoDatado)}`) //JSON.stringify transforma um objeto do tipo JSON em string, parse() faz o contrario
            }
        } 
        )}
    }
    lista(res){
        const sql = 'SELECT * FROM atendimentos'

        conexao.query(sql, (erro, resultados) => {
            if(erro) {
                res.status(400).json(erro)
            } else {
                res.status(200).json(resultados)
            }
        })
    }
    buscaPorId(id, res){
        const sql = `SELECT * FROM atendimentos WHERE id=${id}`
        
        // Função assincrona(async) faz com que seja executada no await e só depois o código continua a execução, isso garante que o que for declarado no await será executado "na hora"
        conexao.query(sql, async (erro, resultados) => {
            const atendimento = resultados[0]
            const cpf = atendimento.cliente

            if (erro) {
                res.status(400).json(erro)
            } else {
                // const cliente = await axios.get(`http://localhost:8082/${cpf}`)
                // Chamaremos de { data } para pegar a informação diretamente do objeto retornado
                const { data } = await axios.get(`http://localhost:8082/${cpf}`)
                atendimento.cliente = data
                res.status(200).json(atendimento)
            }
        })
    }
    altera(id, valores, res){
        if (valores.data){
            valores.data = moment(valores.data, 'DD/MM/YYYY').format('YYYY-MM-DD HH:MM:SS')
        }
        const sql = 'UPDATE atendimentos SET ? WHERE id=?'
        conexao.query(sql, [valores, id], (err, result) =>{
            if (err) {
                res.status(400).json(err)
            } else {
                res.status(200).json({id, ...valores})
            }
        })

    }
    deletaPorId(id, res){
        const sql = `DELETE FROM atendimentos WHERE id=${id}`
        conexao.query(sql, (erro, resultado) =>{
            if (erro) {
                res.status(400).json(erro)
            } else {
                res.status(200).json({id})
            }
        } )

    }
}

module.exports = new Atendimento