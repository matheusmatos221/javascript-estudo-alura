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
    lista(){
        return repositorio.lista()
    }
    buscaPorId(id){
        return repositorio.buscaPorId(id)
            .then(resultados => {
                const atendimento = resultados[0]
                const cpf = atendimento.cliente
                const { data } = axios.get(`http://localhost:8082/${cpf}`)
                atendimento.cliente = data
                return ({atendimento})
            })
    }
    altera(id, valores){
        // Se houver informação de data, formata a data
        if (valores.data){
            valores.data = moment(valores.data, 'DD/MM/YYYY').format('YYYY-MM-DD HH:MM:SS')
        }
        return repositorio.altera(valores, id)
            .then( resultados => {
                return ({id, ...valores})
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