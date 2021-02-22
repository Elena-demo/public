function MainFunction (arr, index) {
  let select = document.createElement('select');
  document.body.append(select);

  function createOptions(arr, index, select) {
    for (let i = 0; i < arr.length; i++) {
      const option = document.createElement('option')
      select.append(option)
      index === (i + 1) ? option.setAttribute("selected", "selected") : false
      option.textContent = arr[i].label
      option.value = arr[i].value;
    }
  }
  if(typeof arr[1] == typeof {}) {
      createOptions(arr, index, select);
    }
  else
  {
    const arr3 = createArrObj(arr);
      createOptions(arr3, index, select);
    }
}
let arr = [1, 'два', 3, 'четыре'];
let wer = [
  {
    value: 11,
    label: 1
  },
  {
    value: 22,
    label: 2
  },
  {
    value: 33,
    label: 3
  },
  {
    value: 44,
    label: 4
  }
]
let arr2 = [];
function createArrObj(arr) {
  for (let i = 0; i < arr.length; i++) {
    let obj = new Object();
    obj.value = arr[i];
    obj.label = arr[i];
    arr2.push(obj);
  }
  return arr2;
}
MainFunction(arr, 2);
MainFunction(wer, 5);

