function MainFunction (arr, index) {
  let select = document.createElement('select');
  document.body.append(select);
  let option;

  for (let i = 0; i < arr.length; i++) {

    option = document.createElement('option')
    select.append(option)
    index === (i +1) ? option.setAttribute("selected", "selected") : false

    option.textContent = arr[i].label
    option.value = arr[i].value;
  }
}

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


MainFunction(wer, 3);
