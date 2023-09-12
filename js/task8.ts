function combos(num: number): number[][] {
    const result: number[][] = [];

    function findCombos(remaining: number, currentCombo: number[], start: number) {
        if (remaining === 0) {
            // Якщо сума поточного комбо дорівнює num, додаємо його до результату
            result.push([...currentCombo]);
            return;
        }

        for (let i = start; i <= remaining; i++) {
            // Додаємо число до поточного комбо
            currentCombo.push(i);

            // Рекурсивно шукаємо комбо для залишку
            findCombos(remaining - i, currentCombo, i);
            // Після пошуку видаляємо додане число для наступних ітерацій
            currentCombo.pop();
        }
    }

    findCombos(num, [], 1);
    return result;
}

console.log(combos(3));
console.log(combos(10));
