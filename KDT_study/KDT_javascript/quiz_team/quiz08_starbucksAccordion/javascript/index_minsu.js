`use strict`

const service_container = document.querySelector(`.service_container`),
    service_header = service_container.getElementsByClassName(`service_header`),
    btn_collapseAll = service_container.querySelector(`.btn_collapseAll`);


service_container.addEventListener(`click`, (e) => {
    const targetEvent = e.target;
    
    if(targetEvent.className === `service_header`) {
        
        if(targetEvent.parentNode.classList.contains(`hidden`)) {

            targetEvent.parentNode.classList.remove(`hidden`);
            targetEvent.textContent = `-${targetEvent.textContent.slice(1)}`;
        } else {

            targetEvent.parentNode.classList.add(`hidden`);
            targetEvent.textContent = `+${targetEvent.textContent.slice(1)}`;
        }
    }

    if(targetEvent === btn_collapseAll) {
        for (let i = 0; i < service_header.length; i++) {
            service_header[i].parentNode.classList.add(`hidden`);
            service_header[i].textContent = `+${service_header[i].textContent.slice(1)}`;
        }
    }
});