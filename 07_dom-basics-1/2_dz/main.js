let inputTime = document.createElement('input');
document.body.append(inputTime);
let h2 = document.createElement('h2');
document.body.append(h2);
let id;
function text() {
  h2.innerHTML = inputTime.value
}
function start() {
  clearTimeout(id)
  id = setTimeout(text,300);
}
inputTime.addEventListener('input', start);

//2-й вариант решения строго по вашему объяснению.

// let inputTime = document.createElement('input');
// document.body.append(inputTime);
// let h2 = document.createElement('h2');
// document.body.append(h2);
//
// let id;
// inputTime.addEventListener('input', makeText);
// function makeText(){
//   clearTimeout(id);
//   start();
// }
// function text() {
//   h2.innerHTML = inputTime.value
// }
// function start() {
//     id = setTimeout(text,300);
// }
//

