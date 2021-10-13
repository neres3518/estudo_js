function createCalc(namee){
  let name = 'Nerrs'
  return {
    display: document.querySelector('.display'),

    start(){
      this.clickBtn();
    
    },

    clickBtn(){
        document.addEventListener('click', function(e){
          const el = e.target;

          if(el.classList.contains('btn-num')){
            this.btnForDisplay(el.innerText);
          }
        }.bind(this));

    },

    btnForDisplay(value){
      this.display.value += value;
    }

  };
}

const calculator = createCalc();
calculator.start();
