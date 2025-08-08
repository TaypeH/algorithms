import Runner from '../../runner';
import arrayData from './data';

// Счастливые билеты 20

// Билет с 2N значным номером считается счастливым,
// если сумма N первых цифр равна сумме последних N цифр.
// Посчитать, сколько существует счастливых 2N-значных билетов.

// Начальные данные: число N от 1 до 10.
// Вывод результата: количество 2N-значных счастливых билетов.

const happyTicket = (data: { in: number, out: number }) => {
    
};

export default { run: () => Runner(happyTicket, arrayData) };

