function emailAdress (email1, email2) {
  let newArr = [];
  for (let i = 0; i <= email2.length; i++) {
    let a = email1.indexOf(email2[i]);
    if(a === -1) newArr.push(email1[i]);
  }
  console.log(newArr);
}
mail1 = ['lll@mail.ru', 'aaaa@mail.ru', 'ffffffffff@mail.ru'];
mail2 = ['rrr@mail.ru', 'aaaa@mail.ru'];
emailAdress(mail1, mail2);
//export default {adres};
