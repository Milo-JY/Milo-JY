'use strict';

const header = document.querySelector('header'),
    menuBtn = header.getElementsByTagName('a'),
    contents = header.querySelector('contents'),
    main = document.querySelector('main');

let beforeBtn = menuBtn[0],
    beforeContent = contents.children[0];

function boxLoadBtn(currentBtn) {
    beforeContent.style.display = 'none';

    let currentContent = contents.querySelector(currentBtn.getAttribute('href'));

    currentContent.style.display = 'block';

    beforeContent = currentContent;
}

// function scrollTop () {

// }

viewBtn(beforeBtn);

// ============함수^

header.addEventListener('click', (e) => {
const eventTarget = e.target;

if (eventTarget.tagName === 'a') {
    beforeBtn.classList.remove('selected');
    beforeBtn.classList.remove('selected');
}
});