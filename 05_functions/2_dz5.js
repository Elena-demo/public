function Korzina (sum, kol, promoKod = null) {
  if (promoKod === 'ДАРИМ300') {
    sum > 300 ? sum -= 300 : sum = 0;
  }
  if (kol >= 10)
    sum *= 0.95;
  if (sum > 50000) {
    sum -= 50000;
    sum *= 0.8;
    sum  += 50000;
  }
  if (promoKod === 'СКИДКА15' && sum >= 20000) {
    sum *= 0.85
  }
  console.log(sum);
}
Korzina(60000, 5, 'ДАРИМ300');
Korzina(60000, 11, 'СКИДКА15');
Korzina(500, 1);
