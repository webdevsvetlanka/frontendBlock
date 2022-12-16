window.addEventListener('DOMContentLoaded', () => {

  // --------------------------------TABS----------------------

  let tabContent = document.querySelectorAll('.tabcontent'),
    tabHeader = document.querySelector('.tabheader'),
    tabItem = document.querySelectorAll('.tabheader__item');

  function hideTabContent() {
    for (let i = 0; i < tabItem.length; i++) {
      tabItem[i].classList.remove('tabheader__item_active');
    }

    for (let i = 0; i < tabContent.length; i++) {
      tabContent[i].style.display = 'none';
    }
  }

  function showTabContent(i = 0) {
    tabItem[i].classList.add('tabheader__item_active');
    tabContent[i].style.display = 'block';
  }

  hideTabContent();
  showTabContent();

  tabHeader.addEventListener('click', (event) => {
    let target = event.target;

    if (target && target.classList.contains('tabheader__item')) {
      tabItem.forEach((item, i) => {
        if (target == item) {
          hideTabContent();
          showTabContent(i);
        }
      });
    }
  });

  // ---------------------------------TIMER-------------------

  let timeEnd = new Date('2023, 01, 01');
  // Числительные
  function num_word(value, words) {
    value = Math.abs(value) % 100;
    var num = value % 10;
    if (value > 10 && value < 20) return words[2];
    if (num > 1 && num < 5) return words[1];
    if (num == 1) return words[0];
    return words[2];
  }

  function countdownTimer() {
    let diffTime = timeEnd - new Date(),
      days = document.querySelector('#days'),
      hours = document.querySelector('#hours'),
      minutes = document.querySelector('#minutes'),
      seconds = document.querySelector('#seconds'),
      textDays = document.querySelector('.text-day'),
      textHours = document.querySelector('.text-hour'),
      textMinutes = document.querySelector('.text-min'),
      textSeconds = document.querySelector('.text-sec');



    if (diffTime <= 0) {
      clearInterval(timerId);
    }
    let day = diffTime > 0 ? Math.floor(diffTime / 1000 / 60 / 60 / 24) : 0;
    let hour = diffTime > 0 ? Math.floor(diffTime / 1000 / 60 / 60) % 24 : 0;
    let minute = diffTime > 0 ? Math.floor(diffTime / 1000 / 60) % 60 : 0;
    let second = diffTime > 0 ? Math.floor(diffTime / 1000) % 60 : 0;

    days.innerHTML = days < 10 ? '0' + day : day;
    hours.innerHTML = hours < 10 ? '0' + hour : hour;
    minutes.innerHTML = minutes < 10 ? '0' + minute : minute;
    seconds.innerHTML = seconds < 10 ? '0' + second : second;

    textDays.innerHTML = num_word(day, ['день', 'дня', 'дней']);
    textHours.innerHTML = num_word(hour, ['час', 'часа', 'часов']);
    textMinutes.innerHTML = num_word(minute, ['минута', 'минуты', 'минут']);
    textSeconds.innerHTML = num_word(second, ['секунда', 'секунды', 'секунд']);
    console.log(textSeconds.innerHTML);
  }



  countdownTimer();

  timerId = setInterval(countdownTimer, 1000);
});



    