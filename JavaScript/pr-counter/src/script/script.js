// 1. 요소 선택
const $countText = document.getElementById("count-text");
// DOM 요소는 변수명 앞에 $를 표시
// console.log($countText);

const $decreaseBtn = document.getElementById("decrease-btn");
const $resetBtn = document.getElementById("reset-btn");
const $increaseBtn = document.getElementById("increase-btn");
console.log($decreaseBtn, $resetBtn, $increaseBtn);

let count = 0;

function renderCounter() {
  // 1. 컨텐츠를 변경: innerHTML, innerText, textContent
  $countText.innerText = count;

  // 2-1. count 값에 따라 스타일 조작
  // if (count > 0) {
  //   // 양수: 빨간색
  //   // background-color (x) -> backgroundColor (o)
  //   $countText.style.color = "red";
  // } else if (count < 0) {
  //   // 음수: 파란색
  //   $countText.style.color = "blue";
  // } else {
  //   $countText.style.color = "black";
  // }

  // 2-2. 클래스를 이용한 스타일 조작
  if (count > 0) {
    $countText.classList.add("positive");
    $countText.classList.remove("negative");
  } else if (count < 0) {
    $countText.classList.remove("positive");
    $countText.classList.add("negative");
  } else {
    // count === 0
    $countText.classList.remove("positive", "negative");
  }
}

$decreaseBtn.addEventListener("click", () => {
  count--;
  renderCounter();
});

$resetBtn.addEventListener("click", () => {
  count = 0;
  renderCounter();
});

$increaseBtn.addEventListener("click", () => {
  count++;
  renderCounter();
});
