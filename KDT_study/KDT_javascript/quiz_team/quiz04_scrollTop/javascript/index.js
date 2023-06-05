`use strict`

const scrollBox = document.querySelector(`.scrollTop`);

// 스크롤 이벤트가 발생 : scrollTop 버튼 보이기

document.addEventListener('scroll', () => {
    
    if(scrollY > window.innerHeight / 3) {
        scrollBox.classList.add(`opacity`);
    } else {
        scrollBox.classList.remove(`opacity`);
    }
})

// 스크롤탑 버튼을 클릭했을 때

scrollBox.addEventListener('click', function(){

    let stopTimeout = setInterval(() => {
        window.scrollBy(0, -3);

        if (window.scrollY <= 0) {          
            clearInterval(stopTimeout);
        }  
    }, 1)
});

scrollBox.addEventListener('mouseenter' , () => {

    scrollBox.classList.add(`hover`);
});

scrollBox.addEventListener('mouseleave' , () => {

    scrollBox.classList.remove(`hover`);
});