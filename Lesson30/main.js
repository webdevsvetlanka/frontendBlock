// Задача 1
let mainItemDiv1 = document.querySelector('.main-item-div1'),
      mainItemDiv2 = document.querySelector('.main-item-div2');

function printNumbers(from, to) {
  
  let timer1 = setInterval(function () {
    mainItemDiv1.innerHTML = `Через setInterval: ${from}.`;
    if (from === to) {
      clearInterval(timer1);
    }
    from++
  }, 1000);
}
printNumbers(0, 10);

function printNumbers2(from, to) {
  let timer2 = setTimeout(function tim1() {
    mainItemDiv2.innerHTML = `Через setTimeout: ${from}.`;
    if (from < to) {
      setTimeout(tim1, 1000);
    }
    from++;
  }, 1000);
}
printNumbers2(0, 10);