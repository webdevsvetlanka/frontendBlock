'use strict';

// Задача 1

function buttonClick() {
  let elem1 = document.getElementById('elem1');

  elem1.innerHTML = 'Ку-ку! А я <b>жирный</b>!'
}

// Задача 2

function buttonClick2() {
  let elem2 = document.getElementById('elem2');
  elem2.outerHTML = '<h3>Абзац превратился в h3<h3>'
}

// Задача 3

function buttonClick3() {
  let elem3 = document.getElementById('elem3');
  elem3.outerHTML = '<h3>' + elem3.innerHTML + '<h3>'
}

// Задача 4

function buttonClick4() {
  let num1 = document.querySelector('#num1').value,
      num2 = document.querySelector('#num2').value,
      reply = document.querySelector('.reply span'),
      btn1 = document.getElementById('btn1');

  reply.innerHTML = Number(num1) + Number(num2);
  btn1.innerHTML = 'Готово!'
}

// Задача 5

function buttonClick5() {
  let elem5 = document.querySelectorAll('.numbs');

  for ( let i = 0; i < elem5.length; i++) {
    elem5[i].innerHTML = i;
  }
}