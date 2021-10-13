function createCalc(namee){
  let name = 'Nerrs'
  return {
    display: document.querySelector('.display'),

    start(){
      this.clickBtn();
      this.pressEnter();
    },

    pressEnter(){
      document.addEventListener('keypress', e => {
        if (e.keyCode ===  13)  this.run();
      })
    },

    clickBtn(){
        document.addEventListener('click', (e) => {
          const el = e.target;
          if(el.classList.contains('btn-num')){
            this.btnForDisplay(el.innerText, 'add');
          }else if (el.classList.contains('btn-del')) {
            this.btnForDisplay(undefined, 'delete')
          }else if (el.classList.contains('btn-clear')) {
            this.btnForDisplay(undefined, 'clear')
          }else if (el.classList.contains('btn-eq')) {
            this.btnForDisplay(undefined, 'run')
          }

        });

    },

    btnForDisplay(value, action){
      switch(action){

        case 'add':
          this.display.value += value;
        break;

        case 'clear':
          this.display.value = '';
        break;

        case 'delete':
          this.dell();
        break;

        case 'run':
          this.run();
        break;

        default:
        throw Error('you sent a not allowed action for btnForDisplay!')
      }

    },

    dell(){
      let valDisp = this.display.value;
      let strDisplay = valDisp.length;
      let pos = valDisp.substr(strDisplay - 1);
      this.display.value = valDisp.replace(pos, '');
    },

    run(){
      let count = this.display.value;
      try {
        if (!eval(count)) {
          alert('operação inválida!')
          this.display.value = ''
          return;
        }else {
          this.display.value = eval(count)
        }

      } catch (e) {
        alert('operação inválida!')
        this.display.value = '';
        return ;
      }
    }

  };
}

const calculator = createCalc();
calculator.start();
