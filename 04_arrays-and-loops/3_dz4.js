let roadMines = [false, false, false, true, false, false, false, false, false, false];
let position = 0;
let kol = 1;
for (let mine of roadMines) {
    position = position +1;
    console.log(`Танк переместился на ${position}`);
    if (mine === true && kol !== 2) {
        console.log("Танк повреждён");
        kol = kol +1}
        else if (mine === true && kol === 2) {
        console.log("Танк уничтожен");
        break;
    }
}
