// constructor functions bilds objects
// factory functions factory objects
// constructor -> always starts with capital letter (new CriaPessoa)

function Pessoa(name, last_name){

  const internalMethod = v => { //--> private function
    console.log('aa');
  }
  const internalConst = 0; //--> private attribute

   this.name = name; //--> public attribute
   this.last_name = last_name;

   this.method = function(){ //--> public function
     console.log(`${this.name}: methodd`);
   }
}

const p1 = new Pessoa('Taissa', 'Neres');
const p2 = new Pessoa('David', 'Sobral');

console.log('pe1');
p1.method()
