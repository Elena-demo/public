
document.addEventListener('DOMContentLoaded', function (){
  let count = document.querySelector('.numberInput')
  let startTimer = document.querySelector('.start');
  let text = document.querySelector('.timer');

  let id;
  function incrementCount() {
    text.textContent = parseInt(count.value);
    count.value = '';
    id = setInterval(start, 1000);
  }
  function start() {
    if (text.textContent > 0) {
      text.textContent -= 1
    } else clearInterval(id);
  }
  startTimer.addEventListener('click', incrementCount);
});


