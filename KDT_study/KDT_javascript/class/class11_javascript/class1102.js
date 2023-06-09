/*
    < childNodes >

- 지정한 요소의 자식 요소들에 대한 참조를 배열 형태로 반환.
  단, 포함되는 자식 요소는 개행문자나 주석도 개별 요소로 각기 배열에 할당됨에 주의.

===========================================================================================

    < children >

- 지정한 요소의 자식 요소들에 대한 참조를 배열 형태로 반환하되,
  childNodes 와 달리 개행문자나 주석은 개별 요소로 포함되지 않음.

  따라서 아래 함수 코드 "openList.childNodes[1].textContent" 는
  "openList.children[0].textContent" 로 변경하여 참조 가능.
*/