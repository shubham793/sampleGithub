let ufo = document.querySelector(".ufo");

ufo.addEventListener('mousemove', (e)=>{
    let eye = document.querySelector('.eyes');
    let mouseX = (eye.getBoundingClientRect().left)
    let mouseY = (eye.getBoundingClientRect().top)
    let radianDegress = Math.atan2(e.pageX - mouseX, e.pageY - mouseY);
})