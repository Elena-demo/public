/* Задание 1 */
let x1 = 5;
let y1 = 8;
let x2 = 5;
let y2 = 5;
let a = Math.abs(x1 - x2);
let b = Math.abs(y1 - y2);
console.log('Площадь =', a * b);

/*  Задание 2 */
let a = 13.123456789;
let b = 2.123;
let n = 5;

let d = Math.floor((a % 1) * Math.pow(10, n));
let c = Math.floor((b % 1) * Math.pow(10, n));
console.log('Остаток числа a =', d);
console.log('Остаток числа b =', c);
console.log('Остатки равны? - ', d == c);
console.log('Первый остаток больше? - ', d > c);
console.log('Второй остаток больше? - ', d < c);

/* Задание 3 */
let n = 100;
let  m = -5;

let kol = Math.abs(n - m);
console.log(kol);
let  min = Math.min(n, m);
let random = (Math.round(Math.random() * kol) + min);
console.log(random);
if (random % 2 == 0) {
    let r1 = random -1;
    console.log(r1);
}
else
{console.log(random)};

