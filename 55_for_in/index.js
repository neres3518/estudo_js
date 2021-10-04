const frutas = ['pera', 'maça', 'uva']
const pessoa = {
  nome: 'Taissa',
  sobrenome: 'Sobral',
  idade: 18
}
//--> for in le os indeices (para array) ou chaves (para objeto)
for (let i in frutas) {
      // console.log(frutas[i]);
}
//--> no caso de objetos o indice vira as chaves
//--> ou seja, se no array o log retornaria 0, 1, 2 etc...
//--> nas chaves vai retornar o nome delas
// console.log(pessoa['sobrenome']); //--> retorna Sobral
for (let key in pessoa) {
  // console.log(key); //--> retorna nome, sobrenome e idade
  console.log(key, pessoa[key]); //--> retorna Taissa, Sobral e 18
}
//--> for clássico
// for (let i = 0; i < f
// for (let i = 0; i < frutas.length; i++) {
  //   console.log(frutas[i]);
  // }rutas.length; i++) {
  //   console.log(frutas[i]);
  // }
