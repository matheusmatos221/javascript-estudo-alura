const conexao = require('../infraestrutura/database/conexao')
const uploadDeArquivo = require('../infraestrutura/arquivos/upload-de-arquivos')


class Pet{
    adiciona(pet, res){
        const sql = 'INSERT INTO pets SET ?'

        uploadDeArquivo(pet.imagem, pet.nome, (erro, novoCaminho) => {
            if(erro){
                res.status(400).json({erro})
            } else {
                const novoPet = {nome: pet.nome, imagem:novoCaminho}
                
                conexao.query(sql, novoPet, (erro, resultado)=>{
                    if(erro){
                        console.error(erro)
                        res.status(400).json(erro)
                    } else {
                        res.status(200).json(novoPet)
                    }
                })        
            }
        })

    }
}

module.exports = new Pet()