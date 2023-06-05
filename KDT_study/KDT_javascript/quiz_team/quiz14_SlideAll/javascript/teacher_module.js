'use strict';

export default function executable(DELAYTIME) {
    let beforTime = -new Date();
    
    return function () {
        const currentTime = new Date();

        if (currentTime - beforTime > DELAYTIME + 100) {
            beforTime = currentTime;

            return true;
        }
    };
}