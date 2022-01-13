// fs = FileSystem
const fs = require('fs')

fs.createReadStream('./assets/salsicha.jpg')
    .pipe(fs.createWriteStream('./assets/salsicha-stream.jpg'))
    .on('finish', ()=> console.log('Imagem escrita com sucesso'))
