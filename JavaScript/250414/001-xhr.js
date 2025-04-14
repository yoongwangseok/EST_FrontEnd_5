// XHR을 이용하여 상품 정보 가져오기
function getProducts() {
  // 1. 객체 생성
  const xhr = new XMLHttpRequest();

  // 2. 요청 초기화
  xhr.open("GET", "https://dev.wenivops.co.kr/services/fastapi-crud/1/product");

  // 3. 응답 처리를 위해서 이벤트 함수를 등록
  xhr.onreadystatechange = function () {
    // 통신 완료
    if (xhr.readyState === 4) {
      // 응답 상태
      if (xhr.status === 200) {
        const data = JSON.parse(xhr.responseText);
        console.log(data);
      } else {
        console.error("Error:", xhr.status);
      }
    }
  };

  // 4. 요청 전송
  xhr.send();
}
// getProducts();

// HTTP 독립적
// 상품 목록 -> 특정한 id의 상품을 상세 조회 -> 상품 정보 업데이트
const xhr1 = new XMLHttpRequest();
xhr1.open("GET", "https://dev.wenivops.co.kr/services/fastapi-crud/1/product");

xhr1.onreadystatechange = function () {
  // 통신 완료
  if (xhr1.readyState === 4) {
    // 응답 상태
    if (xhr1.status === 200) {
      const products = JSON.parse(xhr1.responseText);
      console.log("products", products);

      if (products.length > 0) {
        const productId = products[0].id;

        const xhr2 = new XMLHttpRequest();
        xhr2.open(
          "GET",
          `https://dev.wenivops.co.kr/services/fastapi-crud/1/product/${productId}`
        );
        xhr2.onreadystatechange = function () {
          if (xhr2.readyState === 4) {
            if (xhr2.status === 200) {
              const productDetail = JSON.parse(xhr2.responseText);
              console.log(
                "productDetail:",
                productDetail.productName,
                productDetail.price
              );

              const xhr3 = new XMLHttpRequest();
              xhr3.open(
                "PUT",
                `https://dev.wenivops.co.kr/services/fastapi-crud/1/product/${productId}`
              );
              xhr3.setRequestHeader("Content-Type", "application/json");

              const updateProduct = {
                ...productDetail,
                price: productDetail.price + 1000,
              };

              xhr3.onreadystatechange = function () {
                if (xhr3.readyState === 4) {
                  if (xhr3.status === 200) {
                    console.log("Edit Success!", JSON.parse(xhr3.responseText));
                  } else {
                    console.log("Error:", xhr3.status);
                  }
                }
              };
              xhr3.send(JSON.stringify(updateProduct));
            } else {
              console.error("Error:", xhr2.status);
            }
          }
        };
        xhr2.send();
      }
    } else {
      console.error("Error:", xhr1.status);
    }
  }
};
xhr1.send();

// XHR 통신의 응답을 onreadystatechange 등록된 콜백 함수
// 콜백 지옥(callback hell): 콜백 함수의 중첩으로 가독성 저하
