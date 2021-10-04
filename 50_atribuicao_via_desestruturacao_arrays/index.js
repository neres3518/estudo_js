//--> o operador rest '...' é responsável por pegar o resto de algo, nesse caso o resto do array
const nS = [  [1, 2, 3], [4, 5, 6], [7, 8, 9] ];
const [,,[,oito]] = nS; //--> jeito feio
console.log(oito);
//***************************************************************//
const [ind1, ind2, ind3] = nS; //--> jeito feio
const [, oito2] = ind3;
console.log(oito2);
// const numeros = [1000, 2000, 3000, 4000, 5000, 6000, 7000];
// const [n1, ,n3, , n5, , n7, ] = numeros;
// console.log(n1, n3, n5, n7); //--> retorna 1, 2
//***************************************************************//
// const numeros = [1000, 2000, 3000, 4000, 8000];
// const [n1, n2, n3, ...r] = numeros;
// console.log(n1, n2, n3); //--> retorna 1, 2
// console.log('resto----');
// console.log(r); //--> retorna o resto do array
