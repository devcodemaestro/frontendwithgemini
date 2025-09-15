## 프레임워크 학습하기 - 리액트 입문

### 왜 프레임워크를 배워야 할까?

지금까지 우리는 HTML, CSS, 자바스크립트의 기초와 심화 개념을 모두 다루면서 프론트엔드 개발의 핵심 원리를 완벽하게 이해했습니다. 마치 집을 짓기 위해 망치, 톱, 나사 같은 기본적인 도구를 사용하는 방법을 배운 것과 같습니다.

그런데 실제 집을 지을 때는 손으로 일일이 못을 박는 대신, 더 효율적이고 빠르게 작업할 수 있는 전동 공구를 사용합니다. 프레임워크가 바로 웹 개발의 '전동 공구' 같은 존재입니다.

프레임워크는 지금까지 우리가 직접 손으로 작성했던 많은 코드들을 더 쉽게, 더 효율적으로 만들 수 있도록 도와줍니다.

- 복잡한 기능 쉽게 구현하기: 서버에서 데이터를 가져와서 웹페이지에 보여주는 작업을 우리가 직접 코딩했지만, 프레임워크를 사용하면 훨씬 적은 코드로 동일한 기능을 구현할 수 있습니다.

- 유지보수 및 협업 용이: 코드를 체계적으로 관리할 수 있는 구조를 제공하기 때문에, 여러 명이 함께 작업해도 혼란 없이 효율적으로 협업할 수 있습니다.

지금 프레임워크를 배우기 시작하면, 이미 배운 HTML, CSS, 자바스크립트의 지식이 어떻게 실제 개발에 적용되는지 더 명확하게 이해할 수 있습니다.

### 어떤 프레임워크를 선택해야 할까?

프레임워크에는 여러 종류가 있지만, 가장 널리 사용되고 초보자가 배우기에 좋은 것은 **React(리액트)** 와 **Vue.js(뷰)** 입니다.

- React: 현재 프론트엔드 시장에서 가장 높은 점유율을 차지하고 있습니다. 커뮤니티가 크고 자료가 많아서 배우기 좋다는 장점이 있습니다.

- Vue.js: 배우기 쉽고 문서가 잘 정리되어 있어서 초보자에게 특히 추천됩니다.

### 리액트란?

리액트는 현재 전 세계적으로 가장 많이 사용되는 자바스크립트 라이브러리 중 하나입니다. <br>페이스북(현 메타)이 만들었고, 인스타그램, 넷플릭스 등 우리가 잘 아는 많은 서비스가 리액트로 만들어졌습니다.

### 리액트가 왜 중요한가요?

지금까지 우리가 만든 웹페이지는 HTML 파일 하나로 이루어져 있었습니다. <br>만약 사용자 정보가 100명이라면, \<div id="user-info"> 같은 HTML 요소를 100번 만들어야 했습니다. 코드가 매우 복잡하고 관리하기 어려워집니다.

리액트는 이런 문제를 해결하기 위해 **'컴포넌트(Component)'** 라는 개념을 도입했습니다.

- 컴포넌트: 재사용이 가능한, 독립적인 UI 조각입니다. 마치 레고 블록처럼, 버튼, 입력창, 카드 하나하나를 컴포넌트로 만들어서 필요한 곳에 가져다 쓰는 겁니다.

- 예를 들어, 블로그의 글 목록을 만든다고 생각해보겠습니다. 리액트에서는 '블로그 글' 컴포넌트를 하나 만들고, 이 컴포넌트를 여러 번 재사용해서 100개의 글을 쉽게 표시할 수 있습니다.

### 컴포넌트의 작동 원리

리액트 컴포넌트는 HTML, CSS, 자바스크립트를 한 파일에 담아서 관리합니다. 이렇게 하면 어떤 UI가 어떻게 생겼는지, 어떤 기능을 하는지 한눈에 파악할 수 있습니다.

```jsx
// 리액트 컴포넌트의 간단한 예시
function UserInfo(props) {
  return (
    <div>
      <h3>이름: {props.name}</h3>
      <p>사용자명: {props.username}</p>
    </div>
  );
}
```

위 코드에서 UserInfo는 '사용자 정보'를 표시하는 컴포넌트입니다. <br>
이 컴포넌트는 props라는 것을 받아서 name과 username을 화면에 보여줍니다.<br>
props는 마치 함수에 전달하는 매개변수와 같다고 생각하면 됩니다.

### 리액트 설치하기

#### 1. Node.js 설치

먼저, 컴퓨터에 Node.js가 설치되어 있어야 합니다. Node.js는 자바스크립트 코드를 웹 브라우저 밖에서 실행할 수 있게 해주는 환경입니다.

- [Node.js 공식 웹사이트](https://nodejs.org/ko/) 에 접속해서, '권장' 버전으로 표시된 Node.js를 다운로드하고 설치해 줍니다.

설치 후, 터미널(윈도우의 명령 프롬프트 또는 macOS의 터미널)을 열고 아래 명령어를 입력해서 제대로 설치되었는지 확인해 봅니다.

```Bash
node -v
```

만약 v18.18.0과 같이 버전 번호가 나타나면 성공입니다.

#### 2. Vite로 리액트 앱 만들기

Node.js가 설치되었다면, 이제 아주 간단한 명령어로 리액트 앱을 만들 수 있습니다. 원하는 폴더로 이동한 뒤, 터미널에 아래 명령어를 입력해 봅니다.

```bash
npm create vite@latest
```

이 명령어를 입력하면 몇 가지 질문이 나타납니다.

- 프로젝트 이름 (Project name): 원하는 이름을 입력하세요. (예: my-react-app)

- 프레임워크 선택 (Select a framework): **React** 를 선택합니다. (화살표 키로 이동)

- 언어 선택 (Select a variant): **JavaScript** 를 선택합니다.

이 과정이 끝나면 리액트 앱의 기본 구조가 만들어집니다.

#### 3. 프로젝트 실행하기

이제 마지막 단계입니다. 방금 만든 프로젝트 폴더로 이동해서 필요한 패키지들을 설치하고, 개발 서버를 실행해 볼까요?

```bash
cd my-react-app // 위에서 정한 프로젝트 이름으로 폴더 이동
npm install    // 필요한 패키지 설치
npm run dev    // 개발 서버 실행
```

npm run dev 명령어를 입력하면 http://localhost:5173/와 같은 주소가 터미널에 나타납니다. 이 주소를 웹 브라우저에 입력하고 접속해 봅니다.

아마 리액트 로고가 돌아가고, 카운터 버튼이 있는 기본 화면이 나타날 겁니다.

이제 리액트 개발 환경 설정이 모두 끝났습니다! 정말 잘하셨습니다.

### 컴포넌트 만들어보기

코드를 직접 작성해 보는 것이 개념을 가장 잘 이해하는 방법입니다.

우리가 만든 '사용자 정보'를 리액트 컴포넌트로 바꿔보겠습니다.

- 함수형 컴포넌트: 리액트에서는 컴포넌트를 자바스크립트 함수로 만들 수 있습니다. 이 함수는 HTML처럼 생긴 코드를 반환합니다.

- JSX 문법: return 문 안에 있는 <와 >로 둘러싸인 코드가 바로 JSX예요. JSX는 자바스크립트 안에서 HTML처럼 보이는 코드를 작성할 수 있게 해주는 문법입니다.

자, 아래 코드를 보고 우리가 만든 사용자 정보를 리액트 컴포넌트로 만들어 보겠습니다.

```jsx
// 리액트 컴포넌트의 기본적인 모습
function MyComponent() {
  return (
    <div>
      <p>Hello, React!</p>
    </div>
  );
}
```

생성한 컴포넌트는 일반적인 함수처럼 반복해서 사용할 수 있습니다. 반복해서 사용할 수 있다는 것은 그만큼 html을 반복작성하는 수고를 덜어줍니다.

예를 들어 아래의 쿠팡 이미지의 경우 카테고리 텍스트, 카드형식의 상품 배치 구도가 모두 같습니다. 이를 컴포넌트화하고 fetch한 데이터만 각 컴포넌트에 넣어주면 일일이 입력해야 할 수고를 덜어줍니다.

![alt text](image.png)

### 리액트가 HTML에 컴포넌트를 삽입하는 방법

리액트 애플리케이션은 딱 하나의 HTML 파일(index.html)을 기반으로 합니다. 그리고 이 HTML 파일에는 **'루트(root) 요소'** 라는 빈 <div> 태그가 하나 있습니다.

```html
<body>
  <div id="root"></div>
</body>
```

리액트는 자바스크립트를 사용해서 이 루트 요소(id="root") 안에 우리가 만든 모든 컴포넌트들을 자동으로 렌더링(그려서) 보여줍니다. 즉, 우리가 직접 \<MyComponent /> 태그를 index.html에 넣을 필요가 없습니다.

자바스크립트가 모든 작업을 대신 해줍니다.

### 실제 리액트 코드 예시

실제 리액트 프로젝트에서는 index.js와 같은 파일을 만들어서 다음과 같이 코드를 작성합니다.

```javascript
// 1. 필요한 라이브러리를 가져옵니다.
import React from "react";
import ReactDOM from "react-dom/client";

// 2. 우리가 만든 컴포넌트를 가져옵니다.
import MyComponent from "./MyComponent";

// 3. HTML 파일에 있는 루트 요소를 찾습니다.
const root = ReactDOM.createRoot(document.getElementById("root"));

// 4. 루트 요소에 'MyComponent' 컴포넌트를 렌더링합니다. 동일한 컴포넌트가 여러개 필요하면 그만큼 붙여넣으면 됩니다.
root.render(
  <React.StrictMode>
    <MyComponent />
    <MyComponent />
    <MyComponent />
  </React.StrictMode>
);
```

이 코드가 바로 index.html의 \<div id="root"> 안에 우리가 만든 \<MyComponent> 컴포넌트를 넣어주는 역할을 합니다.

그래서 리액트 개발자는 index.html 파일을 거의 수정하지 않고, 오직 자바스크립트 컴포넌트 파일만 만들고 수정하면서 개발합니다. 이렇게 하면 코드를 훨씬 더 효율적으로 관리할 수 있습니다.

### 리액트의 핵심: useState (상태 관리)

다시 돌아와서, 리액트의 가장 기본적이면서도 중요한 개념인 **useState (상태)** 부터 차근차근 알아보겠습니다.

우리가 지금까지 만든 HTML 페이지는 정적이었습니다. 하지만 웹사이트는 사용자의 행동에 따라 동적으로 바뀌어야 합니다. 예를 들어, '좋아요' 버튼을 누르면 숫자가 증가하거나, 입력 필드에 글을 쓰면 바로 화면에 표시되어야 합니다.

useState는 이렇게 시간에 따라 변하는 데이터를 관리하는 특별한 함수입니다.

useState는 두 가지를 반환합니다.

현재 상태 값: 우리가 사용할 데이터 값입니다. (예: count의 현재 값)

상태 업데이트 함수: 상태 값을 변경할 때 사용하는 함수예요. 이 함수를 사용해야만 리액트가 화면을 자동으로 업데이트해 줘요. (예: setCount)

예시 코드를 볼까요?

```javascript
import React, { useState } from "react";

function LikeButton() {
  const [count, setCount] = useState(0); // [1] 상태 변수와 함수를 선언합니다.

  function handleClick() {
    setCount(count + 1); // [2] 버튼이 클릭되면 상태를 업데이트합니다.
  }

  return <button onClick={handleClick}>좋아요 {count}개</button>;
}
```

이 코드를 보면:

useState(0)는 count의 초기 값을 0으로 설정합니다.

setCount(count + 1)는 handleClick 함수가 호출될 때마다 count의 값을 1씩 증가시킵니다.

count 값이 변할 때마다 리액트가 알아서 화면에 표시되는 숫자를 업데이트해 주기 때문에, 우리가 직접 DOM을 조작할 필요가 없습니다.

### useEffect

useEffect는 컴포넌트의 **생명 주기(Lifecycle)** 에 따라 특정 코드를 실행시키고 싶을 때 사용하는 훅(Hook)입니다. 여기서 '생명 주기'란 컴포넌트가 화면에 처음 나타나거나, 업데이트되거나, 사라지는 과정을 의미합니다.

useEffect는 두 가지 주요 기능을 수행합니다.

컴포넌트가 화면에 나타날 때 코드 실행: 웹페이지에 처음 접속했을 때 서버에서 데이터를 가져오거나, 외부 라이브러리를 초기화하는 등의 작업을 할 때 유용합니다.

상태(State)가 변할 때마다 코드 실행: 특정 데이터가 바뀔 때마다 그에 맞춰 다른 작업을 수행해야 할 때 사용합니다.

### useEffect의 기본 구조

useEffect는 다음과 같은 형태로 사용합니다.

```jsx
useEffect(() => {
// 여기에 실행하고 싶은 코드를 작성합니다.
}, [의존성 배열]);
```

첫 번째 인수는 함수입니다. 이 함수 안에 실행할 코드를 넣습니다.

두 번째 인수는 **의존성 배열(Dependency Array)** 입니다ㅣ. 이 배열 안에 있는 값이 변할 때마다 첫 번째 인수의 함수가 다시 실행됩니다.

### 의존성 배열의 역할

빈 배열([]): 컴포넌트가 처음 화면에 나타날 때 딱 한 번만 실행됩니다. 서버에서 데이터를 가져올 때 가장 많이 사용되는 방식입니다.

배열이 없는 경우: 컴포넌트가 렌더링될 때마다 매번 실행됩니다.

배열에 변수가 있는 경우([count]): 배열에 있는 변수(count)의 값이 변할 때마다 실행됩니다.

그럼 useEffect와 fetch를 사용해서 페이지가 처음 로드될 때 데이터를 가져오는 간단한 코드를 살펴볼까요?

```jsx
import React, { useState, useEffect } from "react";

function UserDataFetcher() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users/1")
      .then((response) => response.json())
      .then((fetchedData) => {
        setData(fetchedData);
      });
  }, []); // 빈 배열을 넣어 한 번만 실행되게 함

  return (
    <div>
      {data ? (
        <h3>사용자 이름: {data.name}</h3>
      ) : (
        <p>데이터를 불러오는 중...</p>
      )}
    </div>
  );
}
```

위의 코드를 한줄씩 분석하겠습니다.

```jsx
import React, { useState, useEffect } from "react";
```

- import는 외부 모듈이나 라이브러리를 가져오는 문법입니다.

- React는 리액트 라이브러리 자체를, { useState, useEffect }는 리액트에서 제공하는 특정 기능(훅)을 가져와서 사용하겠다는 뜻입니다.

```jsx
function UserDataFetcher() {
```

- 이 줄은 UserDataFetcher라는 이름의 리액트 함수형 컴포넌트를 정의합니다. 이 함수가 반환하는 JSX(HTML처럼 생긴 코드)가 화면에 그려지게 됩니다.

```jsx
const [data, setData] = useState(null);
```

- useState는 리액트의 **상태(State)** 를 만드는 훅(Hook)입니다. 컴포넌트 내부에서 변할 수 있는 데이터를 관리할 때 사용합니다.

- useState(null)은 data라는 상태 변수를 만들고, 그 초기 값을 null로 설정합니다.

- setData는 이 data 변수의 값을 변경할 때 사용하는 함수입니다ㅣ. setData 함수를 사용해야만 리액트가 화면을 업데이트합니다.

```jsx
useEffect(() => {
  fetch("https://jsonplaceholder.typicode.com/users/1")
    .then((response) => response.json())
    .then((fetchedData) => {
      setData(fetchedData);
    });
}, []);
```

- useEffect는 컴포넌트의 생명 주기에 맞춰 특정 코드를 실행하는 훅입니다. 이 코드 블록을 **'부수 효과(Side Effect)'** 라고도 부릅니다.

- fetch(...)는 서버에서 데이터를 가져오는 비동기 통신 함수입니다.

- .then(...)은 fetch 요청이 성공했을 때 실행되는 코드 블록입니다.

- response => response.json(): 서버에서 받은 응답(response)을 자바스크립트가 사용할 수 있는 JSON 형식으로 변환합니다.

- fetchedData => { setData(fetchedData); }: 변환된 데이터를 fetchedData라는 변수로 받아서, setData 함수를 통해 data 상태를 업데이트합니다.

- [] (빈 배열): 이 부분이 매우 중요합니다. 이 의존성 배열이 비어 있으면, useEffect 안에 있는 코드가 컴포넌트가 화면에 처음 나타날 때 딱 한 번만 실행되도록 만듭니다.

```jsx
return (
  <div>
    {data ? <h3>사용자 이름: {data.name}</h3> : <p>데이터를 불러오는 중...</p>}
  </div>
);
```

- 이 부분은 UserDataFetcher 컴포넌트가 화면에 보여줄 JSX를 반환합니다.

- {data ? ... : ...}는 조건부 렌더링 문법입니다. data가 null이 아니면(데이터가 있으면) \<h3> 태그를 보여주고, null이면 "데이터를 불러오는 중..."이라는 \<p> 태그를 보여줍니다.

- 이 조건부 렌더링 덕분에 데이터를 기다리는 동안 사용자에게 "로딩 중"이라는 메시지를 보여줄 수 있습니다.

### 최종 정리

이 코드는 useState로 null 상태를 가진 data를 만들고, useEffect로 페이지가 처음 로드될 때 fetch를 실행하여 서버에서 데이터를 가져옵니다. fetch가 성공하면 setData를 통해 data 상태를 업데이트하고, 이로 인해 리액트는 화면에 data.name을 자동으로 다시 그려주게 됩니다.

이것이 바로 리액트에서 비동기 데이터를 다루는 가장 기본적인 패턴입니다. useState가 데이터를, useEffect가 그 데이터를 가져오는 시점을 담당하게 됩니다.

### props

우리가 이전에 fetch로 데이터를 가져올 때, data라는 변수는 fetch 함수 안에서만 유효했습니다.

컴포넌트에서는 data 변수를 바로 사용할 수 없습니다.

리액트에서는 컴포넌트에 데이터를 전달하기 위해 **'props'** 라는 개념을 사용합니다.

props는 **부모 컴포넌트**가 **자식 컴포넌트에게** 데이터를 전달할 때 사용하는 속성입니다. 마치 함수에 인수를 전달하는 것과 비슷합니다.

userInfo 컴포넌트가 props를 통해 데이터를 받도록 하는 코드를 구성하면 아래와 같습니다.

```javascript
// index.html
<userInfo name={data.name} username={data.username} email={data.email} />;

// userInfo.js
function userInfo(props) {
  return (
    <div>
      <h3>이름: {props.name}</h3>
      <p>사용자명: {props.username}</p>
      <p>이메일: {props.email}</p>
    </div>
  );
}
```

참고로 리액트 컴포넌트 안에서 자바스크립트 변수를 사용하려면, 변수를 중괄호 {}로 감싸줘야 합니다.

이렇게 하면, 이제 userInfo 컴포넌트는 외부에서 name, username, email을 받아서 화면에 보여줄 수 있습니다.

아래와 같은 컴포넌트를 만들 때 상위 파일의 fetch한 데이터에서 각 이름, 사용자명, 이메일을 어떻게 나타낼 수 있을까요?

```javascript
// userInfo.js
function userInfo() {
  return (
    <div>
      <h3>이름: </h3>
      <p>사용자명: </p>
      <p>이메일: </p>
    </div>
  );
}
```

### 컴포넌트 만들어보기 결과

```jsx
// index.html
<userInfo name={user1.name} username={user1.username} email={user1.email} />;

// userInfo.js 컴포넌트 코드
function userInfo(name, username, email) {
  return (
    <div>
      <h3>이름: {name}</h3>
      <p>사용자명: {username}</p>
      <p>이메일: {email}</p>
    </div>
  );
}
```

이것이 리액트의 가장 핵심적인 작동 원리 중 하나입니다.

부모 컴포넌트가 자식 컴포넌트에게 **props** 를 통해 데이터를 전달하고,

자식 컴포넌트는 이 데이터를 받아서 화면에 보여줍니다.

이러한 props를 사용하면, userInfo 컴포넌트를 여러 번 재사용해서 다른 사용자의 정보를 쉽게 보여줄 수 있습니다.

```jsx
<userInfo name={user1.name} username={user1.username} email={user1.email} />
<userInfo name={user2.name} username={user2.username} email={user2.email} />
```
