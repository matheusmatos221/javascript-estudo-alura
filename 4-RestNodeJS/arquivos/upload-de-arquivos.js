// fs = FileSystem
const fs = require('fs')
const path = require('path')

module.exports = (caminho, nomeDoArquivo, callbackImagemCriada) =>{
    const tiposValidos = ['jpg', 'png', 'jpeg']
    const tipoArquivo = path.extname(caminho)
    const tipoEhValido = tiposValidos.indexOf(tipoArquivo.substring(1)) // Retira o ponto do formato '.jpg' fica 'jpg'

    if(tipoEhValido === -1){
        console.error('Erro! Tipo inválido')
    } else {
        const novoCaminho = `./assets/imagens/${nomeDoArquivo}${tipoArquivo}` // Caminho do diretório interpolado com nome do arquivo
    
        fs.createReadStream(caminho) // Lê o arquivo que está no caminho
            .pipe(fs.createWriteStream(novoCaminho)) // Escreve no novo caminho
            .on('finish', ()=> callbackImagemCriada(novoCaminho)) // Ao terminar, chama uma função callback a ser passada via parâmetro
    }
}

