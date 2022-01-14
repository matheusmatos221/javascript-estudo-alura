// fs = FileSystem
const fs = require('fs')
const path = require('path')

module.exports = (caminho, nomeDoArquivo, callbackImagemCriada) =>{
    const tipoArquivo = path.extname(caminho)
    const novoCaminho = `./assets/imagens/${nomeDoArquivo}${tipoArquivo}` // Caminho do diretório interpolado com nome do arquivo

    fs.createReadStream(caminho) // Lê o arquivo que está no caminho
        .pipe(fs.createWriteStream(novoCaminho)) // Escreve no novo caminho
        .on('finish', ()=> callbackImagemCriada(novoCaminho)) // Ao terminar, chama uma função callback a ser passada via parâmetro
}

