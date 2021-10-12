// NOTE: 'arguments' that support all submitted arguments ;

// function funn(a, b = 6) {
//   b = b || 0;
//   console.log( a + b );
//   // let all = 0;
//   // for(let argumento of arguments){
//   //   all++
//   // }
//   // console.log(`total: ${all}`);
//   // console.log(`args: ${a}, ${b}, ${c}, ${d}`);
// }

//--> function by disruption (objects)
function funn({nome, sobrenome, idade}) {
  console.log(nome, sobrenome, idade);
}


funn({nome: 'David', sobrenome: 'Neres', idade: 2});
//--->*****************

//--> function by disruption (arrays)
function arr([value1, value2, value3]) {
  console.log(value1, value2, value3);
}
let ar = ['David', 'Neres', 18]

arr(ar);
//--->*****************

// function count(operator, accumulator, numbers) {
// NOTE: or
function count(operator, accumulator, ...numbers) {
  // HACK: in this way, from the third arguments will be stored in '...numbers'
  // console.log(operator, accumulator, numbers);
  for(let num of numbers){
    switch(operator){
      case '+':
      accumulator +=  num
      break;

      case '-':
      accumulator -=  num
      break;

      case '/':
      accumulator /=  num
      break;

      case '*':
      accumulator *=  num
      break;

      default:
      return console.log('unknown operator');


    }
      // console.log(num);
  };
  console.log(accumulator);
}
// let arrCount = [20, 30, 40, 56];
// count('+', 0, arrCount);
// NOTE: or
count('adsada', 1, 2, 5, 5)
