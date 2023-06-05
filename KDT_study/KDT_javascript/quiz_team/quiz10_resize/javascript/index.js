'use strict';

// a태그 selected로 색깔적용
// '#content1'~ 로 div태그 content1~3 참조

// const header = document.querySelector('header'),
//     a = header.getElementsByTagName('a'),
//     main = document.querySelector('main');

// let beforeA = a[0];
// let beforeId = document.getElementById('content1');

// beforeId.style.display = 'block';
// main.style.marginTop = `${header.offsetHeight}px`;

// // ====================================================

// header.addEventListener('click', (e) => {
//     const afterA = e.target.closest('a');

//     if(afterA){
//         beforeA.classList.remove('selected');
//         afterA.classList.add('selected');
//         beforeA = afterA;
    
//         let getHref = beforeA.getAttribute('href').slice(1);
//         let targetId = document.getElementById(`${getHref}`);
    
//         beforeId.style.display = 'none';
//         targetId.style.display = 'block';
//         beforeId = targetId;
    
//         main.style.marginTop = `${header.offsetHeight}px`;
//     }
// });

// // =====================================================

// window.addEventListener('resize', () => {
//     main.style.marginTop = `${header.offsetHeight}px`;
// })



// ==========정답풀이

'use strict';

const header = document.querySelector('header'),
    menuBtn = header.getElementsByTagName('a'),
    contents = header.querySelector('.contents'),
    main = document.querySelector('main');

let beforeBtn = menuBtn[0];

// 보이기 유무에 대한 모듈화
function viewBtn(currentBtn) {
    // 
    contents.querySelector(beforeBtn.getAttribute('href')).style.display = 'none';
    contents.querySelector(currentBtn.getAttribute('href')).style.display = 'block';
}

function setmainMarginTop() {
    main.style.marginTop = header.offsetHeight + 'px';
}

viewBtn(beforeBtn);
// 처음에 호출 한번 필요.
setmainMarginTop();

header.addEventListener('click', (e) => {
    const eventTarget = e.target;
    
    if (eventTarget.tagName === 'A') {
        beforeBtn.classList.remove('selected');
        eventTarget.classList.add('selected');

        viewBtn(eventTarget);
        setmainMarginTop();

        beforeBtn = eventTarget;
    }
});

window.addEventListener('resize', setmainMarginTop);