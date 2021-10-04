const random = (min, max) => {
  const num = Math.random() * (max - min) + min;
  return Math.floor(num);
}
const min = 1;
const max = 50;
let rand = random(min, max);
// console.log(rand);

// while (rand !== 10) {
//   rand = random(min, max);
//   console.log(rand);
// }

do{
  rand = random(min, max);
  console.log(rand);
}while(rand !== 10)
console.log('acaboooo');


// let controller = 0;
// let nome = 'David'
// while (controller < nome.length) {
//   console.log(nome[controller]);
//   controller++;
// }
//
//
// console.log('te amo meu amor taissa linda da minha vida');
