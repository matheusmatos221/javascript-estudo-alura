// Importa o moment para manipular e formatar a data no formato do SQL
const moment = require('moment')
const axios = require('axios')
const atendimentos = require('../controllers/atendimentos')
// Importa a conexão, necessária para utilizar o BD
const conexao = require('../infraestrutura/database/conexao')
//Importa o repositório
const repositorio = require('../repositorios/atendimentos')

// Nova classe modelo
class Atendimento {
    constructor() {
        //Regra de negócio: Data é posterior a data de criação?
        this.dataIsValid = ({data, dataCriacao}) => moment(data).isSameOrAfter(dataCriacao) //Retorna booleano
        this.clienteIsValid = ({tamanho}) => tamanho >= 10 //Retorna booleano

        this.valida = (parametrosValidacoes) => {
            this.validacoes.filter(campo => {
                const {nome} = campo
                const parametro = parametrosValidacoes[nome]

                return !campo.valido(parametro)
            })
        }

        this.validacoes = [
            {
                nome: 'data',
                valido: this.dataIsValid,
                mensagem: 'Data deve ser maior ou igual a data atual'
            },
            {
                nome: 'cliente',
                valido: this.clienteIsValid,
                mensagem: 'Data deve ser maior ou igual a data atual'
            }
        ]
    }

    // Função adiciona
    adiciona(atendimento) {

        const dataCriacao = moment().format('YYYY-MM-DD HH:MM:SS') // moment() = data atual
        const data = moment(atendimento.data, 'DD/MM/YYYY').format('YYYY-MM-DD HH:MM:SS')

        const parametrosValidacoes = {
            data: {data, dataCriacao},
            cliente: { tamanho: atendimento.cliente.lenght}
        }

        const erros = this.valida(parametrosValidacoes)
        const existemErros = erros.length

        if (existemErros){
            return new Promise((resolve, reject) => reject(erros))
        } else {
            // ...atendimento = Tudo que estiver dentro de atendimento
        const atendimentoDatado = {...atendimento, dataCriacao, data}
        
        return repositorio.adiciona(atendimentoDatado)
            .then((resultados) => {
                const id = resultados.insertId
                return ({...atendimento, id})
            })}
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