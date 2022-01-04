const alunos = ['Matheus', 'Miguel', 'Eduardo', 'Lucas']
const notasDosAlunos = [10, 5.4, 6.9, 9.8]

let alunosENotas = [alunos, notasDosAlunos]

const exibeNomeNota = (nomeDoAluno) => {
    if(alunosENotas[0].includes(nomeDoAluno)){
        let indice = alunosENotas[0].indexOf(nomeDoAluno)
        return alunosENotas[0][indice] + ' sua nota é: ' + alunosENotas[1][indice]
    } else {
        return 'Aluno não está cadastrado'
    }
}

console.log(exibeNomeNota("Matheus"))
