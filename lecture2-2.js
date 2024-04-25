// 2.2 단락평가
// 특정 상황에서 굳이 계산이나 호출하지 않아도 값을 알게 되는 것

function returnFalse() {
  console.log("False 함수");
  return false;
}

function returnTrue() {
  console.log("True 함수"); // 출력 안 됨 ! Why? -> 단락평가 때문 ! 이미 false라서 여기엔 접근 조차 안함 !
  return true;
}

console.log(returnFalse() && returnTrue());

// 활용 사례
function printName(person) {
  console.log(person && person.name);
}
