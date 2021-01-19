/* Задание 1 */

let password = "1456";
let st = password.length;
if ((password.includes('-') === true || password.includes('_') === true) && st >=4) {
    console.log("Надежный пароль")
} else {
    console.log("Ненадежный пароль")
}
console.log(st);


/* Задание 2 */
let name = "Lena";
let surname = "aVdeeva";
 let a = name.substr(1);
 let a1 = a.toLowerCase();
 let b =name.substr(0,1);
 let b1 = b.toUpperCase();
 let name1 = b1 + a1;

let s = surname.substr(1);
let s1 = s.toLowerCase();
let k =surname.substr(0,1);
let k1 = k.toUpperCase();
let surname1 = k1 + s1;
console.log(name1, "", surname1);

(name != name1) ? console.log("Имя было преобразовано") : console.log("Имя осталось без изменений");
(surname != surname1) ? console.log("Фамилия была преобразована") : console.log("Фамилия осталась без изменений");
