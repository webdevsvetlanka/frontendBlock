'use strict';
// Даны картинки. Привяжите к каждой картинке событие, чтобы по клику на 
//картинку console.log выводился ее src.
// let elems = document.getElementsByTagName('img');
// for(let i = 0; i <elems.length; i++){
//     elems[i].onclick = func;
// }
// function func(){
//     console.log(this.getAttribute('src'));
// }

//Даны ссылки. Привяжите всем ссылкам событие - по наведению на ссылку в 
//атрибут title запишется ее текст
// let elems = document.querySelectorAll('a');
// for( let i = 0; i<elems.length;i++){
//     elems[i].addEventListener('mouseover', func);
// }
// function func(){
//     this.innerHTML = this.innerHTML + '(' + this.href + ')';
// }
//Привяжите всем ссылкам событие - по наведению на ссылку в конец ее 
//текста дописывается ее href в круглых скобках
// let elems = document.querySelectorAll('a');
// for( let i = 0; i<elems.length;i++){
//     elems[i].addEventListener('mouseover', func);
// }
// function func(){
//     this.innerHTML = this.innerHTML + '(' + this.href + ')';
//     this.removeEventListener('mouseover', func);
// }
//Домашнее задание

//Привяжите всем инпутам следующее событие - по потери фокуса каждый 
//инпут выводит свое value в абзац с id="test"

let inputs = document.querySelectorAll('.main-item1 input');

for (let i = 0; i < inputs.length; i++) {
    inputs[i].addEventListener('blur', focusOut);

    function focusOut() {
        document.querySelector('#test').innerHTML = this.value;
    }
}

//Для всех инпутов сделайте так, чтобы они выводили свой value алертом 
//при нажатии на любой из них, но только по первому нажатию. Повторное 
//нажатие на инпут не должно вызывать реакции.

let inputs2 = document.querySelectorAll('.main-item2 input');

for (let i = 0; i < inputs2.length; i++) {
    inputs2[i].addEventListener('click', focusOut);

    function focusOut() {
        alert(this.value);
        this.removeEventListener('click', focusOut);
    }
}

// Даны абзацы с числами. По нажатию на абзац в нем должен появится 
//квадрат числа, которое он содержит.

let nums = document.querySelectorAll('.main-item3 p');

for (let i = 0; i < nums.length; i++) {
    nums[i].addEventListener('click', powNum);
    
    function powNum() {
        this.innerHTML = Math.pow(+this.innerHTML , 2);
        nums[i].removeEventListener('click', powNum);
    }

}

// Даны инпуты. Сделайте так, чтобы все инпуты по потери фокуса проверяли 
//свое содержимое на правильное количество символов. Сколько символов 
//должно быть в инпуте, указывается в атрибуте data-length. Если вбито 
//правильное количество, то граница инпута становится зеленой, если 
//неправильное - красной.

let inputs4 = document.querySelectorAll('.main-item4 input');

for (let i = 0; i < inputs4.length; i++) {
    inputs4[i].addEventListener('blur', checkSymbol);

    
     function checkSymbol() {
      if (inputs4[i].value.length == inputs4[i].dataset.length) {
        this.classList.remove('error');  
        this.classList.add('ok');
      } else {
        this.classList.remove('ok');  
        this.classList.add('error');   
      }
     }
}