'use strict';
// function calculateArea(r){
//     let area;
//     if(r<=0){
//         return 0;
//     }else{
//         area = Math.PI * r *r;
//         return area;
//     }
// }
// let radius = 2.2;
// let theArea = calculateArea(radius);
// console.log('The area is: ' + theArea);

// Дана строка 'abc!def!'. Замените все ! на '@' 
// с помощью глобального поиска и замены.
// let txt = 'abc!def!';
// console.log(txt.replace(/!/g, '@'));


// Дана строка 'aaa bbb ccc'. Вырежите из нее слово 'bbb' 
// тремя разными способами (через substr, substring, slice).
// let txt = 'aaa bbb ccc';
// console.log(txt.substr(4,3));
// console.log(txt.substring(4,7));
// console.log(txt.slice(4,7));

// Дана строка 'js'. Сделайте из нее строку 'JS'.
// let txt = 'js';
// console.log(txt.toUpperCase());

// Дана строка 'я люблю JS!'. Найдите количество 
// символов в этой строке.
// let txt = 'я люблю JS!';
// console.log(txt.length);

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
console.log('Задание 2');
// let txt = 'JS';
// console.log(txt.toLowerCase());


// Дана строка 'я люблю JS!'. Вырежите из нее слово 
// 'люблю' и слово 'javascript' тремя разными способами 
// (через substr, substring, slice).
console.log('Задание 3');
// let txt = 'я люблю JS!';
// console.log(txt.substr(2,5) + " " + txt.substr(8,2));
// console.log(txt.substring(2,7) + txt.substring(7,10));
// console.log(txt.slice(2,10));


// Дана строка 'я люблю JS!'. Найдите позицию 
// подстроки 'люблю'.
console.log('Задание 4');
// let txt = 'я люблю JS!';
// console.log(txt.indexOf('люблю'));


// Дана переменная txt, в которой хранится какой-либо текст. 
// Реализуйте обрезание длинного текста по следующему 
// принципу: если количество символов этого текста больше 
// заданного в переменной n, то в переменную result запишем 
// первые n символов строки txt и добавим в конец 
// троеточие '...'. В противном случае в переменную 
// result запишем содержимое переменной txt.
console.log('Задание 5');

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
console.log('Задание 6');
// let txt = 'Я-люблю-JS!';
// console.log(txt.replace(/-/g, '!'));


// Дана строка 'я люблю JS'. С помощью метода split 
// запишите каждое слово этой строки в отдельный элемент 
// массива.
console.log('Задание 7');
// let txt = 'я люблю JS';
// console.log(txt.split(' '));

// Дана строка 'привет мир'. С помощью метода split 
// запишите каждый символ этой строки в отдельный элемент 
// массива.
console.log('Задание 8');
let txt = 'привет мир';
console.log(txt.split(''));