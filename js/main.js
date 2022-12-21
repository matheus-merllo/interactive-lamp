
const button = document.querySelector('.button');
const body = document.querySelector('body');
const audio = document.querySelector('audio');

button.addEventListener('click', switchFunction);

function switchFunction(){
    body.classList.toggle('on');
    audio.play();
}