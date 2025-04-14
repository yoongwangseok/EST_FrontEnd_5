// 1. DOM 요소 선택
const $loginForm = document.getElementById("login-form");
// $loginForm.style.border = "1px solid red";

const $usernameInput = document.getElementById("username");
const $passwordInput = document.getElementById("password");
const $rememberCheckbox = document.getElementById("remember");
const $labelRemember = $rememberCheckbox.parentElement;
const $loginBtn = document.getElementById("login-btn");

const $usernameError = document.getElementById("username-error");
const $passwordError = document.getElementById("password-error");
const $loginError = document.getElementById("login-error");

const API_URL = "https://dev.wenivops.co.kr/services/fastapi-crud";

function signup(username, password) {
  fetch(`${API_URL}/1/signup`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username, // username:username
      password, // password:password
    }),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("회원가입에 실패했습니다.");
      }
      return response.json();
    })
    .then((data) => {
      console.log(data);
      if (data?.message === "User created successfully") {
        alert("회원가입 성공!");
      } else if (data?.message == "User already exists") {
        alert("이미 존재하는 회원입니다.");
      }
    })
    .catch((error) => {
      console.error("회원가입 오류:", error);
    });
}

function getUserList() {
  fetch(`${API_URL}/1/login_user_info`)
    .then((response) => {
      if (!response.ok) {
        throw new Error("유저 정보 조회에 실패했습니다.");
      }
      return response.json();
    })
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.error("유저 정보 조회 오류:", error);
    });
}

function login(username, password) {
  return fetch(`${API_URL}/1/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username,
      password,
    }),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("로그인에 실패했습니다.");
      }
      return response.json();
    })
    .then((data) => {
      if (data?.message === "Login success") {
        // Login Success
        return data;
      } else {
        // Login Failed
        throw new Error("아이디 혹은 비밀번호가 일치하지 않습니다.");
      }
    });
}

$loginForm.addEventListener("submit", (e) => {
  e.preventDefault(); // submit 기본 동작을 막을 수가 있다.

  // 1. 사용자가 입력한 아이디(username), 비밀번호
  const username = $usernameInput.value;
  const password = $passwordInput.value;

  // 2. 유효성 검사
  // 아이디 값이 비어있으면 -> 아이디를 입력하세요.
  const isUsernameValid = username.trim() !== "";
  // console.log("isUsernameValid", isUsernameValid);
  if (isUsernameValid) {
    // 유효한 경우 -> 오류 정보를 제거
    $usernameInput.classList.remove("error");
    $usernameError.style.display = "none";
  } else {
    // 유효하지 않은 경우 -> 오류 정보를 추가
    $usernameInput.classList.add("error");
    $usernameError.innerText = "아이디를 입력해주세요.";
    $usernameError.style.display = "block";
    $usernameInput.focus();
    return;
  }

  // 비밀번호 값이 비어있으면 -> 비밀번호를 입력하세요.
  const isPasswordValid = password.trim() !== "";
  console.log("isPasswordValid", isPasswordValid);
  if (isPasswordValid) {
    $passwordInput.classList.remove("error");
    $passwordError.style.display = "none";
  } else {
    $passwordInput.classList.add("error");
    $passwordError.innerText = "비밀번호를 입력해주세요.";
    $passwordError.style.display = "block";
    $passwordInput.focus();
    return;
  }

  // login 호출 -> promise
  // 성공인 경우 화면을 출력
  login(username, password)
    .then((data) => {
      // console.log("로그인 성공", data);
      alert(`환영합니다! ${username}님!`);
    })
    .catch((error) => {
      console.error("로그인 실패", error);

      $loginError.innerText = error?.message || "로그인에 실패했습니다.";
      $loginError.style.display = "block";
    });
});

// 입력값이 있을 때 오류 정보를 초기화
$usernameInput.addEventListener("input", () => {
  $usernameError.style.display = "none";
  $usernameInput.classList.remove("error");
  $loginError.style.display = "none";
});

$passwordInput.addEventListener("input", () => {
  $passwordError.style.display = "none";
  $passwordInput.classList.remove("error");
  $loginError.style.display = "none";
});

$rememberCheckbox.addEventListener("change", () => {
  // console.log("checkbox 변경됨", $rememberCheckbox.checked);
  // if ($rememberCheckbox.checked) {
  //   $labelRemember.classList.add("checked");
  // } else {
  //   $labelRemember.classList.remove("checked");
  // }
  $labelRemember.classList.toggle("checked");
});
