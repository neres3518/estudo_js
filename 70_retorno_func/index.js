//--> *RETURN*
//--> return something
//--> end function
// function sum(a, b) {
//   return a + b;
// }

// function createPeople(name, last_name) {
//   return { name, last_name }
// };
//
// console.log(createPeople('david', 'neres'));


// function write(start) {
//   function speak(end) {
//     return start + ' ' + end;
//   }
//   return speak;
// }
//
// const helloWord = write('hello');
// console.log(helloWord('aa'));
//
function createCalc(multiplicator) {
  //--> multiplicator

  return function(n) {
    // console.log(`multt: ${multiplicator}`);
    // console.log(`n: ${n}`);
    return n * multiplicator;
  };
}
const duplicate = createCalc(2);
const duplicate = createCalc(3);
const duplicate = createCalc(4);
console.log(duplicate(2));

// NOTE: STUDYYYY

// function somalt(v) {
//   return function(c){
//     return c;
//   };
//
// }
// const s = somalt('b')
// console.log(s('a'));
