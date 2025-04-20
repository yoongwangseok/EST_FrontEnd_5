const parent = document.getElementsByClassName("parent")[0];

// const img = parent.getElementsByTagName("img")[0];
// console.log("img", img);
// img.src =
//   "https://miro.medium.com/v2/resize:fit:720/format:webp/1*nZaiJiMSPGsLGp9oiUoWsA.png";

// const figCap = parent.querySelector(".figCap");
// figCap.textContent = "개리는 무엇을 먹을지 고민합니다.";

// 요소를 기준으로 탐색
const figure = parent.firstElementChild;
const img = figure.firstElementChild;
const figCap = figure.lastElementChild;

img.src =
  "https://miro.medium.com/v2/resize:fit:720/format:webp/1*nZaiJiMSPGsLGp9oiUoWsA.png";
figCap.textContent = "개리는 무엇을 먹을지 고민합니다.";
