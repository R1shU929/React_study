// 1-15 객체 1
// 객체를 이용하면 현실세계에 존재하는 어떤 사물이나 개념을 표현하기 용이함
// 객체를 통해 값을 저장 !

// 1. 객체 생성
let obj1 = new Object(); // 객체 생성자
let obj2 = {}; // 객체 리터럴 (대부분 사용)

// 2. 객체 프로퍼티 (객체 속성)
let person = {
  name: "배혜윤", // key, name
  age: 21,
  hobby: "강아지산책",
};

// 3. 객체 프로퍼티 다루는 방법
// 3-1. 특정 프로퍼티에 접근 (점 표기법, 괄호 표기법)
// 1) 점 표기법
let name = person.name; // 객체 프로퍼티에서 가져와용 !
console.log(name); // 배혜윤으로 출력
// 2) 괄호 표기법
let age = person["age"];
console.log(age);

// 3.2 새로운 프로퍼티를 추가하는 방법
// 괄호나 점 표기법 사용하면 댐
person.job = "fe developer";
person["favoriteFood"] = "엽떡";

// 3.3 프로퍼티 수정하는 방법
person.job = "educator";
person["favoriteFood"] = "마라탕";

// 3.4 프로퍼티 삭제하는 방법
delete person.job;
delete person["favoriteFood"];

// 3.5 프로퍼티의 존재 유무를 확인하는 방법 (in 연산자)
let result1 = "name" in person; // name이라는 프로퍼티가 person이라는 객체 안에 있는지 확인 !
// 존재하면 true 아니면 false
