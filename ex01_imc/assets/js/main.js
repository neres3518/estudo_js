const btn = document.getElementById('btn_calc')
const d_res = document.querySelector('.div_resposta')

let msg = {
  abaixo_peso: `<label class="inp-abaixo-peso form-control">Você está abaixo do peso!</label>`,
  ideal: `<label class="inp-ideal form-control">O seu peso é ideal!</label>`,
  sobrepeso: `<label class="inp-sobrepeso form-control">Você se encontra no sobrepeso</label>`,
  ob1: `<label class="inp-obesidade1 form-control">Obesidade Grau 1!</label>`,
  ob2: `<label class="inp-obesidade2 form-control">Obesidade Grau 2!</label>`,
  ob3: `<label class="inp-obesidade3 form-control">Obesidade Grau 3!</label>`
}
const calcula_imc = () => {
  let peso = document.getElementById('txtPeso').value
  peso = parseFloat(peso.replace(',', '.'))
  let altura = document.getElementById('txtAltura').value
  altura = parseFloat(altura.replace(',', '.'))
  res = (peso/(altura ** 2)).toFixed(2)
  if(res < 18.5) d_res.innerHTML = msg.abaixo_peso
  else if((res > 18.5) && (res < 24.9)) d_res.innerHTML = msg.ideal
  else if((res > 25.0) && (res < 29.9)) d_res.innerHTML = msg.sobrepeso
  else if((res > 30.0) && (res < 34.9)) d_res.innerHTML = msg.ob1
  else if((res > 35.0) && (res < 39.9)) d_res.innerHTML = msg.ob2
  else if(res > 40) d_res.innerHTML = msg.ob3

}
$(document).ready(function(){
  $('.altura').mask('9,99');
  $('.kg').mask("#0,00", {reverse: true});
})
btn.addEventListener('click', calcula_imc)
