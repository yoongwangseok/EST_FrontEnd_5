// 요소 접근
console.log(document);

// 1. getElementById: id 값을 이용 -> 단일 요소
const description = document.getElementById("description");
description.style.border = "1px solid black";
console.log("id:", description);

// 2. querySelector: css 선택자, 선택자와 일치하는 첫번째 요소
// method-list 클래스
const methodList = document.querySelector(".method-list");
console.log(methodList);

const mainTitle = document.querySelector("#title");
console.log(mainTitle);

// 여러 개의 요소를 가져오는 함수
//1. getElementsByClassName : 클래스명으로 다중 요소 접근
const multipleMethods = document.getElementsByClassName("multiple");
console.log(multipleMethods); // HTMLCollection
console.log(multipleMethods[0]);

// 2. getElementsByTagName : HTML 태그 이름으로 다중 요소 접근
const listItems = document.getElementsByTagName("li");
console.log(listItems); // HTMLCollection
console.log(listItems[0]);

// 3. querySelectorAll : 선택자를 이용해서 다중 요소에 접근
const listMultipleItems = document.querySelectorAll("li.multiple");
console.log(listMultipleItems); // NodeList
console.log(listMultipleItems[0]);

// 범위 지정: 선택한 요소를 기준으로 자식 요소를 선택
// getElementById는 document에서만
// 클래스, 클래스와 일치하는 첫 번째 요소 ->
const methodSingleList = document.querySelector(".method-list");
console.log(methodSingleList);
const singleItems = methodSingleList.querySelectorAll("li");
console.log(singleItems); // NodeList

// HTMLCollection vs NodeList
console.log("=== HTMLCollection vs NodeList ===");
const listItems2 = document.getElementsByClassName("multiple");
const listMultipleItems2 = document.querySelectorAll(".multiple");

// JS코드를 이용해서 multiple 요소를 추가

// HTMLCollection : HTML 요소만 선택, 실시간 변경
// forEach, map과 같은 순회 메서드 제공X
console.log(listItems2);

// NodeList : 노드(HTML 요소 노드, 텍스트노드, 주석노드)를 포함, 실시간 변경X
// forEach, map과 같은 순회 메서드 제공
console.log(listMultipleItems2);
console.log(methodSingleList.childNodes);

console.log("--- HTMLCollection forEach ---");
// 배열의 메서드
// HTMLCollection -> 배열로 변환 Array.from
// listItems2.forEach((el) => {
//   console.log(el);
// });
const itemArray = Array.from(listItems2);
console.log("itemArray:", itemArray);
Array.from(listItems2).forEach((el) => {
  console.log(el);
});

console.log("--- NodeList forEach ---");
listMultipleItems2.forEach((el) => {
  console.log(el);
});
