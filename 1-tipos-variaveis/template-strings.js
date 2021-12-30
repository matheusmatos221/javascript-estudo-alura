const nome = "Matheus";
const idade = 2021-1996;
const cidadeNascimento = "São Paulo";

// Uma forma de concatenar string
// const apresentacao = "Meu nome é " + nome + "Eu tenho " + idade + " anos" + " e nasci na cidade de " + cidadeNascimento;

// Template string:
/* const apresentacao = `Meu nome é ${nome},  eu tenho ${idade} anos e nasci na cidade ${cidadeNascimento}`;

console.log(apresentacao) */

//Template string com comparação ternaria:
const idadeMinima = 18;
const bebidaMenor = "Suco";
const bebidaMaior = "Cerveja";

const repr = `${nome} diz: Eu tenho ${idade} anos e portanto quero beber ${idade >= idadeMinima ? bebidaMaior : bebidaMenor}`

console.log(repr);