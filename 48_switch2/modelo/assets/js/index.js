const btn = document.getElementById('btn_dt');
const p = document.getElementById('pRetorno');
const return_string = (oq, arr, num) => {
  let strr;
  if (oq === 'dia') {
    switch (num) {
      case 0:
        strr = 'Domingo'
        return strr;
      case 1:
        strr = 'Segunda-feira'
        return strr;
      case 2:
        strr = 'Terça-feira'
        return strr;
      case 3:
        strr = 'Quarta-feira'
        return strr;
      case 4:
        strr = 'Quinta'
        return strr;
      case 5:
        strr = 'Sexta-feira'
        return strr;
      case 6:
        strr = 'Sábado'
        return strr;
        default:
        strr = 'Inválido'
        return strr;

    }
  }else if(oq === 'mes'){
    let stt =  arr[num + 1]
    return stt;
  }
  //-- o método acima foi para treinar o switch case...

}
const returnNow = () => {
  const arr_meses = [
    '',
    'Janeiro',
    'Fevereiro',
    'Março',
    'Abril',
    'Maio',
    'Junho',
    'Julho',
    'Agosto',
    'Setembro',
    'Outubro',
    'Novembro',
    'Dezembro'
  ]

  let dt = new Date();

  let day_week = dt.getDay();

  let dia = dt.getDate();

  let month = dt.getMonth();

  let ano = dt.getFullYear();
  //--**
  let horas = dt.getHours();

  let minutos = dt.getMinutes();

  let segundos = dt.getSeconds();
  //--**

  //-- transformando alguns dados em extenso...
  const dia_extenso = return_string('dia', null, day_week )

  const mes_extenso = return_string('mes', arr_meses, month)

  // console.log(`data: ${dt}`);
  // console.log(`dia: ${dia}`);
  // console.log(`mes: ${mes}`);
  // console.log(`ano: ${ano}`);
  // console.log(`horas: ${horas}`);
  // console.log(`minutos: ${minutos}`);



  p.innerText = `hoje é ${dia_extenso}, ${dia} de ${mes_extenso} de ${ano}, ${horas}:${minutos}:${segundos}`;
}

btn.addEventListener('click', returnNow)
