// Задача 1
let date1 = new Date(2012, 01, 20, 3, 12),
mainItem1 = document.querySelector('.main-item1 div');

mainItem1.innerHTML = date1.toLocaleString();


// Задача 2
let mainInput2 = document.querySelector('.main-item2 input'),
    mainItem2 = document.querySelector('.main-item2 div');

    mainInput2.addEventListener('blur', focusOut);

    function focusOut() {
      day = mainInput2.value.slice(0,2);
      mon = mainInput2.value.slice(3,5);
      year = mainInput2.value.slice(6,10);
      let date2 = new Date(+year, +mon-1, +day);

      function weekDay2(date2) {
        let mainWeekDay2 = ['ВС', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ'];

        console.log(mainWeekDay2[date2.getDay()]);
        return mainWeekDay2[date2.getDay()];
      }

      mainItem2.innerHTML = `Вы родились в ${weekDay2(date2)}`;
    }

    
    
