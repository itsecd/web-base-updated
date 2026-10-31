export function romanToInteger(str) {
    let result = 0;
    /*
    Напишите код, преобразующий число из римской записи в арабскую.
    На вход вы получите строку, ответом должно быть число.
     */
 const roman = {
        I: 1, V: 5, X: 10, L: 50,
        C: 100, D: 500, M: 1000
    };

    for (let i = 0; i < str.length; i++) {
        const num = roman[str[i]];
        const nextNum = roman[str[i + 1]];

        if (nextNum > num) {
            result -= num;
        }
        else {
            result += num;
        }
    }

    return result;
};
