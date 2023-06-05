'use strict';

// 중첩루프 특성 : 외곽 구조변수 값이 항상 고정되어 있는 상태에서 안쪽구조변수 값이 변하는 특성

for (let i = 0; i < 5; i++) {
    // i는 고정인 상태에서 j는 변한다.(i = 0의 고정에서 j를 0~4까지 반복)
    for (let j = 0; j < 5; j++) {
        console.log(`i = ${i}, j = ${j}`)
    }
    console.log()
}

// i = 0, j = 0
// i = 0, j = 1
// i = 0, j = 2
// i = 0, j = 3
// i = 0, j = 4

// i = 1, j = 0
// i = 1, j = 1
// i = 1, j = 2
// i = 1, j = 3
// i = 1, j = 4

// i = 2, j = 0
// i = 2, j = 1
// i = 2, j = 2
// i = 2, j = 3
// i = 2, j = 4

// i = 3, j = 0
// i = 3, j = 1
// i = 3, j = 2
// i = 3, j = 3
// i = 3, j = 4

// i = 4, j = 0
// i = 4, j = 1
// i = 4, j = 2
// i = 4, j = 3
// i = 4, j = 4