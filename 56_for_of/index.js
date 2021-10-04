//            01234
const nome = 'David Neres';
const arr = ['a', 'be', 'ce']
const pessoa = {
  nome: 'David',
  sobrenome: 'Neres',
  idade: 18
}
for(let key in pessoa){
  console.log(key, ':', pessoa[key]); //--> retorna nome : David e assim por diante
}
// for (let i = 0; i < nome.length; i++) {
//   console.log(nome[i]);
// }
for(let i in arr){
  console.log(arr[i]); //--> retorna o valor do array naquela posição
  console.log('######');
  console.log(i); //--> retorna o index do array
}
console.log('-----------------------');
for(let valor of arr){
  console.log(valor); //--> retorna o VALOR do array
  console.log(arr); //--> retorna o array inteiro
}


/*
  o for of seria igual os FORs antigos
  mas oque muda nele seria o fato de que
  a variavel que vai percorrer nele, no caso
  seria a variavel de nome 'valor' sempre percorrerá
  com um incremento de +1.

  e essa variavel que vai percorrer receberá o VALOR,
  não o índice igual ocorre no for in e no for clássico.
*/
