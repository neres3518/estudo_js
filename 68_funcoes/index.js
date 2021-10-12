//--> ways of functions
//--> function hoisting
/*
  hoisting is the capacity of call the function
  anywhere in the code, before or later de declaration
*/
//--> first way (classic functions)
// logger(); //--> it works
function logger() {
  console.log('logger');

}
// logger(); //--> it works
//--> ********


//--> second way (first-class objects)
  // NOTE: functions are 'first-class objects'
  // NOTE: with first-class objects you can to use that like a variable
  // example:
  const name = 'Neres'
  //--> or
  const name2 = function(){
    console.log('Neres');
  }

  function execOtherFunction(funct) {
      funct();
  }
  // execOtherFunction(name2)
//--> ********


//--> third way (arrow function)
  const functionArrow = () => {
    console.log('im a arrow function');
  }
  // functionArrow();
//--> ********

//--> fourth way (by objects):
const obj = {
  speak(){
    console.log('obj speaks');
  }
}
obj.speak();

//--> ********
