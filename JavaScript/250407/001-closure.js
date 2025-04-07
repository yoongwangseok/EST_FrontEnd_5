// 클로져
// 함수와 함수가 선언된 렉시컬 환경의 조합

function outer() {
  const outerVar = "out variable";

  return function () {
    // 함수 + 상위 스코프(렉시컬 환경)
    console.log("outerVar:", outerVar);
  };
}
const innerFunc = outer();
innerFunc();

function createCounter() {
  let count = 0;

  // 증가, 감소, count를 가져올 수 있는
  return {
    increase: function () {
      count++;
    },
    decrease: function () {
      count--;
    },
    getCount: function () {
      console.log(count);
    },
  };
}
const counter1 = createCounter();
counter1.getCount();
counter1.increase(); // count++;
counter1.getCount();

const counter2 = createCounter();
counter2.getCount();

// 타이머 함수
const timer = setTimeout(() => {
  // 실행할 함수
  console.log("타이머가 실행되었습니다!");
}, 2000); // 1000ms = 1초
clearTimeout(timer);

// 쓰로틀링
// 이벤트 발생 -> 특정 시간동안 해당 이벤트 발생 무시
function throttle(func, delay) {
  // 현재 함수가 동작 중일 때 -> 동작 처리 X
  // 현재 함수가 동작 중이 아닐 때 -> 동작 처리 / 동작 중으로 상태 변경
  let isThrottle = false;

  return function (...args) {
    if (!isThrottle) {
      func(...args);
      isThrottle = true;

      setTimeout(() => {
        isThrottle = false;
      }, delay);
    }
  };
}

const handleClick = (name) => {
  console.log(`${name} 버튼이 클릭되었습니다`);
};
const throttleClick = throttle(handleClick, 2000);
throttleClick("버튼1"); // args  ['버튼1']
throttleClick("버튼1", "버튼2"); // args['버튼1', '버튼2']
throttleClick();

// 디바운싱
// 이벤트 발생 -> 마지막 이벤트를 기준으로 일정 시간이 지났을 때 처리하는 것
// 이벤트가 발생 -> 타이머를 갱신
function debounce(func, delay) {
  let timer;

  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func(...args);
    }, delay);
  };
}
const handleInput = (input) => {
  console.log(`입력값 ${input} 이 발생했습니다`);
};
const debounceInput = debounce(handleInput, 2000);
debounceInput(1);
debounceInput(2);
debounceInput(3);
debounceInput(4);
debounceInput(5);

setTimeout(() => {
  debounceInput(1);
  debounceInput(2);
  debounceInput(3);
}, 5000);

// 클로져 단점
// 1. 구조 파악
// - 렉시컬 환경

// 가비지 컬렉터
let obj1 = {
  name: "위니브",
  age: 20,
};
obj1 = null;

// 2. 메모리 누수
// - 클로져가 참조하는 변수가 메모리에 남아있는 것
// - 필요 없는 변수를 참조하지 않도록 주의

// 3. 성능 저하
// - 클로져를 과도하게 사용하면 성능 저하의 원인
