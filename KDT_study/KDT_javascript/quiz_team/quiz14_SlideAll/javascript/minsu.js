`use strict`

const body = document.querySelector(`body`),
    main_container = body.querySelector(`.main_container`),
    slide_list = main_container.querySelector(`.slide_list`),
    li = main_container.getElementsByTagName(`li`),
    leftRight = main_container.getElementsByTagName(`a`),
    pager = main_container.querySelector(`.pager`);

for (let i = 0; i < li.length; i++) {
    pager.appendChild(document.createElement('button'));
}

const button = pager.getElementsByTagName(`button`);

let lastIdx = 0;
let autoSlide;
let beforeEventTime = -new Date();

button[0].classList.add(`opacityOne`);

function executable() {
    if (new Date() - beforeEventTime > 1250) {
        beforeEventTime = new Date();

        return true;
    }
}

function hideBtn() {
    leftRight[0].classList.remove(`nonVisible`);
    leftRight[1].classList.remove(`nonVisible`);
    if(lastIdx === 0) leftRight[0].classList.add(`nonVisible`);
    if(lastIdx === li.length-1) leftRight[1].classList.add(`nonVisible`);
}

function moveSlide(pM, num) {
    li[num].style.left =`${pM * 100}%`;

    setTimeout(()=> {
        li[num].classList.add(`transition`);
        li[lastIdx].classList.add(`transition`);
        li[num].style.left =`${0}%`;
        li[lastIdx].style.left = `${-pM * 100}%`;
        button[lastIdx].classList.remove(`opacityOne`);
        lastIdx = num;
        button[num].classList.add(`opacityOne`);
        hideBtn();
    }, 150);

    setTimeout(()=> {
        li[num].classList.remove(`transition`);
        li[lastIdx].classList.remove(`transition`)
    }, 1200);

}

pager.addEventListener(`click`, (e) => {
    if(executable()) {
        for (let i = 0; i < button.length; i++) {
            if(e.target === button[i]) {
                if (i > lastIdx) moveSlide(1, i);
                if (i < lastIdx) moveSlide(-1, i);
            }
        }
    }
});

leftRight[0].addEventListener(`click`, () => {
    if(executable()) {

        moveSlide(-1, lastIdx-1);
    }
});

leftRight[1].addEventListener(`click`, () => {
    if(executable()) {

        moveSlide(1, lastIdx+1);
    }
});

slide_list.addEventListener(`mouseenter`, () => {
    if(executable()) {
        moveSlide(1, lastIdx+1);
    }
});
