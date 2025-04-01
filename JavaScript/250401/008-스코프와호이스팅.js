// 호이스팅
// 변수의 선언부가 스코프의 최상단으로 끌어올려지는 것처럼 동작
console.log(value); // 오류 X
var value = "hello";
// (1) 선언 var value; (2) 할당 value = "hello";

// 내부적
/*
var value; // 할당한 값이 X -> undefined
console.log(value);
value = 'hello';
*/

// let과 const 호이스팅
console.log(value2);
let value2 = "hello";

// 내부적
/*
let value2; // 초기화가 되지 X, 일시적 사각지대
console.log(value2);
value2 = "hello";
*/
