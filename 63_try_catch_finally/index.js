const soma = (x, y) => {
  if ((typeof x !== 'number') || (typeof y !== 'number') ) {
    // throw new ReferenceError('x e y precisam ser números');
    // HACK: ou pode ser assim
    // throw new Error('x e y precisam ser números');

    // ou assim (recomendado)
    throw ('x e y precisam ser números');
  }
  
  return x + y;
}
  try {
    console.log(soma(5, 6));
    console.log(soma(5, 'a'));
  } catch (e) {
    console.log(e);
  }
