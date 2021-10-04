// ? :
//-- (condicao) ? <ação para caso seja verdadeiro> : <ação para caso seja falso>
//-- const nome_constante = <variavel caso exista> || <atribuição para caso ela seja nula>
const pontuacaoUser = 99
const nivel = pontuacaoUser >= 100 ? 'Usuário VIP' : 'Usuário normal';

const t1 = null;
const t2 = t1 || 'te3' //-> t2 vai receber a string 'te3' pois t1 é null

console.log(nivel);

pontuacaoUser > 1000
?
 console.log('avee')
  :
   console.log('av');
