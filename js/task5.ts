function objectToArray(obj: Record<string, any>): (string | any[])[] {
    const result: (string | any[])[] = [];

    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            const value = obj[key];
            if (typeof value === 'object' && !Array.isArray(value)) {
                // Якщо значення є об'єктом (не масивом), то рекурсивно перетворюємо його в масив
                result.push([key, objectToArray(value)]);
            } else {
                // В іншому випадку додаємо пару ключ-значення у масив
                result.push([key, value]);
            }
        }
    }

    return result;
}

const obj = {
    name: 'developer',
    age: 5,
    skills: {
        html: 4,
        css: 5,
        js: 5
    }
};

const result = objectToArray(obj);
console.log(JSON.stringify(result, null, 2));

