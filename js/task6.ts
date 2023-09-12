function NotificationException() {}
function ErrorException() {}

function primitiveMultiply(a: number, b: number): number {
    const rand = Math.random();
    if (rand < 0.5) {
        return a * b;
    } else if (rand > 0.85) {
        throw new ErrorException();
    } else {
        throw new NotificationException();
    }
}

function reliableMultiply(a: number, b: number): number {
    while (true) {
        try {
            return primitiveMultiply(a, b);
        } catch (error) {
            if (error instanceof ErrorException) {
                throw error; // Припиняємо роботу при ErrorException
            } else if (error instanceof NotificationException) {
                // Продовжуємо спробу при NotificationException
                console.log('NotificationException occurred. Retrying...');
            } else {
                throw error; // Інші помилки передаємо далі
            }
        }
    }
}

try {
    console.log(reliableMultiply(8, 8));
} catch (error) {
    console.log('Caught an ErrorException');
}
