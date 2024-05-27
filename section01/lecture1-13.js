// 1-13 콜백 함수
// 1. 콜백함수
function main(value) {
  console.log(1);
  value();
}

function sub() {
  // 콜백함수
  console.log("i am sub");
}

main(sub); // main에 담겨 실행되는 sub
// 콜백은 원하는 시간에 호출 가능

// 2. 콜백함수의 활용
function repeat(count) {
  for (let idx = 1; idx <= count; idx++) {
    console.log(idx);
  }
}

function repeatDouble(count) {
  for (let idx = 1; idx <= count; idx++) {
    console.log(idx * 2);
  }
}

// 이렇게 비슷한 함수 중복해서 여러번 호출 (중복코드)

function repeat(count1, callback) {
  for (let idx = 1; idx <= count1; idx++) {
    callback(idx);
  }
}

repeat(5, function (idx) {
  console.log(idx);
});
