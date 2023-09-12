function deepEqual(obj1, obj2) {
    // Перевірка на однаковий тип
    if (typeof obj1 !== typeof obj2) {
        return false;
    }

    // Перевірка на простий тип даних або null
    if (obj1 === null || typeof obj1 !== 'object') {
        return obj1 === obj2;
    }

    // Перевірка на масиви
    if (Array.isArray(obj1)) {
        if (!Array.isArray(obj2) || obj1.length !== obj2.length) {
            return false;
        }

        for (let i = 0; i < obj1.length; i++) {
            if (!deepEqual(obj1[i], obj2[i])) {
                return false;
            }
        }

        return true;
    }

    // Перевірка на об'єкти
    const keys1 = Object.keys(obj1);
    const keys2 = Object.keys(obj2);

    if (keys1.length !== keys2.length) {
        return false;
    }

    for (const key of keys1) {
        if (!keys2.includes(key) || !deepEqual(obj1[key], obj2[key])) {
            return false;
        }
    }

    return true;
}

console.log(deepEqual({ name: 'test' }, { name: 'test' })); // true
console.log(deepEqual({ name: 'test' }, { name: 'test1' })); // false
console.log(deepEqual({ name: 'test', data: { value: 1 } }, { name: 'test', data: { value: 2 } })); // false
console.log(deepEqual({ name: 'test' }, { name: 'test', age: 10 })); // false
