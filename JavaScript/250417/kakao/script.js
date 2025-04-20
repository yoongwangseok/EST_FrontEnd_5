const REST_API_KEY = "e50ce7c839747bde72a0c2260b78b6d8";
const BOOK_URL = "https://dapi.kakao.com/v3/search/book";

let page = 1;
let isLoading = false;
let isEnd = false;

async function searchBook() {
  const query = document.getElementById("search-input").value;

  if (query.trim() === "") return;

  if (isLoading || isEnd) return;
  isLoading = true;

  try {
    const response = await fetch(
      `${BOOK_URL}?query=${encodeURIComponent(query)}&page=${page}&size=10`,
      {
        headers: {
          Authorization: `KakaoAK ${REST_API_KEY}`,
        },
      }
    );

    if (!response.ok) {
      throw new Error("HTTP 응답 중 오류");
    }

    const data = await response.json();
    console.log(data);

    if (data.documents.length === 0) {
      isEnd = true;
      document.getElementById("loading-observer").textContent =
        "검색 결과가 없습니다.";
      return;
    } else if (data.meta.is_end) {
      isEnd = true;
      renderBook(data?.documents);

      return;
    }
    renderBook(data?.documents);
    page++;
  } catch (error) {
    console.error("검색 실패:", error);
  } finally {
    isLoading = false;
  }
}

const searchForm = document.getElementById("search-form");
searchForm.addEventListener("submit", (e) => {
  e.preventDefault();
  page = 1;
  isEnd = false;
  searchBook();
  const resultDiv = document.getElementById("results");
  resultDiv.innerHTML = "";
});

function renderBook(books) {
  const resultDiv = document.getElementById("results");

  books.forEach((book) => {
    const bookDiv = document.createElement("div");
    bookDiv.innerHTML = `
    <h3>${book.title}</h3>
    <img src="${book.thumbnail}" alt=""/>
    <p>저자: ${book.authors.join(", ")}</p>
    `;
    resultDiv.appendChild(bookDiv);
  });
}

// TODO: IntersectionObserver를 이용해서 로딩 요소가 화면에 들어오면
// 새롭게 데이터를 요청하는 코드
const config = {
  root: null,
  rootMargin: "0px",
  threshold: 0.8,
};
const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting && !isEnd) {
      searchBook();
    }
  });
}, config);
const loadingObserver = document.getElementById("loading-observer");
observer.observe(loadingObserver);
