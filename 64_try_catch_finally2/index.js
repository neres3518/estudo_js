function retornaHora( data ) {
  if (data && !(data instanceof Date)) {
    // console.log('não é');
    throw new TypeError('Esperando instância de Date.')
  }
  if (!data) {
    data = new Date();
  }
  return data.toLocaleTimeString('pt-BR', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false
  });
}
try {
  const data = new Date('01-01-2021 13:33:02')
  const hora = retornaHora('data');
  console.log(hora);
} catch (e) {
  console.log('tratar o erro');
} finally {
  console.log('Tenha um bom dia');
}
// console.log(retornaHora());
