function mapObject(obj: Record<string, any>, parentKey = ''): Record<string, any> {
    const result: Record<string, any> = {};

    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            const newKey = parentKey ? `${parentKey}/${key}` : key;

            if (typeof obj[key] === 'object' && !Array.isArray(obj[key])) {
                // Рекурсивно обробляємо вкладені об'єкти
                const nestedObject = mapObject(obj[key], newKey);
                // Злиття результатів
                Object.assign(result, nestedObject);
            } else {
                // Додаємо значення до плоскої карти
                result[newKey] = obj[key];
            }
        }
    }

    return result;
}

console.log(mapObject({
    a: {
        b: {
            c: 12,
            d: 'Hello World'
        },
        e: [1, 2, 3]
    }
}));
