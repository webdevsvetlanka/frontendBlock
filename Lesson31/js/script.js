window.addEventListener('DOMContentLoaded', ()=> {
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
        tabItem.forEach((item, i)=> {
          if(target == item) {
            hideTabContent();
            showTabContent(i);
          } 
        });
      }
    });
});


    