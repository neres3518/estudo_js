// NOTE: factory functions returns objects

function createPeople(name, last_name, h, w) {
  return {
    name,

    last_name,

    // Getter
    get fullName(){
        return `${this.name} ${this.last_name}`
    },

    // Setter
    set fullName(f){
      console.log(f);
      f = f.split(' ');
      this.name = f.shift();
      this.last_name = f.join(' ');
      console.log(f);
      // return f;
    },

    speak(subject){
      return `${this.name} was ${subject} with weigth ${this.weigth}`;
    },

    whidth: h,

    weigth: w,

    //--> Getter
    get imc(){
      const index = this.weigth / (this.whidth ** 2);
      return index.toFixed(2);
    }

  };
}
const p1 = createPeople('David', 'Neres', 1.84, 68);
p1.fullName = 'Taissa de Sobral Silva';
console.log(`full name: ${p1.fullName}`);
console.log(`name: ${p1.name}`);
console.log(`last name: ${p1.last_name}`);
// console.dir(p1.name);
// console.dir(p1.speak('speaking of js'));
// console.log(p1.imc);
// NOTE: ${this.name} == p1.name --> same energy
