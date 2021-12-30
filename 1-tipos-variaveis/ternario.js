const idadeMinima = 18;
const idadeCliente = 16;

// if clássico
/* if (idadeCliente >= idadeMinima){
    console.log('Pode beber cerveja')
}else{
    console.log('Só pode beber suco')
} */

// operador ternário
// [condição] ? [valor se verdadeiro] : [valor se falso]
console.log(idadeCliente >= idadeMinima ? 'cerveja': 'suco')