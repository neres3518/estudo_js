//--> criei esse index para explicar o forEach
let arr = ['salve', 'opa', 'bao', 'tobao']
let obj = {
  um:'numero 1',
  dois:'numero 2',
  tres:'numero 3',
}
//--> el seria a abreviação de elemento e i seria o index
//--> forEach só funciona em arrays
arr.forEach(function(el, i, array){
  console.log(el, i, array);
})
// obj.forEach(function (el, i, arr) {
//   console.log(el);
// })
