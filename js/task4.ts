function arrayToObject(arr) {
    const obj = {}; //порожній об'єкт, в який щоб зберігати результат

    //Проходимося по кожному підмасиву у вхідному масиві arr
    for (const [key, value] of arr) {
        if (Array.isArray(value)) { //чи значення є масивом
            obj[key] = arrayToObject(value); //значення є масивом, рекурсивно викликаємо функцію arrayToObject
        } else {
            obj[key] = value; //значення не є масивом, додаємо його як властивість
        }
    }

    return obj;
}

console.log(arrayToObject([['name', 'developer'], ['age', 5], ['skills', [['html', 4], ['css', 5], ['js', 5]]]]));
