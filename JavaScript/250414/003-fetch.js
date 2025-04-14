// Fetch API
// - promise를 기반으로 동작

// 통신 성공 -> fulfilled / 실패 -> rejected
function getProducts() {
  fetch("https://dev.wenivops.co.kr/services/fastapi-crud/1/product")
    .then((response) => {
      // console.log(response);
      // HTTP 응답 객체
      // 응답 본문 파싱: 비동기 작업 (promise 반환)
      // -> .text(), .json(), .blob(), .formData()
      return response.json();
    })
    .then((json) => {
      console.log(json);
    })
    .catch((error) => {
      console.error(error);
    });
}
// getProducts();

// 상품 생성하기
function createProduct() {
  fetch("https://dev.wenivops.co.kr/services/fastapi-crud/1/product", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      id: 10,
      productName: "[new] 개발 노트",
      price: 15000,
      stockCount: 10,
      thumbnailImg: "",
      option: [],
      discountRate: 0,
      shippingFee: 2500,
      detailInfoImage: [],
      viewCount: 100,
      pubDate: new Date().toISOString(),
      modDate: new Date().toISOString(),
    }),
  })
    .then((response) => {
      console.log(response);
      if (!response.ok) {
        throw new Error("상품 생성에 실패했습니다");
      }
      return response.json();
    })
    .then((data) => {
      console.log(data);
      getProducts();
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}
// catch -> promise가 rejected
// createProduct();

function modifyProduct(id, price = 10000) {
  fetch(`https://dev.wenivops.co.kr/services/fastapi-crud/1/product/${id}`)
    .then((response) => {
      if (!response.ok) {
        throw new Error("상품 상세 조회 실패");
      }
      return response.json();
    })
    .then((data) => {
      console.log(data);

      const updateData = {
        ...data,
        price: price, // price로 축약 가능
        mobDate: new Date().toISOString(),
      };

      return fetch(
        `https://dev.wenivops.co.kr/services/fastapi-crud/1/product/${id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(updateData),
        }
      );
    })
    .then((response) => {
      if (!response.ok) {
        throw new Error("상품 수정 실패");
      }
      return response.json();
    })
    .then((data) => {
      console.log("상품 수정 성공");
      getProducts();
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}
modifyProduct(1, 15000);
