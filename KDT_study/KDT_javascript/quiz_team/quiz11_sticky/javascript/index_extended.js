'use strict';

const header = document.querySelector('header'),
    menuBtn = header.getElementsByTagName('a'),
    contents = header.querySelector('.contents'),
    main = document.querySelector('main');

let beforeBtn = menuBtn[0],
    // 이전 content요소로 담을 변수 선언.
    beforeContent = contents.children[0];

function viewBtn(currentBtn) {
    beforeContent.style.display = 'none';

    // a버튼에서 뽑은 "content1~3 또는 더 많은 수"의 개체를 커버 가능.
    let currentcontent = contents.querySelector(currentBtn.getAttribute('href'));
    currentcontent.style.display = 'block';

    beforeContent = currentcontent;
}

function setmainMarginTop() {
    main.style.marginTop = header.offsetHeight + 'px';
}

viewBtn(beforeBtn);
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

//=====연습

