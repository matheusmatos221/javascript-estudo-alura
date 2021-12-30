 const listaDeChamada = ['Matheus', 'Lara', 'Miguel', 'Rafael', 'Julia', 'Fernanda',
'Roberta', 'Michele', 'Lucas', 'Henrique', 'Michel', 'Estevão', 'Lisa', 'Toby',
'Juan', 'Bernardo', 'Bruna', 'Camila'];

// Digamos que um aluno saiu da sala e outro aluno entrou na sala.
// Por exemplo, o aluno 'Roberto' não está mais na sala.

// Metodo .splice -> Retira x valores a partir do indice passado de um array e
// insere valores no lugar(opcional)

listaDeChamada.splice(2, 1, 'Rick')
// console.log(listaDeChamada)
console.log(listaDeChamada)

//Se quisermos inserir sem retirar nenhum valor:

listaDeChamada.splice(1, 0, 'Matheus2')
console.log(listaDeChamada)