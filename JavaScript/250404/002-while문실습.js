console.log("[실습] 1부터 10까지의 랜덤 숫자를 맞추는 게임"); // (~40분)
// 1. 랜덤한 숫자
// 2. 사용자가 정답을 맞출때까지 입력을 반복해서 받으면 됩니다.
// 3. 입력값이 정답보다 크거나/ 작은지 출력, 일치할때는 정답입니다!를 출력하면 됩니다.
// (추가) 몇 번째에 정답을 맞췄는지 횟수를 함께 출력
// 0 < Math.random() < 1
// 0 < Math.random()*10 < 10
// 1 < Math.random() *10 + 1 < 11
// 1 <= Math.random() <= 10
let answer = Math.floor(Math.random() * 10 + 1);
// Math.floor(Math.random()*10)+1
console.log(answer);
let input;
let attemps = 0;

do {
  input = prompt("숫자를 추측해보세요");
  attemps++;

  if (parseInt(input) === answer) {
    console.log("정답입니다!");
    console.log(`${attemps}번만에 정답을 맞췄습니다.`);
    break;
  } else if (parseInt(input) < answer) {
    console.log("더 큰 숫자를 입력하세요");
  } else if (parseInt(input) > answer) {
    console.log("더 작은 숫자를 입력하세요.");
  }
} while (input !== answer);
