function any() {
  console.log(65454645);
}


(function(age, weight, heigth){ //--> get the params
  const last_name = 'Neres';
  function create_name(name) {
    return name + ' ' + last_name;
  }
  function speakName() {
    console.log(create_name('David'));
  }
  // speakName();
  console.log(age, weight, heigth);
})(18, 54, 98);//--> send the arguments
