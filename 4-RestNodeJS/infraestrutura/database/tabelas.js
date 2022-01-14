class Tabelas {
    init(conexao) {
        this.conexao = conexao
        console.log(`Verificando estrutura de tabelas:`)
        this.criarAtendimentos()
        this.criarPets()
    }

    criarAtendimentos(){
        const sql = 'CREATE TABLE IF NOT EXISTS Atendimentos (id int NOT NULL AUTO_INCREMENT, cliente varchar(11) NOT NULL, pet varchar(20), servico varchar(20) NOT NULL,data datetime NOT NULL, dataCriacao datetime NOT NULL, status varchar(20) NOT NULL, observacoes text, PRIMARY KEY(id))'

        this.conexao.query(sql, erro => {
            if (erro){
                console.error(erro);
            } else {
                console.log(`Tabela Atendimentos OK!`)
            }
        })
    }
    criarPets(){
        const sql = 'CREATE TABLE IF NOT EXISTS Pets (id int NOT NULL AUTO_INCREMENT, nome varchar(50), imagem varchar(200), PRIMARY KEY(id))'

        this.conexao.query(sql, (erro, resultado) =>{
            if(erro){
                console.error(erro);
            } else {
                console.log('Tabela Pets OK!')
            }
        })
    }

}

module.exports = new Tabelas