// 1-16 객체2
// 1. 상수 객체
const animal = {
  type: "고양이",
  name: "밤양갱",
  color: "black",
};

animal.age = 2; // 추가
animal.name = "태기"; // 수정
delete animal.color; // 삭제

// 2. 메서드
// 값이 함수인 프로퍼티를 말함

const person = {
  name: "배혜윤",
  sayHi() {
    console.log("안녕 !");
  },
};

person.sayHi();
