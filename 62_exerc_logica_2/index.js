//-->funções de checagem
const ck_is_num = n => (typeof n === 'number') ? true : false;
const ck_0_100 = n => ((n >= 0) && (n <= 100) ) ? true : false;
const ck_div_3_5 = n => (((n/3).toPrecision().length === 1) && ((n/5).toPrecision().length === 1)) ? true : false;
const ck_div_3_alone = n => ((n/3).toPrecision().length === 1) ? true : false;
const ck_div_5_alone = n => ((n/5).toPrecision().length === 1) ? true : false;

const funAll = n => {
  let fun1 = ck_is_num(n);
  let fun2 = ck_0_100(n);
  let fun3 = ck_div_3_5(n);
  let fun4 = ck_div_3_alone(n);
  let fun5 = ck_div_5_alone(n);
  if((fun1 === true) && (fun2 === true) && (fun3 === true)){
    return 'FizzBuzz';
  }else if ((fun1 === true) && (fun2 === true) && (fun3 === false)) {
    if (fun4 === true) {
      return 'Fizz';
    }else if (fun5 === true) {
      return 'Buzz';
    }
  }else if(fun1 === false){
    return 'Não é um número!';
  }
  return n;
}
console.log(funAll(9));
