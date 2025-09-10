## Javascript 중급

### 레이아웃 다루기

이전에 myButton과 myParagraph를 찾아서 조작했던 것처럼, 자바스크립트는 웹페이지의 모든 요소를 자유자재로 다룰 수 있는 힘을 가지고 있습니다. 이렇게 HTML 문서를 자바스크립트가 이해하고 접근할 수 있도록 객체 형태로 만든 것을 **DOM(Document Object Model)** 이라고 합니다.

지금까지는 DOM을 조작하는 아주 간단한 방법을 사용했지만, 실제 개발에서는 더 복잡하고 다양한 방식으로 DOM을 다루게 됩니다.

먼저 DOM(문서 객체 모델) 조작에 대해 좀 더 깊게 알아볼까요?

### DOM 조작

DOM 조작은 HTML 문서의 내용을 자바스크립트로 읽고, 수정하고, 새로운 요소를 추가하는 모든 작업을 의미합니다.
우리가 이전에 document.getElementById()를 사용해서 문단을 바꿨던 것도 바로 DOM 조작의 한 예시입니다.

그런데 document.getElementById() 외에도 DOM 요소를 선택하는 다양한 방법이 있습니다.

### CSS 선택자를 이용한 요소 선택

우리가 CSS 파일에 .container와 #myParagraph를 사용해서 스타일을 적용했던 것처럼, 자바스크립트도 똑같은 CSS 선택자를 사용해서 원하는 요소를 찾을 수 있습니다.

이때 사용하는 것이 바로 **document.querySelector()** 와 **document.querySelectorAll()** 입니다.

- document.querySelector(): CSS 선택자에 해당하는 첫 번째 요소를 찾습니다.

- document.querySelectorAll(): CSS 선택자에 해당하는 모든 요소를 찾아서 배열처럼 생긴 NodeList 형태로 반환합니다.

예를 들어, 우리가 만든 \<p> 태그에 class를 추가해서 그 클래스를 자바스크립트로 선택해 볼까요?

먼저, HTML 파일의 <p> 태그를 다음과 같이 수정합니다.

```html
<p class="paragraph">고양이는 쥐와 생선을 아주 좋아합니다.</p>
```

그리고 style.css 파일에는 다음과 같이 코드를 추가해서 \<p> 태그에 스타일을 적용해 봅니다.

```css
.paragraph {
  color: red;
}
```

이제 자바스크립트 파일에서 이 .paragraph 클래스를 사용해서 \<p> 태그를 선택하고, 내용을 바꿔볼게요. 다음 코드를 \<body> 태그 안의 \<script> 태그에 추가해 봅니다.

```javascript
const paragraphElement = document.querySelector(".paragraph");
paragraphElement.innerText = "새로운 내용으로 바뀌었습니다!";
```

#### 자바스크립트 파일 연결하기: \<script> 태그

HTML 파일의 \<head> 또는 \<body> 태그 안에 \<script> 태그를 사용해서 자바스크립트 파일을 연결할 수 있습니다.. 이때 src 속성으로 파일의 경로를 지정해주면 됩니다.

예를 들어, script.js라는 이름의 자바스크립트 파일을 만들었다고 가정해 봅니다.

```html
<!DOCTYPE html>
<html lang="ko">
  <head>
    <meta charset="UTF-8" />
    <title>내 웹페이지</title>
  </head>
  <body>
    <h1>안녕하세요!</h1>
    <p class="paragraph">저는 웹 개발을 배우고 있는 학생입니다.</p>

    <script src="script.js"></script>
  </body>
</html>
```

\<body> 태그의 끝에 \<script> 태그를 배치하는 것이 일반적입니다. 이렇게 하면 HTML이 먼저 로드된 후에 자바스크립트 코드가 실행되기 때문에, 자바스크립트가 HTML 요소를 문제없이 찾을 수 있게 됩니다.

### 결과

paragraph 클래스 중 첫번쨰 클래스의 글자가 **"새로운 내용으로 바뀌었습니다!"** 로 변경됩니다.

이제 자바스크립트를 HTML 파일과 따로 분리해서 관리하는 방법을 배웠습니다. 이렇게 하면 HTML 코드가 훨씬 더 깔끔해지고, 자바스크립트 코드를 수정하기도 훨씬 편해집니다.

### querySelectorAll()

지금까지는 document.querySelector()를 사용해서 첫 번째 \<p> 태그만 선택했습니다. 그런데 만약 웹페이지에 \<p> 태그가 여러 개 있다면 어떻게 될까요?

이럴 때 사용하는 것이 바로 **document.querySelectorAll()** 입니다. 이 함수는 CSS 선택자에 해당하는 모든 요소를 찾아서 반환합니다.

script.js 파일의 코드를 다음과 같이 바꿔볼까요?

```javascript
// 모든 'paragraph' 클래스를 가진 요소를 선택해요.
const paragraphElements = document.querySelectorAll(".paragraph");

// 각각의 요소에 접근해서 내용을 바꿔줘요.
paragraphElements.forEach((element) => {
  element.innerText = "모든 문단의 내용이 바뀌었습니다!";
});
```

코드가 조금 복잡해 보이지만, 두 번째 줄의 forEach는 paragraphElements에 있는 각각의 요소에 대해 innerText를 변경하는 작업을 반복해 주는 역할을 합니다.

자, 이제 이 코드를 script.js 파일에 적용하고 웹페이지를 새로고침 해봅니다.

### 결과

모든 paragraph 클래스를 가진 \<p> 태그의 글자가 **"모든 문단의 내용이 바뀌었습니다!"** 로 변경되었을 겁니다.

document.querySelectorAll()은 이렇게 특정 클래스나 태그를 가진 모든 요소를 한 번에 선택해서 조작할 때 사용되는 매우 유용한 함수입니다.

이로써 여러분은 자바스크립트로 HTML 요소를 선택하고 조작하는 가장 핵심적인 방법을 배웠습니다.

- document.getElementById(): **하나의 고유한 id** 로 요소를 찾을 때

- document.querySelector(): CSS 선택자로 첫 번째 요소를 찾을 때

- document.querySelectorAll(): CSS 선택자로 모든 요소를 찾을 때

이 세 가지 함수는 프론트엔드 개발에서 가장 많이 사용되는 DOM 조작 방법입니다.

### 비동기 처리

이제 DOM 조작의 기본을 다지셨으니, 자바스크립트의 또 다른 중요한 개념인 **비동기 처리(Asynchronous Programming)** 에 대해 알아볼까요?

웹사이트는 보통 서버에서 데이터를 가져와서 화면에 표시하는데, 이 데이터를 가져오는 데는 시간이 걸립니다. 만약 데이터가 모두 올 때까지 다른 작업을 멈추고 기다린다면, 웹사이트가 멈춘 것처럼 보일 수 있습니다.

비동기 처리는 데이터를 기다리는 동안 다른 작업을 계속 진행할 수 있도록 해주는 기술입니다. 이는 웹사이트가 멈추지 않고, 사용자에게 더 부드러운 경험을 제공하는 데 필수적인 기술입니다.

### 동기 vs. 비동기

이해하기 쉽게 '레스토랑'에 비유해서 설명해 드리겠습니다.

동기(Synchronous) 처리는 마치 한 명의 요리사가 손님의 주문을 하나씩 순서대로 처리하는 것과 같습니다.

손님이 주문하면 요리사는 그 주문이 끝날 때까지 다른 일을 하지 못하고 기다립니다.

음식이 완성되면 다음 주문을 받습니다.

만약 하나의 주문이 오래 걸린다면, 뒤에 기다리는 손님들은 모두 멈춰서 기다려야 합니다.

웹사이트에서 동기 처리를 사용하면, 서버에서 데이터를 불러오는 동안 웹사이트가 멈춘 것처럼 보일 수 있습니다.

비동기(Asynchronous) 처리는 여러 명의 요리사가 함께 일하는 것과 같습니다.

손님이 주문하면, 요리사는 주문을 접수하고 다른 요리사에게 넘겨줍니다.

이 요리사는 주문이 완료될 때까지 기다리지 않고, 다른 손님의 주문을 계속 받거나 다른 일을 할 수 있습니다.

음식이 완성되면 알림을 받고, 완성된 음식을 손님에게 가져다줍니다.

웹사이트에서 비동기 처리를 사용하면, 서버에서 데이터를 불러오는 동안에도 사용자는 웹사이트의 다른 부분들을 자유롭게 탐색할 수 있습니다.

### 비동기 처리를 구현하는 방법: Promise와 async/await

자바스크립트에서는 이 비동기 처리를 구현하기 위해 **Promise (프로미스)** 와 **async/await (어싱크/어웨이트)** 라는 문법을 주로 사용합니다.

이것들은 '미래에 완료될 작업'에 대한 약속을 나타내는 개념인데, 처음 들으면 어렵게 느껴질 수 있습니다. 하지만 결국은 '데이터를 기다리는 동안 멈추지 않고 다른 일을 할 수 있도록 해주는 도구'라고 생각하면 이해하기 쉽습니다.

다음 단계로 넘어가서, 이 비동기 처리를 사용해서 실제로 서버에서 데이터를 가져와 보는 실습을 해볼까요?

### fetch 함수로 데이터 가져오기

우리가 사용할 데이터는 웹 개발자들이 테스트용으로 자주 사용하는 JSONPlaceholder라는 웹사이트에서 제공하는 가짜 사용자 정보입니다. 이 웹사이트에 접속하면 실제 서버처럼 데이터를 주고받는 연습을 할 수 있습니다.

1. script.js 파일 열기: 우리가 이전에 만들었던 script.js 파일을 열어줍니다.

2. fetch 함수 사용하기: 아래 코드를 script.js 파일에 추가해 보세요. 이 코드는 https://jsonplaceholder.typicode.com/users/1 주소에서 첫 번째 사용자의 데이터를 가져오는 역할을 합니다.

아래의 코드를 script.js에 넣어줍니다.

```javascript
fetch("https://jsonplaceholder.typicode.com/users/1")
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
  });
```

### fetch 함수 분석

코드가 조금 낯설 수 있지만, 차근차근 보면 어렵지 않습니다.

- fetch(...): 서버에 데이터를 달라고 요청하는 부분입니다.

- .then(...): 요청이 성공적으로 완료되면 결과를 가지고 무엇을 할지 정하는 부분입니다.

- response => response.json(): 서버에서 받은 응답(response)을 자바스크립트가 이해할 수 있는 JSON 형식으로 변환하는 작업입니다.

- data => { console.log(data); }: 변환된 데이터를 받아서 **console.log** 로 출력하라는 의미입니다.

자, 이 코드를 script.js 파일에 추가하고 저장한 뒤, 웹 브라우저를 열고 F12 키를 눌러 개발자 도구를 열어봅니다. 그리고 Console(콘솔) 탭에서 어떤 내용이 출력되는지 확인해봅니다.

### fetch 결과

콘솔에 출력된 정보는 id가 1인 사용자에 대한 정보입니다.

이것이 바로 비동기 통신의 힘입니다. 웹페이지는 이 데이터를 기다리는 동안 멈추지 않고, 데이터를 받은 후에만 정해진 코드를 실행했습니다.

출력된 객체는 다음과 같은 세부 정보를 담고 있습니다.

- name: "Leanne Graham"

- email: "Sincere@april.biz"

- address: 주소 정보가 담긴 또 다른 객체

- company: 회사 정보가 담긴 또 다른 객체

이처럼 비동기 통신은 프론트엔드 개발의 핵심입니다. 대부분의 웹 애플리케이션은 서버에서 데이터를 가져와서 화면에 보여주기 때문에, 이 기술을 이해하는 것이 정말 중요합니다.

### 목표: 버튼 클릭 시 사용자 정보 표시하기

이제 우리가 지금까지 배운 모든 지식을 종합해서, 프론트엔드 개발의 핵심 원리를 직접 구현해 볼 시간입니다.

이번 실습의 목표는 다음과 같습니다.

HTML: 웹페이지에 데이터를 표시할 영역과 버튼을 만듭니다.

CSS: 데이터를 표시할 영역을 보기 좋게 꾸밉니다.

자바스크립트: 버튼을 클릭하면 fetch 함수로 서버에서 데이터를 가져와서, HTML에 표시합니다.

#### 1단계: HTML 및 CSS 준비

먼저, 우리가 만들었던 index.html 파일에 새로운 요소를 추가하고, style.css 파일로 간단히 꾸며볼까요?

index.html 파일 수정:

\<body> 태그 안에 아래 코드를 추가해 주세요. \<div id="user-info">는 사용자의 정보를 표시할 공간이고, \<button id="load-button">은 데이터를 불러올 버튼입니다.

```html
<main>
  <article>
    <h2>사용자 정보</h2>
    <div id="user-info">
      <p>버튼을 눌러 사용자 정보를 가져오세요.</p>
    </div>
    <button id="load-button">데이터 불러오기</button>
  </article>
</main>
```

style.css 파일 수정:

#user-info와 #load-button에 간단한 스타일을 적용해서 보기 좋게 만들어 봅니다.

```css
#user-info {
  border: 1px solid #ccc;
  padding: 20px;
  margin: 20px 0;
  border-radius: 8px;
}

#load-button {
  padding: 10px 15px;
  border: none;
  background-color: #007bff;
  color: white;
  border-radius: 5px;
  cursor: pointer;
}
```

이제 버튼을 클릭했을 때 fetch 함수로 데이터를 가져와서, \<div id="user-info"> 안에 사용자 정보를 보여주는 코드를 만들겁니다.

script.js 파일 수정:

이전에 작성했던 코드는 모두 지우고, 아래 코드를 추가해 봅니다. 주석을 읽어보시면 각 코드가 어떤 역할을 하는지 쉽게 이해할 수 있을 겁니다.

```javascript
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
```

### 결과

```bash
이름: Leanne Graham
사용자명: Bret
이메일: Sincere@april.biz
```

위의 결과가 나타났을 겁니다.

이제 버튼을 클릭하자마자 서버에서 데이터를 가져와서 그 내용을 웹페이지에 표시하는 프론트엔드 개발의 핵심 원리를 완벽하게 구현해봤습니다.

이 과정에는 우리가 지금까지 배운 모든 개념이 담겨 있습니다.

- HTML: 데이터를 담을 \<div id="user-info">와 기능을 실행할 \<button id="load-button">을 만들었습니다.

- CSS: #user-info와 #load-button에 스타일을 적용해서 보기 좋게 꾸몄습니다.

- JavaScript:

  1. document.getElementById()를 사용해서 HTML 요소를 선택하고 (DOM 조작)
  2. addEventListener()로 버튼 클릭이라는 이벤트를 감지하고
  3. fetch()와 .then()으로 서버에서 데이터를 비동기적으로 가져왔으며
  4. 마지막으로 innerHTML을 사용해서 가져온 데이터를 웹페이지에 표시했습니다.

이 실습을 성공적으로 마쳤다는 것은 프론트엔드 개발의 가장 중요한 기초를 모두 갖추었다는 뜻입니다. 정말 잘하셨습니다!
