// const tresHoras = 60 * 60 * 3 * 1000
// const umDia = 60 * 60 * 24 * 1000

// const data = new Date( 0 + tresHoras + umDia);
//-- é preciso ter pelo menos 2 parâmetros (ano e mês) para o Date() funfar
//-- o mês começa do 0
  //-                   ano  mes dia  hrs min seg mili sec
  //-                     |   |   |   |   |   |   |
// const data = new Date(2020, 3, 12, 20, 12, 62, 500);
// const data = new Date('2021-08-25 20:22:52')
// console.log(`Dia: ${data.getDate()}`);
// console.log(`Mes: ${data.getMonth() + 1}`); // mês começa do 0
// console.log(`Ano: ${data.getFullYear()}`);
// console.log(`Hora: ${data.getHours()}`);
// console.log(`Segundos: ${data.getMinutes()}`);
// console.log(`Milisegundos: ${data.getMilliseconds()}`);
// console.log(`Dia semana: ${data.getDay()}`); // domingo - 0 // sabado - 6
// console.log(data.toString())
// console.log(Date.now())
const zero_esc = num => {
  return num >= 10 ? num : `0${num}`
}
const formata_data = data => {
  let dia =   zero_esc(data.getDate())
  let mes =   zero_esc(data.getMonth() + 1)
  let ano =   zero_esc(data.getFullYear())
  let hora =  zero_esc(data.getHours())
  let min =   zero_esc(data.getMinutes())
  let sec =   zero_esc(data.getSeconds())

  return `${dia}/${mes}/${ano} ${hora}:${min}:${sec}`;
}
const dt_atual = new Date()
const chama_fun = formata_data(dt_atual)
console.log(chama_fun);
