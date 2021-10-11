// function retornaHora( data ) {
//   if (data && !(data instanceof Date)) {
//     // console.log('não é');
//     throw new TypeError('Esperando instância de Date.')
//   }
//   if (!data) {
//     data = new Date();
//   }
//   return data.toLocaleTimeString('pt-BR', {
//     hour: '2-digit',
//     minute: '2-digit',
//     second: '2-digit',
//     hour12: false
//   });
// }
// try {
//   const data = new Date('01-01-2021 13:33:02')
//   const hora = retornaHora('data');
//   console.log(hora);
// } catch (e) {
//   console.log('tratar o erro');
// } finally {
//   console.log('Tenha um bom dia');
// }
// // console.log(retornaHora());
const return_data = dt => {
  if (dt instanceof Date) {
    return 'é data';
  }else {
    throw new ReferenceError('the date informed is invalid.');
  }
  // if ((dt) && (!dt instanceof Date)) {
  //   throw Error('the date informed is invalid.')
  // }
}
let dt = new Date();
const dta = return_data('dt')
console.log(dta);
