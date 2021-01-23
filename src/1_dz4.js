let ar = [];
let n = -3;
let m = -10;
let count = 42;
let min = Math.min(n,m);
let max = Math.max(n, m);
for (let i = 1; i <= count; i++) {
     ar.push(Math.floor(Math.random() * (max - min)) + min);
}
console.log(ar);
