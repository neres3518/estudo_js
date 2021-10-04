//--> continue para a execução do código NAQUELA RODADA DO LAÇO e continua
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log('aaa');

for(let n in numeros){

  if ((numeros[n] === 2) || (numeros[n] === 5)) {
    continue; //--> retorna 1 3 4 6 7 8 9
    // break; //--> retorna somente 1, pois se ele for igual a 2 ele para tudo dentro desse laço
  }
  if (numeros[n] === 8) {
    console.log('achei o 8, parando...');
    break;
  }
  console.log(numeros[n]);
}
