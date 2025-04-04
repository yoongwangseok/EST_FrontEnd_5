console.log("=== while ===");
{
  // 0부터 10까지 출력하는 코드
  let num = 0;
  while (num <= 10) {
    // 조건식이 참일때 반복할 코드
    console.log(num);
    num++;
  }
  console.log("반복문을 종료한 후 num:", num);
}
{
  // 10부터 1까지 역순으로 출력하기
  let i = 10;
  while (i > 0) {
    console.log(i--); // console.log(i) -> i--
  }
}

{
  console.log("--- while 중첩 ---");
  let i = 2;
  while (i <= 9) {
    console.log(`===== ${i}단 =====`);
    let j = 1;
    while (j <= 9) {
      console.log(`${i} * ${j} = ${i * j}`);
      j++;
    }

    i++;
  }
}

{
  console.log("--- 배열 출력 ---");
  const fruits = ["사과", "배", "딸기", "수박", "메론"];

  let index = 0;
  while (index < fruits.length) {
    console.log(`${index}. ${fruits[index]}`);
    index++;
  }
}

{
  console.log("--- 무한 루프와 종료 조건 ---");
  let age = 0;
  while (true) {
    // 무한 루프
    console.log(age);
    age++;
    // !! 종료 조건
    if (age > 20) break;
  }
}
{
  console.log("--- 사용자 입력 ---");
  let input;
  const validValue = [1, 2, 3, 4, 5];

  // while (true) {
  //   input = prompt("값을 입력해주세요(1,2,3,4,5)"); // string
  //   console.log(">>", validValue.includes(parseInt(input)));
  //   if (validValue.includes(parseInt(input))) {
  //     break;
  //   }
  // }
  console.log(input);
}

console.log("=== do while ===");
let num = 0;
do {
  // 조건식이 참일때 반복할 코드
  console.log(num);
  num++;
} while (num <= 10);
console.log("반복문을 종료한 후 num:", num);

{
  console.log("--- while vs do while ---");
  let number = 10;
  while (number < 10) {
    console.log("while", number);
  }

  // do while : 조건에 상관없이 최소 한 번의 실행을 보장
  number = 10;
  do {
    console.log("do while", number);
  } while (number < 10);
}
{
  console.log("--- do while을 이용한 메뉴 선택 ---");
  // let option;
  // do {
  //   console.log("\n=================");
  //   console.log("     메  뉴");
  //   console.log("=================");
  //   console.log("1. 아메리카노");
  //   console.log("2. 카페라떼");
  //   console.log("3. 초코라떼");
  //   console.log("0. 종료합니다");

  //   option = parseInt(prompt("메뉴를 입력하세요"));

  //   switch (option) {
  //     case 1:
  //       console.log("아메리카노가 주문되었습니다");
  //       break;
  //     case 2:
  //       console.log("카페라떼가 주문되었습니다");
  //       break;
  //     case 3:
  //       console.log("초코라떼가 주문되었습니다.");
  //       break;
  //     case 0:
  //       console.log("주문이 종료되었습니다");
  //       break;
  //     default:
  //       console.log("잘못된 입력값입니다.");
  //   }
  // } while (option !== 0);
}

console.log("\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n");
