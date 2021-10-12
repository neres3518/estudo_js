function returnFunn() {
  const name = 'Neres';
  return function(){
        return name;
  }
}

const exec = returnFunn();

console.dir(exec);
