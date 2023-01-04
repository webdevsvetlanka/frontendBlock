window.addEventListener('DOMContentLoaded', () => {

  // -------------------------TIMER--------------------------

  if (document.querySelector(".cs-media")) {
    let timeEnd = new Date('2023, 05, 15'),
      days = document.querySelector('.days'),
      hours = document.querySelector('.hours'),
      minutes = document.querySelector('.minutes'),
      seconds = document.querySelector('.seconds');

    function countdownTimer() {
      let diffTime = timeEnd - new Date();

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
    }

    countdownTimer();
    timerId = setInterval(countdownTimer, 1000);

  }


  // -------------------------TABS--------------------------

  if (document.querySelector(".tabs-act")) {
    let tab = document.querySelectorAll('.tabs-menu > li'),
      tabContent = document.querySelectorAll('.tab-content'),
      tabsHeader = document.querySelector('.hero-menu_header');

    for (let i = 0; i < tab.length; i++) {
      tab[i].classList.add('tab-item');
    }
    function tabClose() {
      for (let i = 0; i < tab.length; i++) {
        tab[i].classList.remove('current');
      }
      for (let i = 0; i < tabContent.length; i++) {
        tabContent[i].style.display = 'none';
      }
    }

    function tabActive(i = 0) {
      tab[i].classList.add('current');
      tabContent[i].style.display = 'block';
    }

    tabClose();
    tabActive();

    tabsHeader.addEventListener('click', (e) => {
      let target = e.target.parentNode;
      if (target && target.classList.contains('tab-item')) {
        tab.forEach((item, i) => {
          if (target == item) {
            tabClose();
            tabActive(i);
            console.log(tab);
          }
        });
      }

    });

    // removescroll
    const anchors = document.querySelectorAll('a[href*="tab-"]');

    for (let anchor of anchors) {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
      })
    };

  }


  // -------------------------SLIDE--------------------------

  if (document.querySelector('.events-carousel-wrap')) {

    let slider = document.querySelector('.swiper-wrapper'),
      slide = slider.querySelectorAll('.swiper-slide'),
      slideNext = document.querySelector('.ec-button-next'),
      slidePrev = document.querySelector('.ec-button-prev'),
      slideWidth = slide[0].offsetWidth,
      slideIndex = 0,
      posInit = 0,
      posX1 = null,
      posY1 = null;

    motionSlide(0);

    function motionSlide() {
      slider.style.transform = 'translateX(' + - slideIndex + 'px)';
    }

    slideNext.addEventListener('click', () => {
      slideIndex += slideWidth;
      if (slideIndex > (slide.length - 1) * slideWidth) {
        slideIndex = 0;
      }
      motionSlide();
    })

    slidePrev.addEventListener('click', () => {
      slideIndex -= slideWidth;
      if (slideIndex < 0) {
        slideIndex = (slide.length - 1) * slideWidth;
      }

      motionSlide();
    })

  }

  if (document.querySelector('.testimonilas-carousel')) {

    let slider2 = document.querySelector('.testimonilas-carousel .swiper-wrapper'),
      slide = slider2.querySelectorAll('.swiper-slide'),
      slideNext = document.querySelector('.tc-button-next'),
      slidePrev = document.querySelector('.tc-button-prev'),
      slideIndex = 0,
      slideWidth = slide[0].offsetWidth,

      current = document.querySelectorAll('.testi-number'),
      currentItem = 1;

    motionSlide(0);


    for (let i = 0; i < slide.length; i++) {

      let currentCounter = slide[i].querySelector('.testi-number');

      if (i < 9) {
        currentCounter.textContent = `0${i + 1}.`;
      } else {
        currentCounter.textContent = `${i + 1}.`;
      }
    }


    function motionSlide() {
      slider2.style.transform = 'translateX(' + - slideIndex + 'px)';
    }

    slideNext.addEventListener('click', () => {
      slideIndex += slideWidth;
      if (slideIndex > (slide.length - 1) * slideWidth) {
        slideIndex = 0;
      }
      motionSlide();
    })

    slidePrev.addEventListener('click', () => {
      slideIndex -= slideWidth;
      if (slideIndex < 0) {
        slideIndex = (slide.length - 1) * slideWidth;
      }
      motionSlide();
    })

  }
});