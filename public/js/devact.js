const title = document.querySelector('.biography-job-title');
const txt = "Développeur Web";

function typewriter(word, index){
    if(index < word.length){
        setTimeout(() => {
            title.innerHTML += `<span>${word[index]}</span>`
            typewriter(txt, index +1);
        }, 300);
    } else if (index === word.length){

        setTimeout(() => {
            title.innerHTML = ""
            typewriter(txt, 0)
        }, 10000)
    }
}
setTimeout(() => {
    typewriter(txt, 0)
}, 500);


window.addEventListener('scroll', function() {
    const header = document.getElementById('header');
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    if (scrollTop > 0) {
      header.classList.add('header-border');
    } else {
      header.classList.remove('header-border');
    }
  });
  
