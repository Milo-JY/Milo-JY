'use strict';


// default는 한개만 된다.
// export default function executable(e) {
//     let beforeEventTime = -new Date();
//     return function() {
//         if (new Date() - beforeEventTime > e + 100) {
//             beforeEventTime = new Date();

//             return true;
//         }
//     }
// }