'use strict';

// < 개선대상>
// 1. sticky 적용 시, css 작동이 Js보다 늦게 발생해 밀리는 현상 발생.
// 2. 그리고 타겟 설정으로 인한 스크롤 다운현상 발생.

const header = document.querySelector('header'),
    menuBtn = header.getElementsByTagName('a'),
    contents = header.querySelector('.contents'),
    main = document.querySelector('main');

let beforeBtn = menuBtn[0],
    beforeContent = contents.children[0];

function viewBtn(currentBtn) {
    beforeContent.style.display = 'none';

    let currentcontent = contents.querySelector(currentBtn.getAttribute('href'));
    currentcontent.style.display = 'block';

    beforeContent = currentcontent;
}

function scrollTop() {
    setTimeout(() => window.scroll(0, 0), 50);
}

viewBtn(beforeBtn);

// ================================================

header.addEventListener('click', (e) => {
    // a태그 클릭 시 해당 타겟 되어 있는 content박스로 가려는 성질이 있어서 버튼을 누를 때 마다 스크롤이 내려가는 현상. -> 이것을 "e.preventDefault();"로 제어한다.
    e.preventDefault();
    const eventTarget = e.target;
    
    if (eventTarget.tagName === 'A') {
        beforeBtn.classList.remove('selected');
        eventTarget.classList.add('selected');

        viewBtn(eventTarget);
        beforeBtn = eventTarget;

        scrollTop();
    }
});

window.addEventListener('load', scrollTop);