`use strict`

const page_container = document.querySelector(`.page_container`),
    pageFrame = page_container.querySelector(`.pageFrame`),
    button = page_container.getElementsByTagName(`button`);

let slide_idx = 0;
let beforeEventTime = -new Date();
let moveAll = 0;

function exectable() {
    let currentEventTime = new Date();

    if (currentEventTime - beforeEventTime > 1000) {
        beforeEventTime = currentEventTime;
        return true;
    }
}

function moveScroll(pM, isOk) {
    if(exectable()) {
        let moveInter = setInterval(() => {
            scrollBy(0, pM);
            moveAll += pM;

            if(isOk()) {
                clearInterval(moveInter);
                moveAll = 0;
            }
        },1);
    }
}

window.addEventListener(`wheel`, (e) => {
    if(e.deltaY > 0) moveScroll(5, () => moveAll >= pageFrame.children[0].offsetHeight);
    if(e.deltaY < 0) moveScroll(-5, () => moveAll < -pageFrame.children[0].offsetHeight);
});

button[1].addEventListener(`click`, () => moveScroll(5, () => moveAll >= pageFrame.children[0].offsetHeight));            
button[0].addEventListener(`click`, () => moveScroll(-5, () => moveAll < -pageFrame.children[0].offsetHeight));