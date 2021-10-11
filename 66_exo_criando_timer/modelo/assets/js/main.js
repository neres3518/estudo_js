function execClock() {
  const clock = document.querySelector('.clock');
  const start = document.querySelector('.start');
  const reset = document.querySelector('.reset');
  const brk = document.querySelector('.break');
  let seconds = 0;
  let timer;
  document.addEventListener('click', function (e) {
    const el = e.target;
    if (el.classList.contains('addColor')) {
      clock.classList.add('pause')
    }else if (el.classList.contains('rmColor')) {
      clock.classList.remove('pause')
    }
  })
  function startClock() {
      timer = setInterval(function(){
      seconds++
      clock.innerHTML = get_time_from_seconds(seconds);
    },  1000)
  }
  function stopClock() {
    clock.innerHTML = get_time_from_seconds(0)
  }
  function get_time_from_seconds(segundos) {
    const data = new Date(segundos * 1000);
    return data.toLocaleTimeString('pt-BR', {
      hour12: false,
      timeZone:'UTC'
    });
  }
  start.addEventListener('click', function(event){
      start.disabled = true;
      startClock();
  });
  reset.addEventListener('click', function(event){
    start.disabled = false;
    stopClock();
    clearInterval(timer);
    seconds = 0;
  });
  brk.addEventListener('click', function(event){
    clearInterval(timer);
    start.disabled = false;
  });
}
