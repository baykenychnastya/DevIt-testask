function add(x: number) {
    //функція inner, яка додає x та y
    const inner = (y: number) => add(x + y);
    // Встановлюємо метод valueOf для функції inner, щоб можна було
    // отримати результат додавання, використовуючи Number()
    inner.valueOf = () => x;
    return inner;
}

const result1 = Number(add(1)(2)); // 1 + 2 = 3
const result2 = Number(add(1)(2)(5)); // 1 + 2 + 5 = 8
const result3 = Number(add(1)(2)(-3)(4)); // 1 + 2 - 3 + 4 = 4
const result4 = Number(add(1)(2)(3)(4)(-5)); // 1 + 2 + 3 + 4 - 5 = 5

console.log(result1);
console.log(result2);
console.log(result3);
console.log(result4);
