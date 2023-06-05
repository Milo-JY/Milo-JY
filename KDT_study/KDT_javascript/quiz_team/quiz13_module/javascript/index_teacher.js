'use strict';

const page_container = document.querySelector('.page_container'),
    pageFrame = page_container.querySelector('.pageFrame'),
    img = page_container.getElementsByClassName('img'),
    btn = page_container.getElementsByTagName('button');

const img_ar = [
    './image/bg1.jpg',
    './image/bg2.jpg',
    './image/bg3.jpg',
    './image/bg4.jpg',
];

let pageInx = 0,
    beforeEventTime = -new Date();

const DELAYTIME = 750;

// =========================================================================

for (let i = 0; i < img_ar.length; i++) {
    img[i].style.background = `url(${img_ar[i]}) center/100% 100%`;
}

// =========================================================================

function executable() {
    if (new Date() - beforeEventTime > DELAYTIME + 100) {
        beforeEventTime = new Date();

        return true;
    }
}

function downBtn() {
    if (executable()) {
        if (pageInx < img_ar.length - 1) {
            pageFrame.style.top = `${++pageInx * -100}%`;
        }
    }    
}

function upBtn() {
    if (executable()) {
        if (pageInx > 0) {
            pageFrame.style.top = `${--pageInx * -100}%`;
        }
    }    
}

// =========================================================================

btn[0].addEventListener('click', upBtn);
btn[1].addEventListener('click', downBtn);

window.addEventListener('wheel', (e) => {
    if (e.deltaY > 0) {
        downBtn();
    } else {
        upBtn();
    }
});