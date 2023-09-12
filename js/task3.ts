function bulkRun(functions: Function[], parameters: any[][]): Promise<any[]> {
    const results: any[] = [];
    const promises: Promise<void>[] = [];

        // Проходимося по кожній функції і її параметрах.
    for (let i = 0; i < functions.length; i++) {
        const func = functions[i];
        const args = parameters[i];

                // Створюємо новий об'єкт Promise для кожної функції.
        const promise = new Promise<void>((resolve) => {
            func(...args, (result: any) => {
                results.push(result);  //Додаємо результат в масив
                resolve();
            });
        });

        promises.push(promise); //Додаємо об'єкт Promise до масиву
    }

    //Повертаємо Promise, який резолвиться, коли всі об'єкти Promise виконані, з масивом результатів
    return Promise.all(promises).then(() => results);
}

const f1 = (cb: (result: any) => void) => { cb(1); };
const f2 = (a: number, cb: (result: any) => void) => { cb(a); };
const f3 = (a: number, b: number, cb: (result: any) => void) => {
    setTimeout(() => cb([a, b]), 1000);
};

const functions = [f1, f2, f3];
const parameters = [[], [2], [3, 4]];

bulkRun(functions, parameters).then((results) => {
    console.log(results);
});
