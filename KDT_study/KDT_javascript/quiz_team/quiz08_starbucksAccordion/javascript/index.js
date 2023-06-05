'use strict';

// 큰기능
// 1. service_header클릭 시 service_body 클래스 적용 해제
// 2. service_body 쇼업 시 header "-"가 "+"로 텍스트 변경("+ Lorem ipsum dolor sit amet." 전체 텍스트 교체?
// 3. btn_collapseAll 버튼 클릭 시 전체 쇼업 취소

// ==========1차 결과
// const service_container = document.querySelector('.service_container'),
//     service_list = service_container.getElementsByClassName('service_list'),
//     service_header = service_container.getElementsByClassName('service_header'),
//     btn_collapseAll = service_container.querySelector('.btn_collapseAll');

// let currentIdx = 0;

// service_container.addEventListener('click', (e)=>{
//     for (let i = 0; i < service_list.length; i++) {
//         if (e.target === service_header[i]) {
//             service_list[currentIdx].classList.add('hidden');
//             service_header[currentIdx].textContent = '+ Lorem ipsum dolor sit amet.';
            
//             service_list[i].classList.remove('hidden');
//             service_header[i].textContent = '- Lorem ipsum dolor sit amet.';
//             currentIdx = i;
//         }
//     }
    
//     if (e.target === btn_collapseAll) {
//         service_list[currentIdx].classList.add('hidden');
//         service_header[currentIdx].textContent = '+ Lorem ipsum dolor sit amet.';
//     }
// });


// ===========정답 풀이

const service_container = document.querySelector('.service_container'),
    service_list = service_container.getElementsByClassName('service_list'),
    btn_collapseAll = service_container.querySelector('.btn_collapseAll');

let beforeList = service_list[0];

function closeBeforeList() {
    beforeList.classList.add('hidden');
    beforeList.children[0].textContent = beforeList.children[0].textContent.replace('-', '+');
    // beforeList.children[0].textContent = `+${beforeList.children[0].textContent.slice(1)}`;
}

service_container.addEventListener('click', (e) => {
    const targetEvent = e.target;

    if (targetEvent.className === "service_header") {
        closeBeforeList();
        
        targetEvent.parentNode.classList.remove('hidden');
        targetEvent.textContent = targetEvent.textContent.replace('+', '-');

        beforeList = targetEvent.parentNode;
    }
});

btn_collapseAll.addEventListener('click', closeBeforeList);




// ===연습

// const service_container = document.querySelector('service_container'),
// service_list = service_container.getElementsByClassName('service_list'),
// btn_collapseAll = service_container.querySelector('btn_collapseAll');

// let beforeList = service_list[0]

// function closeBeforeList