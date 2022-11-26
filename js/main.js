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

// // Условия
// console.log('Пример 1');
// // В переменной minute лежит число от 0 до 59. 
// // Определите в какую четверть часа попадает это число 
// // (в первую, вторую, третью или четвертую).

// let minute = 44,
//   quarter;

// if (minute >= 0 && minute < 60) {
//   if (minute < 15) {
//     quarter = 'в первую';
//   } else if (minute >= 15 && minute < 30) {
//     quarter = 'во вторую';
//   } else if (minute >= 30 && minute < 45) {
//     quarter = 'в третью';
//   } else {
//     quarter = 'в четвертую';
//   };
//   console.log(`Число ${minute} попадает ${quarter} четверть!`);
// } else {
//   console.log('Число должно быть от 0 до 59! Попробуйте ещё раз)');
// }


// console.log('Пример 2');
// // Переменная lang может принимать 2 значения: 'ru' 'en'. 
// // Если она имеет значение 'ru', то в переменную arr 
// // запишем массив дней недели на русском языке, 
// // а если имеет значение 'en' – то на английском. 
// // для ru - arr = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс']
// // для en - arr = ['mn', 'ts', 'wd', 'th', 'fr', 'st', 'sn'];

// let lang = 'en',
//   arr;

// if (lang == 'ru') {
//   arr = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];
// } else if (lang == 'en') {
//   arr = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
// } else {
//   console.log("Выбеоите ru или en!");
// }

// console.log(arr);


// console.log('Пример 3');
// // Напишите код, который предлагает пользователю ввести целое 
// // число. Нужно вывести на экран сколько в этом числе цифр, 
// // а также положительное оно или отрицательное. Например, 
// // "Число " + num + " однозначное положительное". 
// // Достаточно будет определить, является ли число однозначным, 
// // двузначным или трехзначным и более.

// let num = prompt('Введите любое число'),
//   plusMinus = 0,
//   leng = num.length;

// if (num >= 0) {
//   plusMinus = 'положительное';
// } else {
//   plusMinus = 'отрицательное';
//   if (leng == 2) {
//     leng = 'однозначное';
//   } else if (leng == 3) {
//     leng = 'двузначное';
//   } else if (leng == 4) {
//     leng = 'трёхзначное';
//   } else if (leng == 5) {
//     leng = 'четырёхзначное';
//   } else if (leng == 6) {
//     leng = 'пятизначное';
//   } else if (leng == 7) {
//     leng = 'шестизначное';
//   } else if (leng == 8) {
//     leng = 'семизначное';
//   } else if (leng == 9) {
//     leng = 'восьмизначное';
//   } else if (leng == 10) {
//     leng = 'девятизначное';
//   }
// }

// if (leng == 1 || leng == 0) {
//   leng = 'однозначное';
// } else if (leng == 2) {
//   leng = 'двузначное';
// } else if (leng == 3) {
//   leng = 'трёхзначное';
// } else if (leng == 4) {
//   leng = 'четырёхзначное';
// } else if (leng == 5) {
//   leng = 'пятизначное';
// } else if (leng == 6) {
//   leng = 'шестизначное';
// } else if (leng == 7) {
//   leng = 'семизначное';
// } else if (leng == 8) {
//   leng = 'восьмизначное';
// } else if (leng == 9) {
//   leng = 'девятизначное';
// }

// alert(`Ваше число ${num} - ${leng} ${plusMinus}!`);


// console.log('Пример 4');
// // Создаются переменные red и yellow для красного и
// // жёлтого сигналов светофора соответственно.
// // В том случае, если переменным red или yellow присвоены 
// // значения "нет", горит зелёный сигнал светофора и 
// // выводиться сообщение, разрешающее переходить дорогу.

// let red = 'нет',
//   yellow = 'нет';

// if (red == 'да' || yellow == 'да') {
//   console.log('Подождите немного, скоро будет зелёный!');
// } else {
//   console.log('Можно переходить)');
// }

// // Циклы
// console.log('Пример 5');
// // Выведите столбец чисел от 1 до 12.
// let i = 1;
// while (i <= 12) {
//   console.log(i);
//   i++;
// }


// console.log('Пример 6');
// // Выведите столбец чисел от 5 до 13.
// i = 5;
// while (i <= 13) {
//   console.log(i);
//   i++;
// }

// console.log('Пример 7');
// // Выведите столбец четных чисел в промежутке от 0 до 16.

// for (i = 0; i <= 16; i += 2) {
//   console.log(i);
// }


// console.log('Пример 8');
// // С помощью цикла найдите сумму чисел arr = [2,5,8,3,6]

// a = 0;
// arr = [2, 5, 8, 3, 6];

// for (i = 0; i < arr.length; i++) {
//   a = a + arr[i];
// }
// console.log(a);


// -----------------------11. ФУНКЦИИ-----------------------------------

// console.log('Задание 1');
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

// console.log('Задание 2');
//Напишите функцию min(a,b), которая возвращает меньшее из чисел a и b.

//Решение 2
// let min = (a, b) => (a > b) ? b : a;
// console.log(min(3, -1));


// console.log('Задание 3');

// Напишите функцию pow(x,n), которая возвращает x в степени n. Иначе говоря, умножает x на себя n раз и возвращает результат.

//Решение 3
// let x = prompt('Введите число, которое хотите возвести в спепень.'),
//     n = prompt(`Введите степень, в которую хотите возвести число ${x}.`);

//  function pow(x, n) {
//   return (n > 0) ?  (x ** n) : alert('Введите натуральное значение степени!');
  
//  } 

//  alert(`Число ${x} в степни ${n} будет равным ${pow(x, n)}!`);



// --------------12. Строковые и числовые свойства и методы------------


// Сделать первый символ заглавным

// function ucFirst(str) {
//   let newStr = str[0].toUpperCase() + str.slice(1);
//   console.log(newStr);
// }
// ucFirst("вася");

// Проверка на спам

// function checkSpam(str) {
//   return str.toLowerCase().includes('viagra') || str.toLowerCase().includes('xxx');
// }
// console.log(checkSpam('buy ViAgRA now'));
// console.log(checkSpam('free xxxxx'));
// console.log(checkSpam('innocent rabbit'));



// Усечение строки
// Создайте функцию truncate(str, maxlength), которая проверяет длину строки str и, если она превосходит maxlength, заменяет конец str на "…", так, чтобы её длина стала равна maxlength.

// Результатом функции должна быть та же строка, если усечение не требуется, либо, если необходимо, усечённая строка.

// function truncate(str, maxlength) {
//   if (str.length >= maxlength) {
//   return  str.slice(0, maxlength -1).concat('', '…');
//   } else {
//    return str;
//   }
// }
// console.log(truncate("Вот, что мне хотелось бы сказать на эту тему:", 20));
// console.log(truncate("Всем привет!", 20));


// ------------13. Практика - Строковые и числовые методы и свойства--------

// Домашнее задание
// Выписать в комментариях. Вам необходимо найти все переменные,
// функции, аргументы и параметры.
// Запишите имена в соответсвующие пункты

// Переменные: years, myDog, guests;
// Функции: dogYears, makeTea, secret;
// Встроенные функции: console.log();
// Аргументы: myDog, 4, guests, 'Earl Grey';
// Параметры: dogname, age, cups, tea. 

// function dogYears(dogname, age){
//     let years = age * 2;
//     console.log(dogName + ' is ' + years + ' years old');
// }
// let myDog = 'Rex';
// dogYears(myDog, 4);

// function makeTea (cups, tea){
//     console.log('Breawing ' + cups + ' cups of' + tea);
// }
// let guests = 2;
// makeTea(guests, 'Earl Grey');

// function secret(){
//     console.log('The secret of life is 28');
// }
// secret();


// Дана строка 'JS'. Сделайте из нее строку 'js'.
// console.log('Задание 2');
// let txt = 'JS';
// console.log(txt.toLowerCase());


// Дана строка 'я люблю JS!'. Вырежите из нее слово 
// 'люблю' и слово 'javascript' тремя разными способами 
// (через substr, substring, slice).
// console.log('Задание 3');
// let txt = 'я люблю JS!';
// console.log(txt.substr(2,5) + " " + txt.substr(8,2));
// console.log(txt.substring(2,7) + txt.substring(7,10));
// console.log(txt.slice(2,10));


// Дана строка 'я люблю JS!'. Найдите позицию 
// подстроки 'люблю'.
// console.log('Задание 4');
// let txt = 'я люблю JS!';
// console.log(txt.indexOf('люблю'));


// Дана переменная txt, в которой хранится какой-либо текст. 
// Реализуйте обрезание длинного текста по следующему 
// принципу: если количество символов этого текста больше 
// заданного в переменной n, то в переменную result запишем 
// первые n символов строки txt и добавим в конец 
// троеточие '...'. В противном случае в переменную 
// result запишем содержимое переменной txt.
// console.log('Задание 5');

// function shortenText(txt, maxlength) {
//   if (txt.length >= maxlength) {
//     return txt.slice(0, maxlength).concat('','...');
//   } else {
//     return txt;
//   }
// }
// console.log(shortenText('Если у тебя нет вопросов или не требуется взаимодействие с куратором, то жми на “Я посмотрел урок и выполнил домашнее задание” и смотри уроки дальше.', 41));

// Для решения задач данного блока вам понадобятся следующие 
// методы: replace.
// Дана строка 'Я-люблю-JS!'. 
// Замените все  '-' на '!' с помощью глобального 
// поиска и замены.
// console.log('Задание 6');
// let txt = 'Я-люблю-JS!';
// console.log(txt.replace(/-/g, '!'));


// Дана строка 'я люблю JS'. С помощью метода split 
// запишите каждое слово этой строки в отдельный элемент 
// массива.
// console.log('Задание 7');
// let txt = 'я люблю JS';
// console.log(txt.split(' '));

// Дана строка 'привет мир'. С помощью метода split 
// запишите каждый символ этой строки в отдельный элемент 
// массива.
// console.log('Задание 8');
// let txt = 'привет мир';
// console.log(txt.split(''));



// -----------------------14. Callback функция ---------------------------

// function test(subject, callback) {
//   console.log(`Начало написания теста по: ${subject}.`);
//   callback();
// }

// function finish() {
//   console.log(`Окончание теста!`);
// }

// test('физика', finish);


// -----------------------15. SUBJECT ---------------------------

// let taxi = {
//   make: "Vesta",
//   model: "taxi",
//   year: 1990,
//   color: 'yellow',
//   passenger: 4,
//   milage: 28000,
//   started: false,
//   start: function() {
//     this.started = true;
//   },
//   stop: function() {
//     this.started = false;
//   },
//   drive: function() {
//     if(this.started) {
//       console.log('Врум-врум!');
//     } else {
//       console.log('Заведи мотор для начала!');
//     }
//   }
// }
// taxi.drive();



// -----------------------16. ARRAY ---------------------------

// let user = ['Shchenkova', 30, 'Svetlana'],
//     number = [10, 99, 3, 1658, 785];

//     user.sort();
//     user.reverse();
//     console.log(user);

//     number.sort(function(a,b){
//       return a - b;
//      }
//     );
//     console.log(number);



// ------------17. Передача по ссылке или по значению -----------

// let log = function(a, b, c) {
//   console.log(a, b, c);
// }
// log(...['spread', 'rest', 'operator']);
// log.apply(null, ['spread', 'rest', 'operator']);

// let arr = ['will', 'love'],
//     arr2 = ['You', ...arr, 'spread', 'rest', 'operator'];
//   console.log(arr2);

// let log = function(a, b, ...rest) {
//   console.log(a, b, rest);
// }
// log('Sveta', 'rest', 'spred', 'user', 'logo');


