// const accordion = document.querySelectorAll(".container");

// for (let i = 0; i < accordion.length; i++) {
//     accordion[i].addEventListener('click', function () {
//         this.classList.toggle('active')
//     });
    
// }

function toggleContainer(label) {
    var container = label.parentNode;
    container.classList.toggle('active');
  }
