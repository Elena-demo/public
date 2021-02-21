// let obj = [
//   {name: 'Ivan', surname: 'Ivanov'},
//   {name: 'Petr', surname: 'Petrov'},
//   {name: 'Gor', surname: 'Avagan'},
// ];
// function chekName (arr, key, value) {
//   let n = Object.values(obj);
//   for (let k of n) {
//     if (k.name == value) {
//       console.log(`Naiden ${k.name}`);
//       console.log([k]);
//       //return k;
//       break;
//     }
//   }
// }
// chekName(obj, 'name', 'Petr');
// chekName(obj, 'surname', 'Ivanov');


let obj = [
  {
    name: 'Стас',
    surname: 'Петров'
  }
]

function checkName(arr, key, value) {
  let result = []; // массив результата

  for (let k of arr) {
   // console.log(k);
    if (k[key] === value) {
      result.push(k);
    }
  }

  return result;
}

console.log(checkName(obj, 'name', 'Стас'));
console.log(checkName(obj, 'surname', 'Петров'));


