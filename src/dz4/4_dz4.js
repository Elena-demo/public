let dn =['понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота', 'воскресенье'];
let day = [];
for (let i = 1; i <= 31; i++) {
    day.push(i);
}
console.log(day);
let owe = day[0];
for (let i = day[0]; i <= day.length - 1; i++) {
    console.log(`${day[i]} января,` + dn[i + 1])
}
console.log(`${day[0]} января,` + dn[1]);

