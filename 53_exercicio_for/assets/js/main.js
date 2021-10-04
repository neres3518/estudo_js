const el = [
  {tag: 'p', texto: 'Frase 1'},
  {tag: 'div', texto: 'Frase 2'},
  {tag: 'footer', texto: 'Frase 3'},
  {tag: 'section', texto: 'Frase 4'}
];

const ct = document.querySelector('.container');
const div = document.createElement('div');


for (let i = 0; i < el.length; i++) {
  // console.log(el[i]);
  // let [tg, txt] = el[i];
  let { tag: tg, texto: txt } = el[i];
  let tagCriada = document.createElement(tg)
   tagCriada.innerHTML = txt;
   div.appendChild(tagCriada)
  console.log(tg, txt);
}

ct.appendChild(div)
// console.log(el);



//--> cara... javascript é mt dahora
