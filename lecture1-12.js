// 1-12 함수표현식 화살표 함수
// 2. 함수표현식
function funcA() {
  // console.log("funcA");
}

let varA = funcA;
varA();

let varB = function () {
  // 익명함수
  //  console.log("funcB"); // 함수 만들자마자 바로 변수에 담기 가능
};

varB();
funcB(); // 오류

// 2. 화살표 함수
let varC = () => 1;
console.log(varc());
// 매개변수 필요시 괄호 안에 넣기
// 예시
let varD = (value) => value + 1;
console.log(varc(10)); // 11 출력
