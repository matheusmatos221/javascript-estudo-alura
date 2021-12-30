const nomes = ['Matheus', 'Lara', 'Miguel', 'Rafael', 'Julia', 'Fernanda',
'Roberta', 'Michele', 'Lucas', 'Roberto', 'Henrique', 'Michel', 'Estevão', 'Lisa', 'Toby',
'Juan', 'Bernardo', 'Bruna', 'Camila'];

const sala1 = nomes.slice(0, nomes.length/2);
const sala2 = nomes.slice(nomes.length/2);

console.log(sala1);
console.log(sala2);

console.log(`A sala 1 tem ${sala1.length} alunos e os alunos da sala são:: ${sala1}`);
console.log(`A sala 2 tem ${sala2.length} alunos e os alunos da sala são:: ${sala2}`);