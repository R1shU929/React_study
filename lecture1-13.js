// 1-13 콜백 함수
// 1. 콜백함수
function main(value) {
  console.log(value);
}

function sub() {
  // 콜백함수
  console.log("i am sub");
}

main(sub);
