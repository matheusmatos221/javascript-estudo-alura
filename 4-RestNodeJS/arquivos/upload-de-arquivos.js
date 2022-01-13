// fs = FileSystem
const fs = require('fs')

fs.readFile('./assets/salsicha.jpg', (erro, buffer) => {
    if(erro) {
        console.error('ERRO');
    } else {
        console.log(buffer)
        fs.writeFile('./assets/salsicha-2.jpg', buffer, (erro) => {
            if(erro){
                console.error(erro);
            }
        })
    }
})

