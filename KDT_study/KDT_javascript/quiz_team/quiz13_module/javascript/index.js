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

let pageInx = 0;

const DELAYTIME = 850;

let bb =executable(DELAYTIME);

// =========================================================================
import executable from "./index_module.js";

for (let i = 0; i < img_ar.length; i++) {
    img[i].style.background = `url(${img_ar[i]}) center/100% 100%`;
}

// =========================================================================


function downBtn() {
    if (bb()) {
        if (pageInx < img_ar.length - 1) {
            pageFrame.style.top = `${++pageInx * -100}%`;
        }
    }    
}

function upBtn() {
    if (bb()) {
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