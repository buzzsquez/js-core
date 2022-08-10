const a = Number(prompt("Введите первое значение"));
const b = Number(prompt("Введите второе значение"));

if (isNaN(a) || isNaN(b) || !(b >= 2 && b <= 36)) {
    console.log("Некорректный ввод!");
} else {
    console.log(+(a).toString(b));
}

//-----------------------------------------------------------

const a = Number(prompt("Введите первое значение"));

if (isNaN(a) || a == '') {
    console.log("Некорректный ввод!");
} else {
    const b = Number(prompt("Введите второе значение"));
    if (isNaN(b) || b == '') {
        console.log("Некорректный ввод!");
    } else {
        console.log(`Ответ: ${a + b}, ${a / b}.`);
    }
}
