const pessoa = {
    nome: 'David',
    sobrenome: 'Neres',
    idate: 18,
    endereco: {
      rua: 'Ruru',
      numero: '22'
    }
};
//--> atribuição via desestruturação

const {nome, ...resto} = pessoa;
//--> caso a rua não exista no objeto, será retornado 'rua nao existente tlgdd'
console.log(`nome: ${nome}`);
console.log(`resto: ${resto}`);
// const {nome: nm, sobrenome: sob} = pessoa;
// console.log(nm);
// const { nome, sobrenome, endereco } = pessoa;
// console.log(nome, sobrenome, endereco);
