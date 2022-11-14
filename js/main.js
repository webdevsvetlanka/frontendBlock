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

// let hour = 12,
//     minute = 30;

//     if (hour == 12 && minute == 40) {
//       console.log('Сейчас 12:30!');
//     } else {
//       console.log('Сейчас НЕ 12:30!');
//     }


// console.log(!true);   //false
// console.log(!!true);  //true

// -----------------------6. РАБОТЫ С GIT И GITHUB-------------------------

// git init - создаёт git репозиторий;
// git add <файл> - индексирует файл(подготавливает к коммиту);
// git commit -m "First Commit" - добавление в репозиторий;
// git push origin main - отправляет изменения в github;
// git log - просмотр истори коммитов.

// -----------------------7. ПРАКТИКА1-----------------------------------

// -----------------------8. УСЛОВИЯ-------------------------------------

// Если переменная a равна 10, то выведите 'Верно', иначе выведите 'Неверно'.

// let a = 10;

// (a == 10) ? console.log('Верно') : console.log('Неверно');

// if (a == 11) {
//   console.log('Верно');
// } else {
//   console.log('Неверно');
// } 

// В переменной min лежит число от 0 до 59. Определите в какую четверть часа попадает это число (в первую, вторую, третью или четвертую).

// let min = 44,
//     quarter;

// if (min >= 0 && min < 60) {
//     if (min < 15) {
//       quarter = 'в первую';
//       } else if (min >=15 && min < 30) {
//       quarter = 'во вторую';
//       } else if (min >= 30 && min < 45) {
//       quarter = 'в третью';
//       } else {
//       quarter = 'в четвертую';
//       };
//       console.log(`Число ${min} попадает ${quarter} четверть!`);
// } else {
// console.log('Число должно быть от 0 до 59! Попробуйте ещё раз)');
// }

// Переменная lang может принимать 2 значения: 'ru' 'en'. Если она имеет значение 'ru', то в переменную arr запишем массив дней недели на русском языке, а если имеет значение 'en' – то на английском.

// let lang = 'en',
//     arr;

// if (lang == 'ru') {
//   arr = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];
// }

// if (lang == 'en') {
//   arr = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
// }

// console.log(arr);

// Дана строка с цифрами, например, '12345'. Проверьте, что первым символом этой строки является цифра 1, 2 или 3. Если это так - выведите 'да', в противном случае выведите 'нет'.

// let number = '12345',
//     num = 1;

// if (number[0] == num) {
//   console.log('да');
// } else {
//   console.log('нет');
// }



//Используя конструкцию if..else, напишите код, который будет спрашивать: „Какое «официальное» название JavaScript?“
//Если пользователь вводит «ECMAScript», то показать: «Верно!», в противном случае – отобразить: «Не знаете? ECMAScript!»



// let question = prompt('Какое «официальное» название JavaScript?');

// (question == 'ECMAScript') ? alert('Верно!') : alert('Не знаете? ECMAScript!');



// -----------------------ЦИКЛЫ-----------------------------

// 1.Какое последнее значение выведет этот код? Почему?

// let i = 3;

// while (i) {
//   console.log( i-- );
// }

// Выведет 1 , так как значение 0 - false.


// 2.Для каждого цикла запишите, какие значения он выведет. Потом сравните с ответом.

// Оба цикла выводят alert с одинаковыми значениями или нет?

// 1)Префиксный вариант ++i:

// let i = 0;
// while (++i < 5) alert( i ); // 1 2 3 4

// 2)Постфиксный вариант i++

// let i = 0;
// while (i++ < 5) alert( i ); // 1 2 3 4 5

// Выведет разные значения. В прафиксном варианте сначало происходит инкремент, а потом уже сравнение, а в постфиксном варианте сначало сравнение, а потом инкремент.


// 4.Для каждого цикла запишите, какие значения он выведет. Потом сравните с ответом.
// Оба цикла выведут alert с одинаковыми значениями или нет?

// 1)Постфиксная форма:
// for (let i = 0; i < 5; i++) alert( i ); // 0 1 2 3 4

// 2)Префиксная форма:
// for (let i = 0; i < 5; ++i) alert( i ); // 0 1 2 3 4

// Выведет одинаковые значения. Сначало идет сверка условий, если оно верное, то срабатывает тело цикла, а затем шаг!


// 5. Выведите чётные числа
// При помощи цикла for выведите чётные числа от 2 до 10.

// for (i=2; i<=10; i+=2 ) {
//   console.log(i);              // 2 4 6 8 10
// }

// for (i=0; i<=10; i+=2 ) {
//   if(i === 0) {
//     continue;
//   }
//   console.log(i);               // 2 4 6 8 10
// }

// **Нечётные числа
// for (i=0; i<=10; i++ ) {
//   if(i%2 !== 1) {
//     continue;
//   }
//   console.log(i);            // 1 3 5 7 9 
// }


// 6.Перепишите код, заменив цикл for на while, без изменения поведения цикла.

// for (let i = 0; i < 3; i++) {
//   console.log( `number ${i}!` );
// }

// let i = 0;

// while (i<3) {
//   console.log( `number ${i}!` );
//   i++;
// }

// -----------------------10. ПРАКТИКА2-----------------------------------

// -----------------------11. ФУНКЦИИ-----------------------------------

console.log('Задание 1');
// Перепишите функцию, используя оператор '?' или '||'
// function checkAge(age) {
//   if (age > 18) {
//     return true;
//   } else {
//     return confirm('Родители разрешили?');
//   }
// }
// checkAge(19);

//Решение 1
// let checkAge = (age) => (age > 18) ? true : confirm('Родители разрешили?');
// console.log(checkAge(17));

// let checkAge = (age) => (age > 18) || confirm('Родители разрешили?');
// console.log(checkAge(17));

console.log('Задание 2');
//Напишите функцию min(a,b), которая возвращает меньшее из чисел a и b.

//Решение 2
// let min = (a, b) => (a > b) ? b : a;
// console.log(min(3, -1));


console.log('Задание 3');

// Напишите функцию pow(x,n), которая возвращает x в степени n. Иначе говоря, умножает x на себя n раз и возвращает результат.

//Решение 3
let x = prompt('Введите число, которое хотите возвести в спепень.'),
    n = prompt(`Введите степень, в которую хотите возвести число ${x}.`);

 function pow(x, n) {
  return (n > 0) ?  (x ** n) : alert('Введите натуральное значение степени!');
  
 } 

 alert(`Число ${x} в степни ${n} будет равным ${pow(x, n)}!`);







