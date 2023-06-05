'use strict';

const page_container = document.querySelector('.page_container'),
    pageFrame = page_container.querySelector('.pageFrame'),
    btn = page_container.getElementsByTagName('button');

let currentIdx = 0;
let beforeEventTime = -new Date();

function exectable() {
    let currentEventTime = new Date();

    if (currentEventTime - beforeEventTime > 1000) {
        beforeEventTime = currentEventTime;
        return true;
    }
}

function movePage(idxPm, is, start) {
    if (exectable()) {
        currentIdx += idxPm;
        if (is()) currentIdx = start;
    
        pageFrame.style.transform = `translateY(${-100 * currentIdx}vh)`;
    }
}

window.addEventListener('wheel', (e) => {
    if (e.deltaY >= 0) movePage(1, ()=>currentIdx > 3, 3);
    if (e.deltaY < 0) movePage(-1, ()=>currentIdx < 0, 0);
});

btn[0].addEventListener('click', (e) => movePage(-1, ()=>currentIdx < 0, 0));
btn[1].addEventListener('click', (e) => movePage(1, ()=>currentIdx > 3, 3));

/* 
    < deltaY >

- wheel 이벤트에 종속되는 이벤트 객체로써 세로 스크롤 양을 정수값 형태로 반환.
  wheel 다운은 양수값을 wheel 업은 음수값을 반환. 크롬 기준 1 회 이벤트 발생 시마다
  각각 100, -100 을 반환하나 브라우저 별로 값의 크기는 상이함에 주의.
*/


/* 
    < wheel 이벤트 > - 구버전 이벤트 : mousewheel( 현재는 사용되지 않음 )

- 마우스 휠을 조작했을 때의 이벤트.
  이벤트의 대상은 일반적으로 window 나 document 가 대상이 되며 스클롤이 생성되는
  다른 요소가 될 수도 있음.
*/