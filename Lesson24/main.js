function openText(numArg) {
  let textBlock = document.querySelectorAll('.main-item-block-text'),
      closeBtn = document.querySelectorAll('.close-btn');

  if (textBlock[numArg-1].querySelector('open')) {
      textBlock[numArg-1].classList.remove('open');
    } else {
      textBlock.forEach(element => {
        element.classList.remove('open');
      });
      textBlock[numArg-1].classList.add('open');
    }
    for (let x = 0; x < closeBtn.length; x++) {

      closeBtn[x].onclick = function() {
      textBlock.forEach(element => {
        element.classList.remove('open');
      });
    }
    }
    
}

