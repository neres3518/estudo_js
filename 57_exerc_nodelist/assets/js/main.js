const div = document.querySelector('.parg');
const ps = div.querySelectorAll('p');

const estilosBody = getComputedStyle(document.body);
const bkColorBody = estilosBody.backgroundColor;
console.log(bkColorBody);
// console.log(`meus ps: ${ps}`);

for(let p of ps){
  p.style.backgroundColor = bkColorBody;
  p.style.color = 'white';
}
