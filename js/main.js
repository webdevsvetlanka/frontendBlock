// ----------------------------1. ЧТО ТАКОЕ JavaScript--------------------------

// console.log(10);
// alert('Hi, Andrey!');


// ----------------------------2. ПЕРЕМЕННЫЕ-------------------------

// const COLOR_RED = 'f00';
// let color = COLOR_RED;

// console.log(color);

// ----------------------------3. ТИПЫ ДАННЫХ--------------------------

// let money = 60000,
//   income = 'Eurokappa',
//   addExpenses = 'Еда, Авто, Учёба, Коммуналка',
//   deposit = false,
//   mission = 500000,
//   perlod = 11;

// console.log(typeof money);
// console.log(typeof income);
// console.log(typeof deposit);

// console.log(addExpenses.length);
// console.log('Период равен -' + ' ' + perlod + ' ' + 'месяцев.');
// // console.log(`Период равен - ${perlod} месяцев.`);


// mission = mission.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
// console.log(`Цель заработать - ${mission} ₽.`);

// console.log(addExpenses.toLowerCase().split());

// let budgetDay = money / 30;
// console.log(budgetDay);


// //3*

// let num = 266219;
// num = num.toString().split([]);
// console.log(num);


// // Вывести в консоль произведение числа
// let newNum = num.reduce(function (a, b) {
//   return a * b;
// });

// console.log(newNum);

// // Полученный результат возвести в степень 3, используя только 1 оператор

// console.log(newNum ** 3);

// // Вывести первые 2 цифры полученного числа

// let numPow = newNum ** 3;
// numPow = numPow.toString().substr(0, 2);
// console.log(+numPow);




// -----------------------4. ОБЩЕНИЕ С ПОЛЬЗОВАТЕЛЕМ---------------------

// alert('Hello, Andrey!');
// let nameUser = prompt('Привет, друг!\nКак тебя зовут?');
// let ageUser = prompt('Cколько тебе лет?');
// let cityUser = prompt('Где ты живёшь?');
// alert(`Я вангую!\n\nТебя зовут ${nameUser}!\nТебе ${ageUser} лет и ты живёшь в замечательном городе ${cityUser}!\n\nПриятно познакомится с тобой!))`);


// -----------------------5. ОПЕРАТОРЫ В JS------------------------------


// let x = 2,
//     y = 3;

// console.log(y-x);  //1
// console.log(5%2);  //1
// console.log(2**3);  //8
// console.log(4**(1/2)); //2

// let text = 'text' + 'три';
// console.log(text);  //textтри

let hour = 12,
    minute = 30;

    if (hour == 12 && minute == 40) {
      console.log('Сейчас 12:30!');
    } else {
      console.log('Сейчас НЕ 12:30!');
    }


console.log(!true);   //false
console.log(!!true);  //true