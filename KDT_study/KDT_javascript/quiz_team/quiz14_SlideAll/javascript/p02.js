const main_container = document.querySelector('.main_container'),
    slide_list = main_container.querySelector('.slide_list'),
    li = slide_list.getElementsByTagName('li'),
    btn_back = main_container.querySelector('.btn_back'),
    btn_foward = main_container.querySelector('.btn_foward'),
    pager = main_container.querySelector('.pager');

/* 딜레이함수================================================== */

let beforeEventTime = -new Date();

function executable() {
    let currentEventTime = new Date();

    if (currentEventTime - beforeEventTime > 1000) {
        beforeEventTime = currentEventTime;

        return true;
    }
}

/* pager a생성========================================================= */
for (let i = 0; i < li.length; i++) {
    pager.appendChild(document.createElement('a')).dataset.direction = `${i}`;
}

const pager_btn = pager.getElementsByTagName('a');

pager_btn[0].classList.add('opacityOff');