## HTML 중급

### 시맨틱 태그

HTML은 단순한 태그들의 나열을 넘어, 웹페이지의 정보를 구조화하고 의미를 부여하는 역할을 합니다. 이런 의미를 담은 태그들을 바로 시맨틱(Semantic) 태그라고 부릅니다.

시맨틱 태그란?
지금까지 사용했던 \<div>나 \<span> 같은 태그들은 의미가 없어서, 개발자가 아니면 어떤 역할을 하는지 알기 어려웠습니다. 하지만 시맨틱 태그는 그 태그의 이름만으로도 어떤 내용을 담고 있는지 알 수 있습니다.

예를 들어, 웹사이트의 상단에 있는 로고나 메뉴바는 \<header>라는 태그를 사용하고, 웹페이지의 본문 내용은 \<article>이나 \<section> 태그를 사용합니다.

시맨틱 태그를 사용하는 이유는 다음과 같습니다.

검색 엔진 최적화(SEO): 구글 같은 검색 엔진은 시맨틱 태그를 통해 웹페이지의 내용을 더 정확하게 이해하고, 검색 결과 순위를 매기는 데 활용합니다.

웹 접근성: 시각 장애를 가진 사용자들이 사용하는 화면 낭독기(스크린 리더)가 시맨틱 태그를 읽어주면서 웹페이지의 구조를 더 잘 파악할 수 있게 도와줍니다.

코드 가독성: 개발자들이 코드를 볼 때, 태그 이름만 봐도 어떤 역할을 하는지 쉽게 알 수 있어서 협업할 때 매우 유용합니다.

시맨틱 태그 실습
그럼 우리가 만든 '고양이' 웹페이지를 시맨틱 태그를 사용해서 다시 만들어 볼까요?

기존의 코드에 다음 태그들을 추가해 봅니다.

웹페이지의 제목을 감싸는 \<header>

고양이 사진과 문단을 감싸는 \<article>

링크를 감싸는 \<footer>

수정한 코드는 어떻게 작성하면 좋을까요?

### 수정 결과

```html
<header>
  <h1>내가 좋아하는 동물</h1>
</header>
<article>
  <img
    src="https://i.namu.wiki/i/kI4sD-o5UPY9Rh6hgCOyAxsor2ZHj02GDxV_JGdzRxPkATP0yJbtxx0hOxQFp8Fo3G5-gKDxvZu6fB95w7BIcTHmzFYbtinw2_1YX5Zkmkf3JuNZ7LmvomHXkswPY8yXoNmnmlqFqtYYjp344HcCIA.webp"
    alt="고양이사진"
  />
  <p id="myParagraph">고양이는 쥐와 생선을 아주 좋아합니다.</p>
  <button id="myButton">클릭해보세요!</button>
</article>
<footer>
  <a href="https://namu.wiki/w/%EA%B3%A0%EC%96%91%EC%9D%B4"
    >고양이 더 알아보기</a
  >
</footer>
```

### 시맨틱 태그 정리

이렇게 \<div>나 \<span> 대신 \<header>, \<article>, \<footer>와 같은 의미 있는 태그를 사용하면, 코드를 읽는 개발자나 검색 엔진, 스크린 리더가 이 부분이 어떤 역할을 하는지 쉽게 알 수 있습니다.

\<header>: 페이지의 도입부 또는 머리글을 나타냅니다. 보통 로고, 제목, 검색 창 등이 이 안에 들어갑니다.

\<article>: 독립적으로 존재할 수 있는 내용을 나타냅니다. 블로그 글, 뉴스 기사, 또는 이 경우처럼 '고양이에 대한 정보'가 \<article>에 해당합니다.

\<footer>: 페이지의 바닥글을 나타냅니다. 저작권 정보나 관련 링크 등이 이곳에 배치됩니다.

이처럼 시맨틱 태그를 사용하면 웹페이지의 구조가 훨씬 더 명확해집니다. HTML의 심화 학습은 이런 식으로 각 태그의 의미와 용도를 정확히 이해하는 것부터 시작됩니다.

### \<header> / \<main> / \<footer>

HTML의 의미를 더 풍부하게 만드는 다양한 태그들을 추가 공부합니다.

우리가 자주 사용하는 웹사이트의 구조를 머릿속에 떠올려보면 대부분의 웹사이트는 비슷한 구조를 가지고 있습니다.

가장 상단에는 로고와 메뉴가 있는 헤더(header)

가운데에는 주요 내용이 있는 본문(main)

그리고 가장 아래에는 저작권 정보가 있는 푸터(footer)

이러한 구조는 시맨틱 태그로 더 명확하게 표현할 수 있습니다.

### \<nav>, \<main>, \<section>

주요 시맨틱 태그 살펴보기

1. \<nav>: 내비게이션 태그
   웹사이트의 메뉴나 목차처럼 탐색 기능을 제공하는 링크들의 모음을 담을 때 사용합니다. \<header> 안에 자주 배치됩니다.

예를 들어, "고양이 더 알아보기" 링크가 여러 개라면 다음과 같이 \<nav> 태그로 감싸주는 게 좋습니다.

```html
<nav>
  <ul>
    <li>
      <a href="https://namu.wiki/w/%EA%B3%A0%EC%96%91%EC%9D%B4"
        >고양이 더 알아보기</a
      >
    </li>
    <li><a href="#">다른 동물 링크</a></li>
  </ul>
</nav>
```

2. \<main>: 주요 콘텐츠 태그
   웹페이지에서 가장 핵심적인 내용을 담을 때 사용합니다. 한 페이지에 \<main> 태그는 하나만 있어야 합니다.

우리가 만든 고양이 웹페이지의 경우, \<article> 태그를 \<main> 태그로 감싸서 다음과 같이 작성할 수 있습니다.

```html
<main>
  <article></article>
</main>
```

3. \<section>: 구역 태그
   관련된 내용의 그룹을 묶을 때 사용합니다. 보통 제목(\<h1>~\<h6>)을 포함하며, \<article> 태그와 함께 자주 쓰입니다.

예를 들어, 고양이에 대한 '기본 정보', '특징' 등으로 내용을 나누고 싶다면 \<section> 태그를 사용할 수 있습니다.

### \<nav>, \<main>, \<section> 정리

\<main>, \<nav>, \<section> 태그를 추가해서 고양이 웹페이지를 더 구조적으로 만들어 봅니다. \<main> 태그로 \<article>을 감싸고, \<header> 안에 \<nav> 태그를 넣으면 되겠죠?

### 결과

```html
<header>
  <h1>내가 좋아하는 동물</h1>
  <nav>
    <ul>
      <li>
        <a href="https://namu.wiki/w/%EA%B3%A0%EC%96%91%EC%9D%B4"
          >고양이 더 알아보기</a
        >
      </li>
      <li><a href="#">다른 동물 링크</a></li>
      <li><a href="#">또 다른 동물 링크</a></li>
    </ul>
  </nav>
</header>
<main>
  <section>
    <article>
      <img
        src="https://i.namu.wiki/i/kI4sD-o5UPY9Rh6hgCOyAxsor2ZHj02GDxV_JGdzRxPkATP0yJbtxx0hOxQFp8Fo3G5-gKDxvZu6fB95w7BIcTHmzFYbtinw2_1YX5Zkmkf3JuNZ7LmvomHXkswPY8yXoNmnmlqFqtYYjp344HcCIA.webp"
        alt="고양이사진"
      />
      <p id="myParagraph">고양이는 쥐와 생선을 아주 좋아합니다.</p>
      <button id="myButton">클릭해보세요!</button>
    </article>
    <article>
      <img
        src="https://i.namu.wiki/i/kI4sD-o5UPY9Rh6hgCOyAxsor2ZHj02GDxV_JGdzRxPkATP0yJbtxx0hOxQFp8Fo3G5-gKDxvZu6fB95w7BIcTHmzFYbtinw2_1YX5Zkmkf3JuNZ7LmvomHXkswPY8yXoNmnmlqFqtYYjp344HcCIA.webp"
        alt="고양이사진"
      />
      <p id="myParagraph">고양이는 따뜻한 햇볕 아래 잠자는 것을 좋아합니다.</p>
      <button id="myButton">클릭해보세요!</button>
    </article>
  </section>
</main>
<footer>
  <a href="https://namu.wiki/w/%EA%B3%A0%EC%96%91%EC%9D%B4"
    >고양이 더 알아보기</a
  >
</footer>
```

### 평가

시맨틱 태그를 아주 정확하고 체계적으로 사용하셨습니다.

특히 몇 가지 부분에서 HTML의 깊은 이해를 보여줍니다.

먼저 \<header> 안에 \<nav>를 배치해서, 웹페이지의 제목과 메뉴가 논리적으로 한 그룹으로 묶여 있다는 것을 표현했어요.

\<main> 태그로 \<section>을 감싸고, 그 안에 \<article>들을 넣어서 페이지의 핵심 콘텐츠를 명확하게 구분했습니다.

\<section>으로 두 개의 \<article>을 묶어, 두 기사가 '동물'이라는 공통된 주제를 가지고 있다는 의미를 부여했습니다.

이처럼 시맨틱 태그를 사용하면, 웹페이지의 구조가 훨씬 더 명확해지고 검색 엔진 최적화나 웹 접근성에도 큰 도움이 됩니다.

### 웹 접근성

이제 HTML 심화 학습의 다음 단계인 **웹 접근성(Web Accessibility)** 에 대해 이야기해 볼까요?

웹 접근성은 장애를 가진 사람들이 웹사이트의 정보를 동등하게 이용할 수 있도록 만드는 기술입니다. alt 속성의 중요성을 이미 알고 있으니, 이 부분은 더 쉽게 다가가실 수 있을 겁니다.

웹 접근성에서 가장 중요한 것 중 하나는 바로 aria 속성입니다. aria는 'Accessible Rich Internet Applications'의 약자로, HTML 태그에 추가적인 의미를 부여해서 스크린 리더 같은 보조 기술에 더 풍부한 정보를 제공해 줍니다.

예를 들어, 일반적인 버튼은 '클릭'이라는 기능만 가지고 있지만, aria-label 속성을 추가하면 버튼이 어떤 역할을 하는지 더 상세하게 설명해 줄 수 있습니다.

```html
<button aria-label="메뉴 열기">
  <img src="menu-icon.png" alt="메뉴 아이콘" />
</button>
```

위 코드처럼 aria-label을 사용하면 시각 장애인이 화면 낭독기를 통해 "메뉴 열기"라는 버튼의 역할을 정확히 들을 수 있게 됩니다.

자, 그렇다면 우리가 만든 고양이 웹페이지의 \<a> 태그에 aria 속성을 추가해서 더 좋은 웹 접근성을 만들어 볼까요? '고양이 더 알아보기' 링크에 aria-label 속성을 추가해서 '나무위키 고양이 항목으로 이동'이라는 정보를 제공해 보시겠어요?

### aria-label, aria-role

```html
<footer>
  <a
    href="https://namu.wiki/w/%EA%B3%A0%EC%96%91%EC%9D%B4"
    aria-label="고양이 더 알아보기"
    >고양이 더 알아보기</a
  >
</footer>
```

\<a aria-label="고양이 더 알아보기">처럼 aria-label을 추가해서 링크에 대한 정보를 제공하는 방법을 아주 잘 이해하셨습니다.

이렇게 aria-label 속성을 사용하면, 시각 장애를 가진 사용자가 화면 낭독기를 통해 "고양이 더 알아보기"라는 글자 외에도 "고양이 더 알아보기"라는 버튼의 목적을 더 명확하게 들을 수 있어요.

하지만 이 경우에는 이미 텍스트로 **'고양이 더 알아보기'**라고 명확하게 되어 있어서, aria-label을 생략해도 괜찮아요. aria 속성은 **텍스트만으로는 의미가 불분명할 때 추가적인 정보를 제공하는 데 주로 사용**됩니다.

예를 들어, 아이콘만 있는 버튼처럼 **시각적으로는 이해되지만, 스크린 리더가 읽어줄 텍스트가 없을 때 aria-label이 아주 유용**하게 쓰입니다.

웹 접근성에서 중요한 또 다른 개념: ARIA Role
aria-label 외에 웹 접근성을 높이는 데 중요한 역할을 하는 것이 바로 ARIA Role입니다. HTML 태그에 추가적인 **역할(Role)**을 부여해서, 보조 기술에 해당 요소의 역할을 알려주는 겁니다.

예를 들어, 웹사이트에서 알림 창을 만들 때 <div> 태그를 사용했다면, 스크린 리더는 단순히 '영역'이라고만 읽어줄 겁니다. 하지만 role="alert"를 추가하면 "경고"라는 역할을 알려줘서, 사용자가 이 요소가 중요한 알림이라는 것을 즉시 알 수 있게 됩니다.

### 유효성 검사

유효성 검사는 작성한 HTML 코드가 웹 표준에 맞게 잘 작성되었는지 확인하는 과정입니다. 코드가 올바르지 않으면 웹 브라우저가 의도와 다르게 화면을 표시하거나, 검색 엔진이 웹페이지를 제대로 읽지 못할 수 있습니다.

W3C Markup Validation Service와 같은 웹사이트를 이용하면, 작성한 코드를 붙여넣기만 해도 어떤 부분이 잘못되었는지 알려줍니다.

다음 단계로 넘어가서, 작성한 HTML 코드가 웹 표준에 맞게 작성되었는지 함께 확인해 볼까요? 이 과정을 **'HTML 유효성 검사(HTML Validation)'** 라고 합니다.

유효성 검사는 마치 문법 검사와 같습니다. 오타나 잘못된 태그 사용법이 없는지 확인해서, 모든 웹 브라우저와 검색 엔진이 여러분의 코드를 올바르게 이해하도록 돕는 중요한 과정입니다.

가장 널리 사용되는 유효성 검사기는 W3C Markup Validation Service입니다.

#### W3C Markup Validation Service 사용법

- [W3C Markup Validation Service 웹사이트](https://validator.w3.org/)에 접속합니다.

- 'Validate by direct input' 탭을 선택합니다.

- 아래에 있는 텍스트 상자에 작성한 전체 HTML 코드를 붙여넣습니다.

- 'Check' 버튼을 누릅니다.

만약 코드가 완벽하다면 "Document checking completed. No errors or warnings to show." 라는 메시지가 나타납니다.

하지만 만약 오류가 있다면, 오류의 종류와 오류가 발생한 줄 번호를 알려줍니다. 이 오류 메시지를 보면 어떤 부분을 수정해야 할지 알 수 있습니다.

### 결과

```bash
Warning: Article lacks heading. Consider using h2-h6 elements to add identifying headings to all articles.

From line 13, column 5; to line 13, column 13

</header>↩    <article>↩
```

메시지를 분석해 드리겠습니다.

"Warning: Article lacks heading. Consider using h2-h6 elements to add identifying headings to all articles."

Warning (경고): 이 메시지는 심각한 오류가 아니라, 개선하면 더 좋다는 의미의 '경고'입니다.

Article lacks heading. (article에 제목이 없음): \<article> 태그 안에 제목이 없다는 뜻입니다.

Consider using h2-h6 elements to add identifying headings to all articles. (\<h2>~\<h6> 태그를 사용해서 모든 article에 제목을 추가하는 것을 고려하세요.): \<article> 태그의 내용이 무엇인지 명확히 알 수 있도록 \<h2>
부터 \<h6> 태그 중 하나를 사용해 제목을 넣어주라는 뜻입니다.

이 경고는 웹사이트의 가독성과 웹 접근성을 높이기 위한 중요한 조언입니다.

스크린 리더(화면 낭독기)를 사용하는 시각 장애인들은 웹페이지를 읽을 때 제목을 기준으로 빠르게 탐색하는 경우가 많습니다. 만약 \<article>에 제목이 없으면, 스크린 리더는 이 부분이 어떤 내용인지 정확하게 알려줄 수 없게 됩니다.

자, 그럼 이 경고 메시지를 해결해 볼까요? 우리가 만든 \<article> 태그 안에 있는 고양이 정보에 어울리는 제목을 \<h2> 태그로 추가해 봅니다.

### 수정안

```html
<article>
  <h2>고양이 상세 내용</h2>
  <img
    src="https://i.namu.wiki/i/kI4sD-o5UPY9Rh6hgCOyAxsor2ZHj02GDxV_JGdzRxPkATP0yJbtxx0hOxQFp8Fo3G5-gKDxvZu6fB95w7BIcTHmzFYbtinw2_1YX5Zkmkf3JuNZ7LmvomHXkswPY8yXoNmnmlqFqtYYjp344HcCIA.webp"
    alt="고양이사진"
  />
  <p id="myParagraph">고양이는 쥐와 생선을 아주 좋아합니다.</p>
  <button id="myButton">클릭해보세요!</button>
</article>
```

이렇게 하면 유효성 검사에서 발생했던 "Article lacks heading." 경고를 해결할 수 있습니다. 이제 스크린 리더(화면 낭독기)를 사용하는 사용자도 이 부분이 "고양이 상세 내용"이라는 것을 명확히 알 수 있습니다.

### 웹 폼(Web Forms)

웹 개발에서 매우 중요한 부분 중 하나는 바로 사용자의 입력을 받는 것입니다. 로그인 창, 회원가입 양식, 검색 창 등이 모두 여기에 속합니다. 이처럼 사용자의 정보를 입력받는 요소를 만들 때 사용하는 것이 바로 **HTML 폼(Forms)** 입니다.

HTML 폼은 \<form> 태그를 사용해서 만드는데, 그 안에 사용자의 입력을 받는 다양한 \<input> 태그를 넣습니다.

예를 들어, 텍스트를 입력받는 \<input type="text">, 비밀번호를 입력받는 \<input type="password">, 그리고 정보를 전송하는 \<input type="submit">와 같은 태그들이 있습니다.

### 폼의 기본적인 구조

좋아요. HTML **폼(Forms)** 의 기본적인 구조부터 함께 알아볼까요?

폼은 웹페이지에서 사용자의 정보를 입력받고, 그 정보를 서버로 전송하는 데 사용됩니다. 폼을 만드는 가장 기본적인 태그는 \<form>과 \<input> 입니다.

폼의 기본 구조: \<form> 태그

\<form> 태그는 사용자의 입력을 담는 컨테이너 역할을 합니다. 이 태그가 없으면 폼의 기능을 제대로 사용할 수 없습니다. \<form> 태그에는 두 가지 중요한 속성이 있습니다.

action: 폼에 입력된 데이터를 어디로 보낼지, 즉 서버의 주소를 지정합니다.

method: 데이터를 어떤 방식으로 보낼지 지정합니다. 보통 GET 또는 POST 방식을 사용합니다.

GET: 주소창에 입력한 데이터가 그대로 노출됩니다. (예: 검색 기능)
POST: 입력한 데이터가 외부에 노출되지 않고, 안전하게 전송됩니다. (예: 로그인, 회원가입)

사용자 입력 요소: \<input> 태그
\<input> 태그는 사용자가 직접 정보를 입력하는 칸을 만듭니다. \<input> 태그에는 type 속성이 있어서, 어떤 종류의 입력창을 만들지 지정할 수 있습니다.

type="text": 한 줄짜리 텍스트를 입력하는 칸을 만듭니다.

type="password": 비밀번호를 입력하면 글자가 보이지 않도록 해줍니다.

type="submit": 폼에 입력한 내용을 전송하는 버튼을 만듭니다.

### 기본 폼 구조 만들어보기

이제 이 태그들을 조합해서 간단한 로그인 폼의 뼈대를 만들어 볼까요?

우리가 지금까지 만든 index.html 파일의 \<body> 태그 안에 아래 코드를 추가해 봅니다.

```html
<form action="/login" method="post">
  <input type="text" />
  <input type="password" />
  <input type="submit" />
</form>
```

input 태그 덕분에 텍스트 입력 칸, 비밀번호 입력 칸, 그리고 '제출(Submit)' 버튼이 생겼을 겁니다. 하지만 이대로는 사용자가 어떤 정보를 입력해야 하는지 알 수 없겠죠?

그래서 input 태그에는 **placeholder**라는 속성을 자주 사용합니다. 이 속성은 입력칸에 사용자가 입력하기 전에 나타나는 '힌트' 같은 역할을 합니다.

예를 들어, 다음과 같이 placeholder를 추가해 볼까요?

```html
<form action="/login" method="post">
  <input type="text" placeholder="아이디" />
  <input type="password" placeholder="비밀번호" />
  <input type="submit" />
</form>
```

이렇게 하면 아이디 입력칸에는 **"아이디"** 라고, 비밀번호 입력칸에는 **"비밀번호"** 라고 회색 글씨로 표시돼서 사용자가 어떤 정보를 입력해야 할지 알 수 있습니다.

자, 그렇다면 이번에는 submit 버튼의 글자를 **"로그인"** 으로 바꿔 볼까요? input 태그의 value 속성을 사용하면 버튼에 표시되는 글자를 바꿀 수 있습니다.

### 결과

```html
<form action="/login" method="post">
  <input type="text" placeholder="아이디" />
  <input type="password" placeholder="비밀번호" />
  <input type="submit" value="로그인" />
</form>
```

정답입니다! \<input type="submit" value="로그인" /> 이렇게 value 속성을
사용하면 버튼에 표시되는 글자를 **'로그인'** 으로 바꿀 수 있습니다. 👏 이제
여러분이 만든 폼은 사용자가 아이디와 비밀번호를 입력하고, '로그인' 버튼을 눌러
정보를 전송할 수 있는 기본 기능을 갖추게 되었습니다. HTML 폼은 이 외에도 매우
다양한 입력 요소를 제공합니다. 예를 들어, 라디오 버튼, 체크박스, 날짜 선택기, 파일
업로드 버튼 등 여러 가지가 있습니다.

### HTML 폼 심화

HTML 폼의 심화 학습에서는 다음과 같은 것들을 더 배울 수 있습니다.

\<label> 태그: 입력칸에 붙이는 '라벨'을 만들어서, 사용자가 어떤 정보를 입력해야 하는지 명확히 해주는 역할을 합니다.

required 속성: 반드시 입력해야 하는 필수 입력칸을 만들 수 있습니다.

유효성 검사: 사용자가 올바른 형식으로 정보를 입력했는지 확인하는 방법을 배우게 됩니다. (예: 이메일 형식 확인)

먼저 \<label> 태그에 대해 알아보겠습니다.

#### <label> 태그

우리가 만든 폼은 입력칸만 있어서, 사용자가 어떤 정보를 입력해야 할지 추측해야 했습니다. <label> 태그는 이런 불편함을 해소하기 위해 사용됩니다. \<label>은 입력칸에 **제목(label)** 을 붙여주는 역할을 합니다.

##### <label> 태그 사용법

\<label> 태그는 단독으로 쓰이지 않고, 'for' 속성을 이용해서 특정 입력칸과 연결해야 합니다. 그리고 입력칸에는 id 속성을 추가해서 \<label>의 for와 동일한 값을 넣어주면 됩니다.

예를 들어, 아이디 입력칸에 "사용자 아이디"라는 라벨을 붙이려면 다음과 같이 작성합니다.

```html
<label for="username">사용자 아이디:</label>
<input type="text" id="username" placeholder="아이디" />
```

이렇게 연결하면 다음과 같은 장점이 있습니다.

접근성 향상: 스크린 리더(화면 낭독기)가 입력칸을 읽어줄 때, \<label>에 있는 내용을 함께 읽어줘서 어떤 입력칸인지 명확하게 알려줍니다.

사용자 편의성: \<label>을 클릭해도 해당 입력칸에 커서가 자동으로 옮겨져서, 사용자가 더 쉽게 입력할 수 있습니다.

자, 그럼 이제 우리가 만든 로그인 폼에 \<label> 태그를 추가해 볼까요? 아이디 입력칸과 비밀번호 입력칸에 각각 라벨을 붙여줍니다.

### 결과

```html
<form action="/login" method="post">
  <label for="id">사용자 아이디:</label>
  <input type="text" id="id" placeholder="아이디" />
  <label for="pwd">사용자 비밀번호:</label>
  <input type="password" id="pwd" placeholder="비밀번호" />
  <input type="submit" value="로그인" />
</form>
```

\<label> 태그와 id 속성을 사용하여 폼의 입력 필드에 의미를 부여하는 방법을 정확히 이해하셨습니다.

이제 여러분의 로그인 폼은 사용자에게 어떤 정보를 입력해야 하는지 명확하게 보여줄 수 있습니다. 또한, for 속성과 id 속성을 연결해서 라벨을 클릭하면 해당 입력 필드에 커서가 옮겨지는 기능도 구현되었습니다. 이는 사용자 경험을 크게 향상시키는 중요한 요소입니다.

### 폼 유효성 검사

이제 HTML 폼의 심화 학습 다음 단계로 **클라이언트 측 유효성 검사(Client-side Validation)** 에 대해 알아볼까요?

이것은 사용자가 폼에 잘못된 정보를 입력했을 때, 서버로 데이터를 보내기 전에 미리 오류를 잡아내는 기능입니다. 예를 들어, 아이디나 비밀번호를 입력하지 않고 '로그인' 버튼을 누르거나, 이메일 주소를 올바른 형식으로 입력하지 않았을 때 경고 메시지를 띄우는 겁니다.

가장 간단한 유효성 검사 방법은 required 속성을 사용하는 겁니다. 이 속성은 입력 필드를 필수 항목으로 지정해 줘서, 사용자가 값을 입력하지 않으면 폼이 제출되지 않도록 막아줍니다.

자, 그렇다면 우리가 만든 로그인 폼의 '사용자 아이디'와 '사용자 비밀번호' 입력 필드를 모두 필수 항목으로 만들어 볼까요? 코드를 어떻게 수정하면 좋을까요?

### 결과

```html
<form action="/login" method="post">
  <label for="id">사용자 아이디:</label>
  <input type="text" id="id" placeholder="아이디" required />
  <label for="pwd">사용자 비밀번호:</label>
  <input type="password" id="pwd" placeholder="비밀번호" required />
  <input type="submit" value="로그인" />
</form>
```

required 속성을 아주 정확하게 사용하셨습니다.

이제 여러분이 만든 로그인 폼은 사용자가 아이디나 비밀번호를 입력하지 않고 '로그인' 버튼을 누르면, "이 필드를 작성하세요." 와 같은 메시지를 보여주며 제출을 막을겁니다. 이렇게 하면 서버로 불필요한 요청을 보내지 않아도 되고, 사용자에게도 편리함을 제공할 수 있습니다.

이처럼 required 속성을 사용하는 것을 클라이언트 측 유효성 검사라고 합니다. 이는 서버로 데이터를 보내기 전에 브라우저 자체적으로 간단한 오류를 확인하는 기능입니다.
