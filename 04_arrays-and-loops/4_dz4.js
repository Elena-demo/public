console.log('Привет, мир')
let dn =['понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота', 'воскресенье'];
let day = [];
for (let i = 1; i <= 31; i++) {
  day.push(i);
}
console.log(day);
// let owe = day[0];
for (let i = day[0]; i <= day.length; i++) {
  console.log(`${day[i-1]} января, ${dn[i % 7 ]}`);
}

