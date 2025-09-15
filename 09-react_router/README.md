## 프레임워크 학습하기 - 리액트 라우팅

### 리액트에서 라우팅이 필요한 이유

여러 페이지로 구성된 웹사이트를 만들기 위해 **라우팅(Routing)** 이라는 개념을 배워야 합니다. 리액트는 기본적으로 하나의 HTML 파일로 작동하기 때문에, 페이지 이동 기능을 직접 만들어야 합니다. 이때 React Router와 같은 라이브러리를 사용합니다.

일반적인 웹사이트는 여러 개의 HTML 파일로 이루어져 있습니다.

- example.com/ → index.html

- example.com/about → about.html

- example.com/contact → contact.html

하지만 리액트 같은 SPA(Single Page Application)는 HTML 파일이 단 하나밖에 없습니다. 모든 페이지가 이 하나의 HTML 파일 안에서 자바스크립트에 의해 동적으로 그려집니다.

따라서 '어바웃' 페이지로 이동하면 about.html로 가는 것이 아니라, 자바스크립트가 URL을 example.com/about으로 바꾸고, \<About> 컴포넌트를 화면에 그려주는 방식으로 작동합니다.

이러한 URL과 컴포넌트를 연결하는 작업을 라우팅이라고 하고, 이때 **React Router** 라는 라이브러리를 가장 많이 사용합니다.

React Router를 사용하면 URL에 따라 다른 컴포넌트를 보여주거나, 페이지 간에 데이터를 전달하는 등의 작업을 쉽게 할 수 있습니다.

### React Router의 기본 원리

React Router는 URL에 따라 다른 컴포넌트를 보여주는 규칙을 정의합니다. 마치 웹사이트의 '지도'를 만드는 것과 같습니다.

- / (홈페이지 URL) → \<HomePage /> 컴포넌트 보여주기

- /about → \<AboutPage /> 컴포넌트 보여주기

- /contact → \<ContactPage /> 컴포넌트 보여주기

이러한 규칙은 \<BrowserRouter>와 \<Route>라는 두 가지 핵심 컴포넌트를 사용해서 정의해요.

\<BrowserRouter>: 라우팅 기능을 사용할 수 있게 해주는 컨테이너예요. 모든 \<Route> 컴포넌트를 이 안에 넣어줘야 합니다.

\<Route>: 특정 URL과 연결할 컴포넌트를 정의하는 컴포넌트예요. path 속성에 URL을, element 속성에 보여줄 컴포넌트를 지정합니다.

### 기본 라우팅 구조 만들어보기

그럼 간단한 라우팅 구조를 만들어 볼까요? 세 개의 페이지(\<HomePage>, \<AboutPage>, \<ContactPage>)가 있다고 가정하고, 이 페이지들을 URL과 연결하는 코드를 작성해 봅니다.

```jsx
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// 1. 페이지를 나타내는 컴포넌트들을 먼저 만듭니다.
function HomePage() {
  return <h2>홈 페이지입니다.</h2>;
}

function AboutPage() {
  return <h2>소개 페이지입니다.</h2>;
}

function ContactPage() {
  return <h2>연락처 페이지입니다.</h2>;
}

// 2. BrowserRouter로 모든 라우팅을 감쌉니다.
function App() {
  return (
    <BrowserRouter>
      <h1>나만의 웹사이트</h1>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
```

위 코드를 보면, \<Routes> 안에 세 개의 \<Route>가 정의되어 있습니다. 이제 사용자가 브라우저 주소창에 https://나의웹사이트/about을 입력하면, AboutPage 컴포넌트가 화면에 나타나게 됩니다.

### 링크 만들기: \<Link> 컴포넌트

하지만 주소창에 직접 URL을 입력하는 건 불편하겠죠? 그래서 \<a> 태그처럼 페이지를 이동할 수 있는 \<Link> 컴포넌트를 사용합니다.

\<Link> 컴포넌트는 to 속성으로 이동할 URL을 지정합니다.

```jsx
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div>
      <h2>홈 페이지입니다.</h2>
      <Link to="/about">소개 페이지로 이동</Link>
    </div>
  );
}
```

이렇게 하면 '소개 페이지로 이동'이라는 링크를 클릭했을 때 URL이 /about으로 바뀌고, AboutPage 컴포넌트가 화면에 나타납니다.

이제 리액트에서 라우팅이 어떻게 작동하는지 대략적인 개념을 이해하셨나요? 다음 단계로 넘어가서, 사용자가 직접 만든 페이지들을 React Router로 연결하는 실습을 해보겠습니다.

### 목표: 세 개의 페이지를 라우팅하기

이번 실습의 목표는 다음과 같습니다.

\<HomePage> 컴포넌트: '홈 페이지입니다'라는 제목과 함께 '소개 페이지로 이동' 링크를 표시합니다.

\<AboutPage> 컴포넌트: '소개 페이지입니다'라는 제목과 함께 '홈으로 돌아가기' 링크를 표시합니다.

라우팅 설정: \<BrowserRouter>와 \<Route>를 사용해서 /와 /about URL을 각각의 컴포넌트와 연결합니다.

1단계: 컴포넌트 만들기
먼저, 두 개의 컴포넌트를 만들어야 합니다.

App.js 파일에 아래 코드를 추가해 봅니다. 기존의 App 컴포넌트와 다른 것들은 모두 지워도 괜찮습니다.

```JavaScript
import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

function HomePage() {
  return (
    <div>
      <h2>홈 페이지입니다.</h2>
      <Link to="/about">소개 페이지로 이동</Link>
    </div>
  );
}

function AboutPage() {
  return (
    <div>
      <h2>소개 페이지입니다.</h2>
      <Link to="/">홈으로 돌아가기</Link>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <h1>나의 라우팅 연습</h1>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
```

코드를 분석해 볼까요?

\<HomePage> 컴포넌트에는 **\<Link to="/about">** 이 있어서 클릭하면 /about URL로 이동합니다.

\<AboutPage> 컴포넌트에는 **\<Link to="/">** 이 있어서 클릭하면 / URL로 돌아갑니다.

\<App> 컴포넌트에서는 \<Routes> 안에 두 개의 **\<Route>** 를 정의해서, URL(path)에 따라 다른 컴포넌트(element)를 보여주도록 설정했습니다.

코드를 작성하고 웹페이지를 새로고침한 뒤, '소개 페이지로 이동' 링크를 클릭해 보세요. 어떤 변화가 생겼나요?

### Route 결과

'소개 페이지로 이동' 링크를 클릭하면 브라우저 주소창의 URL이 http://localhost:5173/about으로 바뀌고, 화면에 \<AboutPage> 컴포넌트가 렌더링된 것을 확인할 수 있습니다. 그리고 '홈으로 돌아가기'를 클릭했을 때 다시 원래대로 돌아오는 것까지 완벽하게 구현하셨습니다.

이것이 바로 리액트의 싱글 페이지 애플리케이션(SPA) 방식입니다. 사용자가 페이지를 이동해도 실제 HTML 파일을 새로 불러오지 않고, 자바스크립트가 URL에 맞는 컴포넌트를 화면에 동적으로 교체하는 겁니다.

이제 리액트의 가장 중요한 3가지 핵심 개념을 모두 경험해 보았습니다.

- 컴포넌트: UI를 재사용 가능한 조각으로 만드는 방법

- **상태(State)** 와 Props: 컴포넌트 내부 및 컴포넌트 간에 데이터를 관리하는 방법

- 라우팅: 여러 페이지를 만들고 연결하는 방법

이 세 가지 개념을 이해했다면, 여러분은 이제 리액트 개발의 단단한 기초를 쌓은 겁니다.
