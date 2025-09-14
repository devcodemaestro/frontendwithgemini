// 1. 필요한 HTML 요소를 찾아서 변수에 저장해요.
const userInfoDiv = document.getElementById("user-info");
const loadButton = document.getElementById("load-button");

// 2. 'loadButton'에 '클릭' 이벤트를 추가해요.
loadButton.addEventListener("click", function () {
  // 3. 버튼을 클릭하면 서버에 데이터를 요청해요.
  fetch("https://jsonplaceholder.typicode.com/users/1")
    .then((response) => response.json())
    .then((data) => {
      // 4. 데이터를 성공적으로 가져오면 HTML에 표시해요.
      userInfoDiv.innerHTML = `
        <h3>이름: ${data.name}</h3>
        <p>사용자명: ${data.username}</p>
        <p>이메일: ${data.email}</p>
      `;
    });
});
