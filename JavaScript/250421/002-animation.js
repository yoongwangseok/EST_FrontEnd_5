// 애니메이션
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

ctx.fillStyle = "tomato";
let boxX = 0;
let boxY = 0;
ctx.fillRect(boxX, boxY, 50, 50);

function moveBox() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  boxX += 1;
  boxY += 1;

  ctx.fillStyle = "tomato";
  ctx.fillRect(boxX, boxY, 50, 50);

  requestAnimationFrame(moveBox);
}
// moveBox();

// 마우스를 따라 움직이는 원
ctx.clearRect(0, 0, canvas.width, canvas.height);
let mouseX = 0;
let mouseY = 0;

canvas.addEventListener("mousemove", (e) => {
  mouseX = e.offsetX;
  mouseY = e.offsetY;
  // drawCircle();
});

function drawCircle() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = "yellow";
  ctx.beginPath();
  ctx.arc(mouseX, mouseY, 10, 0, Math.PI * 2);
  ctx.fill();
}

// 키보드 입력으로 이동하는 원
// 방향키로 원을 이동 - addEventListener
// 원의 초기 위치는 가운데 (canvas.width / 2, canvas.height / 2)
// 원이 캔버스를 벗어나지 않도록

let posX = canvas.width / 2;
let posY = canvas.height / 2;
let radius = 20;
let speed = 20;

function drawKeyboardCircle() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "pink";

  ctx.beginPath();
  ctx.arc(posX, posY, radius, 0, Math.PI * 2);
  ctx.fill();
}
drawKeyboardCircle();

window.addEventListener("keydown", (e) => {
  // console.log(e.key);
  switch (e.key) {
    case "ArrowUp":
      posY -= speed;
      break;
    case "ArrowDown":
      posY += speed;
      break;
    case "ArrowLeft":
      posX -= speed;
      break;
    case "ArrowRight":
      posX += speed;
      break;
  }

  //posX, posY 제한
  if (posX < radius) posX = radius;
  if (posX > canvas.width - radius) posX = canvas.width - radius;
  if (posY < radius) posY = radius;
  if (posY > canvas.height - radius) posY = canvas.height - radius;

  drawKeyboardCircle();
});
