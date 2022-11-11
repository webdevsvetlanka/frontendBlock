// Условие
// Пример 1
// Если переменная num = 5, то выведите 'true' в console.log, иначе выведите 
//'false'.
// let num = 5;
// if(num === 5){
//     console.log(true);
// }else{
//     console.log(false);
// }
// Пример 2
// У вас есть дом. В доме 3 подъезда, в каждом подъезде по 10 квартир.
// 1 подъезд = 1 - 10;
// 2 подъезд = 11 - 20;
// 3 подъезд = 21 - 30;
// При введении номера квартиры в консоль должно выводиться номер подъезда
// Если вводить не существующую квартиру должно выводиться 'нет такой квартиры'
// let number = 100;
// if (number > 0 && number <= 10){
//     console.log('1 подъезд');
// }else if(number > 10 && number <=20){
//     console.log('2 подъезд');
// }else if(number > 20 && number <=30){
//     console.log('3 подъезд');
// }else{
//     console.log('нет такой квартиры');
// }
// Циклы
// Пример 3
// Выведите столбец чисел от 1 до 10.
// let i = 1;
// while(i <= 10){
//     console.log(i);
//     i++;
// }
// Пример 4
// Дан массив с элементами [1,2,3]. C помощью цикла for выведите все 
// эти элементы.
// let arr = [1,2,3];
// for(let i = 0; i < arr.length; i++){
//     console.log(arr[i]);
// }
// Пример 5
// Дан массив с элементами [2,3,4,5]. С помощью цикла for найдите произведение
// элементов этого массива.
// let result = 1;
// let arr = [2,3,4,5];
// for(let i = 0; i < arr.length; i++){
//     result = result * arr[i];
//     // 1*2 = 2
//     //2*3 = 6
//     // 6 * 4 = 24
//     // 24 * 5 = 120
// }
// console.log(result);

// Домашнее задание
// Условия
console.log('Пример 1');
// В переменной minute лежит число от 0 до 59. 
// Определите в какую четверть часа попадает это число 
// (в первую, вторую, третью или четвертую).

let minute = 44,
    quarter;

if (minute >= 0 && minute < 60) {
    if (minute < 15) {
      quarter = 'в первую';
      } else if (minute >=15 && minute < 30) {
      quarter = 'во вторую';
      } else if (minute >= 30 && minute < 45) {
      quarter = 'в третью';
      } else {
      quarter = 'в четвертую';
      };
      console.log(`Число ${minute} попадает ${quarter} четверть!`);
} else {
console.log('Число должно быть от 0 до 59! Попробуйте ещё раз)');
}


console.log('Пример 2');
// Переменная lang может принимать 2 значения: 'ru' 'en'. 
// Если она имеет значение 'ru', то в переменную arr 
// запишем массив дней недели на русском языке, 
// а если имеет значение 'en' – то на английском. 
// для ru - arr = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс']
// для en - arr = ['mn', 'ts', 'wd', 'th', 'fr', 'st', 'sn'];

let lang = 'en',
    arr;

if (lang == 'ru') {
  arr = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];
}

if (lang == 'en') {
  arr = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
}

console.log(arr);


console.log('Пример 3');
// Напишите код, который предлагает пользователю ввести целое 
// число. Нужно вывести на экран сколько в этом числе цифр, 
// а также положительное оно или отрицательное. Например, 
// "Число " + num + " однозначное положительное". 
// Достаточно будет определить, является ли число однозначным, 
// двузначным или трехзначным и более.

let num = prompt('Введите любое число'),
plusMinus = 0,
leng = num.length;

if (num >= 0 ) {
  plusMinus = 'положительное';
} else {
  plusMinus = 'отрицательное';
    if (leng == 2) {
    leng = 'однозначное';
    } else if (leng == 3) {
      leng = 'двузначное';
    }else if (leng == 4) {
      leng = 'трёхзначное';
    }else if (leng == 5) {
      leng = 'четырёхзначное';
    }else if (leng == 6) {
      leng = 'пятизначное';
    }else if (leng == 7) {
      leng = 'шестизначное';
    }else if (leng == 8) {
      leng = 'семизначное';
    }else if (leng == 9) {
      leng = 'восьмизначное';
    }else if (leng == 10) {
      leng = 'девятизначное';
    }
}

if (leng == 1 || leng == 0) {
  leng = 'однозначное';
} else if (leng == 2) {
  leng = 'двузначное';
}else if (leng == 3) {
  leng = 'трёхзначное';
}else if (leng == 4) {
  leng = 'четырёхзначное';
}else if (leng == 5) {
  leng = 'пятизначное';
}else if (leng == 6) {
  leng = 'шестизначное';
}else if (leng == 7) {
  leng = 'семизначное';
}else if (leng == 8) {
  leng = 'восьмизначное';
}else if (leng == 9) {
  leng = 'девятизначное';
}

alert(`Ваше число ${num} - ${leng} ${plusMinus}!`);


console.log('Пример 4');
// Создаются переменные red и yellow для красного и
// жёлтого сигналов светофора соответственно.
// В том случае, если переменным red или yellow присвоены 
// значения "нет", горит зелёный сигнал светофора и 
// выводиться сообщение, разрешающее переходить дорогу.

let red = 'нет',
    yellow = 'нет';
    
if (red == 'да' || yellow == 'да') {
  console.log('Подождите немного, скоро будет зелёный!');
} else {
  console.log('Можно переходить)');
}

// Циклы
console.log('Пример 5');
// Выведите столбец чисел от 1 до 12.
let i = 1;
while(i <= 12) {
  console.log(i);
  i++;
}


console.log('Пример 6');
// Выведите столбец чисел от 5 до 13.
i = 5;
while(i <= 13) {
  console.log(i);
  i++;
}

console.log('Пример 7');
// Выведите столбец четных чисел в промежутке от 0 до 16.

for (i=0; i<=16; i+=2 ) {
  console.log(i);
}


console.log('Пример 8');
// С помощью цикла найдите сумму чисел arr = [2,5,8,3,6]

a = 0;
arr = [2,5,8,3,6];

for (i = 0; i < arr.length; i++) {
  a = a + arr[i];  
}
console.log(a);

