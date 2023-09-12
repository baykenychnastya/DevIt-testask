function* chunkArray<T>(arr: T[], chunkSize: number): Generator<T[], void, undefined> { //функція-генератор, яка може генерувати значення ітеративно.
    let index = 0; //поточний індекс у масиві

    while (index < arr.length) { //доки індекс менший за довжину масиву
        yield arr.slice(index, index + chunkSize); //вирізає підмасив масиву arr від поточного індексу до index + chunkSize
        index += chunkSize;
    }
}

const iterator = chunkArray([1, 2, 3, 4, 5, 6, 7, 8], 3);

console.log(iterator.next()); // { value: [1, 2, 3], done: false }
console.log(iterator.next()); // { value: [4, 5, 6], done: false }
console.log(iterator.next()); // { value: [7, 8], done: false }
console.log(iterator.next()); // { value: undefined, done: true }
