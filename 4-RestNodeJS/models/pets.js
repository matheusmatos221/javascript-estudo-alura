const conexao = require('../infraestrutura/conexao')
const uploadDeArquivo = require('../arquivos/upload-de-arquivos')


class Pet{
    adiciona(pet, res){
        const sql = 'INSERT INTO pets SET ?'

        uploadDeArquivo(pet.imagem, pet.nome, (novoCaminho) => {
            const novoPet = {nome: pet.nome, imagem:novoCaminho}
            
            conexao.query(sql, novoPet, (erro, resultado)=>{
                if(erro){
                    console.error(erro)
                    res.status(400).json(erro)
                } else {
                    res.status(200).json(novoPet)
                }
            }) 
        })
    }
}

module.exports = new Pet()