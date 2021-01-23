let m = ['apple', 'cherri', 'tomate'];
console.log("Рейтинг фруктов: ")
for (let i in m ) {
    console.log(`${parseInt((i) +1 )} место: ${m[i]}`);
}

let kol = 200;
let n = 0;
console.log("Вы налили себе", + kol, "мл кофе");
while (kol > 0) {
    kol -= 50;
    console.log("Осталось", kol, "мл");
    n++;
   }
console.log("Количество глотков:", n);

//заполнение массива
let card = ["Туз", "6", "Король", "10", "Дама", "9"];
let hard = [];

for (let i of card) {
    if(i === 'Туз' || i === "Король") hard.push(i)

    else {continue};
    console.log("Карта " + i + " добавлена");
}
console.log(hard);

// let card = ["Туз", "6", "Король", "10", "Дама", "9"];
// let hard = [];
//
// for (let i of card) {
//     if(i !== 'Туз' && i !== 'Король') continue;
//         hard.push(i);
//     console.log("Карта \"" + i + "\" добавлена");
// }
// console.log(hard);

let card2 = ["Туз", "6", "Король", "10", "Дама", "9"];
let hard2 = false;
console.log('Ищем даму в колоде...');
for (let k of card2) {
    console.log(`Вытянута карта ${k}`);
    if (k === "Дама") {
        hard2 = true;
        break;
    }
}
if (hard2 === true) console.log("Дама найдена");

i = 0;
while (true) {
    if(i > 10) break;
    console.log(i);
    i +=2;
}
 // заполнение массива циклами
let ar = []
for (let i = 0; i < 7; i++) {
    ar.push(i * i)
}
console.log(ar);

// заполнение массива из другого массива
let ar2 = [];
 for (let c of ar) {
     console.log('Длина строки:', c.length);
     ar2.push(c / 2)
 }
 console.log(ar2);


 // let  u = [];
 // let next;
 // while (next = file.nextLine()) {
 //     u.push(next);
 // } ????????????????????????????????

