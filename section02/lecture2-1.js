// 2-1 Truthy & Falsy
// js는 참이나 거짓을 의미하지 않는 값도 조건문 내에서 참과 거짓으로 평가됨
// 모든 값은 truthy나 falsy로 표시 가능함

// 1. Falsy한 값
let f1 = undefined;
let f2 = null;
let f3 = 0;
let f4 = -0;
let f5 = NaN;
let f6 = "";
let f7 = 0n;

// 2. Truthy한 값
let t1 = "hello";
let t2 = 123;
let t3 = [];
let t4 = {};
let t5 = () => {};

if (t5) {
  console.log("Truthy");
}

// 3. 활용 사례

function printName(person) {
  if (!person) {
    console.log("person 값이 없음");
    return;
  }
  console.log(person.name);
}

let person = { name: "이정환" };
printName(person);
