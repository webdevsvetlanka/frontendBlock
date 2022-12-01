let liColor = document.querySelectorAll('#ul li'),
    ul = document.querySelector('#ul');


for (let i = 0; i<liColor.length; i++) {
  liColor[i].onclick = function(e) {
    if (e.ctrlKey || e.metaKey) {
      this.classList.toggle('selected');
    } else if (this.querySelector('selected')) {
      this.classList.remove('selected');
    } else {
      liColor.forEach(element => {
        element.classList.remove('selected');
      });
      this.classList.add('selected');
    }
  }
}
// console.log(liColor);