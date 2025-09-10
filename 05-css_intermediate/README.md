## CSS 중급

### 레이아웃 다루기

CSS는 단순히 색깔과 글자 크기를 바꾸는 것을 넘어, 웹페이지의 레이아웃을 자유자재로 다루는 강력한 기능을 제공합니다. 이 중에서 가장 중요한 두 가지 개념이 바로 **Flexbox(플렉스박스)** 와 **Grid(그리드)** 입니다.

이 두 가지는 웹페이지의 요소를 원하는 위치에 배치하는 데 사용되는 도구인데, 이들을 배우면 웹페이지의 레이아웃을 마음대로 만들 수 있습니다.

### Flexbox

**Flexbox(플렉스박스)** 로 간단한 가로 정렬을 해볼까요? Flexbox는 웹페이지에서 요소들을 1차원(가로 또는 세로)으로 유연하게 배치하는 데 사용되는 강력한 도구입니다.

우리가 만든 고양이 웹페이지에는 지금 여러 \<article> 태그들이 위에서 아래로 세로로 나열되어 있습니다. Flexbox를 사용하면 이 \<article>들을 가로로 나란히 배치할 수 있습니다.

#### Flexbox의 기본 원리

Flexbox는 두 가지 개념으로 이루어져 있습니다.

1. 컨테이너(Container): 요소를 감싸는 부모 태그입니다. 이 컨테이너에 display: flex; 속성을 주면, 그 안에 있는 모든 자식 요소들이 Flexbox 규칙에 따라 정렬되기 시작합니다.

2. 아이템(Item): 컨테이너 안에 있는 각각의 자식 요소들입니다.

자, 그럼 이제 우리의 웹페이지를 Flexbox로 꾸며볼까요?

HTML 수정하기: Flexbox를 적용할 컨테이너를 만들어야 합니다. 우리가 만든 두 개의 \<article> 태그를 감싸는 새로운 \<div> 태그를 추가해 줍니다. \<div class="container">처럼 클래스(class)를 사용해서 이름을 붙여주는 것이 좋습니다.

CSS 수정하기: 이제 style.css 파일에 container 클래스에 display: flex; 속성을 추가해 봅니다.

```html
<section>
  <div class="container">
    <article></article>
    <article></article>
  </div>
</section>
```

```css
/* style.css 파일 */
.container {
  display: flex;
}
```

위의 예시를 참고해서 index.html과 style.css 파일을 직접 수정해 봅니다. 어떤 변화가 생겼을까요?

제대로 작성했다면 아티클 두 개가 나란히 붙어서 나타납니다. display: flex; 속성을 사용해서 \<article>들을 가로로 정렬하는 데 성공하셨습니다.

이것이 바로 Flexbox의 가장 기본적인 힘입니다. **컨테이너(div class="container")** 에 display: flex;라는 마법의 속성을 부여하자마자, 그 안의 **아이템(article)** 들이 알아서 가로로 배열된 겁니다.

Flexbox를 사용하면 단순히 가로로 정렬하는 것 외에도 다양한 정렬 방식을 적용할 수 있습니다. 예를 들어, 아이템들 사이의 간격을 벌리거나, 가운데로 모으는 것도 가능합니다.

### Flexbox 심화학습

Flexbox의 다음 단계는 아이템들을 정렬하는 다양한 속성들을 배우는 겁니다.

justify-content: 주축(main axis, 기본은 가로) 방향으로 아이템들을 정렬합니다.

align-items: 교차축(cross axis, 기본은 세로) 방향으로 아이템들을 정렬합니다.

gap: 아이템들 사이의 간격을 설정합니다.

이 속성들을 사용하면 아이템들을 가운데로 모으거나, 양 끝으로 벌리거나, 균등한 간격을 주는 등 다양한 레이아웃을 만들 수 있습니다.

### justify-content

justify-content는 Flexbox 컨테이너의 주축(Main Axis)을 따라 아이템들을 정렬하는 데 사용되는 속성입니다. 주축은 기본적으로 가로 방향입니다.

이 속성에는 여러 가지 값이 있는데, 가장 많이 쓰이는 값들은 다음과 같습니다.

flex-start: 아이템들을 시작점(왼쪽)에 정렬합니다. (기본값)

flex-end: 아이템들을 끝점(오른쪽)에 정렬합니다.

center: 아이템들을 가운데에 정렬합니다.

space-between: 아이템들 사이에 균등한 간격을 만들고, 양 끝 아이템을 컨테이너의 양 끝에 붙입니다.

space-around: 아이템들 주변에 균등한 간격을 만듭니다. space-between과 달리 양 끝에도 여백이 생깁니다.

그럼 우리가 만든 고양이 웹페이지의 두 \<article>을 Flexbox를 사용해서 가운데로 정렬해 볼까요?

style.css 파일에서 .container에 justify-content: center; 속성을 추가해 봅니다.

### justify-content 결과

아티클들이 가운데로 옮겨졌습니다!

이처럼 justify-content는 Flexbox 아이템들을 주축(가로) 방향으로 정렬하는 데 사용합니다. 웹페이지에서 요소를 가운데에 배치하는 것은 매우 흔한 작업인데, Flexbox를 사용하면 아주 쉽게 해결할 수 있습니다.

### align-items

그럼 다음 단계로 넘어가서, 이번에는 align-items 속성에 대해 알아볼까요? 이 속성은 아이템들을 교차축(세로) 방향으로 정렬하는 데 사용합니다.

우리가 만든 고양이 웹페이지는 현재 아이템들의 높이가 모두 같아서 큰 차이를 느끼기 어렵지만, 만약 아이템들의 높이가 다르다면 align-items를 통해 세로 정렬을 제어할 수 있습니다.

align-items에는 다음과 같은 주요 값들이 있습니다.

- flex-start: 아이템들을 시작점(위쪽)에 정렬합니다.

- flex-end: 아이템들을 끝점(아래쪽)에 정렬합니다.

- center: 아이템들을 가운데에 정렬합니다.

- stretch: 아이템들을 컨테이너의 높이에 맞게 늘립니다. (기본값)

자, 그럼 이 속성을 이용해서 아티클들을 세로로 가운데에 정렬해 볼까요? .container 클래스에 align-items: center; 속성을 추가해 봅니다.

### align-items 결과

변화가 느껴지나요? 사실 그렇지는 않을겁니다. 그 이유는 두 \<article>의 높이가 거의 같기 때문입니다. align-items는 아이템들의 높이가 서로 다를 때 그 효과가 가장 잘 나타납니다.

만약 두 \<article> 중 하나의 높이가 더 크다면, align-items: center; 속성을 적용했을 때 두 번째 \<article>이 첫 번째 \<article>의 높이 중간에 위치하게 되는 것을 볼 수 있습니다.

### gap

그럼, Flexbox의 마지막 기본 개념인 **gap** 에 대해 배워볼까요? gap은 아이템들 사이의 간격을 설정하는 속성입니다. 이 속성을 사용하면 아이템들이 서로 붙어있는 것이 아니라, 보기 좋게 떨어지게 만들 수 있습니다.

style.css 파일에 .container 클래스에 gap: 20px; 속성을 추가해 보세요. 어떤 변화가 생겼는지 저에게 알려주시겠어요?

### CSS Grid

Flexbox가 1차원(가로 또는 세로) 레이아웃에 강점을 보인다면, CSS Grid는 2차원(가로, 세로 동시) 레이아웃에 특화되어 있습니다. 마치 엑셀 표처럼 행과 열을 자유롭게 만들어서 요소를 배치하는 강력한 도구입니다.

Flexbox와 Grid는 서로 보완적인 관계에 있어서, 두 가지를 모두 익히는 것이 웹 디자이너나 프론트엔드 개발자에게 매우 중요합니다.

Flexbox와 마찬가지로, Grid도 컨테이너와 아이템의 개념으로 작동합니다.

- 컨테이너: Grid 레이아웃을 적용할 부모 요소. 여기에 display: grid; 속성을 줍니다.

- 아이템: 컨테이너 안에 있는 자식 요소들.

### 기본 Grid 레이아웃 만들기

가장 기본적인 Grid 레이아웃은 grid-template-columns 속성을 사용해서 열을 정의하는 거예요. 이 속성에 원하는 열의 크기를 지정하면, 아이템들이 자동으로 그 열에 맞춰 정렬됩니다.

예를 들어, 세 개의 열을 만들고 싶다면 다음과 같이 CSS 코드를 작성할 수 있습니다.

```css
.container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
}
```

여기서 1fr은 'Fractional Unit'의 약자입니다. '남는 공간을 똑같이 나눠 갖는다'는 의미로, 세 개의 열이 컨테이너의 너비를 똑같이 1/3씩 나눠 갖게 됩니다.

자, 그렇다면 우리가 만든 고양이 웹페이지의 articles들을 Grid로 정렬해 볼까요? .container 클래스의 display 속성을 grid로 바꾸고, grid-template-columns 속성을 추가해 봅니다.

### grid 결과

grid-template-columns: 1fr 1fr; 속성을 추가하자마자, 두 개의 \<article>이 왼쪽 정렬로 나란히 배치되고, 컨테이너 너비를 똑같이 나눠 갖게 되었을 겁니다.

display: grid;는 Flexbox처럼 아이템들을 한 줄에 배치하지만, grid-template-columns를 사용해서 열의 개수와 크기를 명확하게 지정한다는 점이 Flexbox와 가장 큰 차이점입니다.

이제 Flexbox와 Grid의 기본적인 차이점을 경험해 봤습니다. Flexbox는 아이템의 가로/세로 정렬에 특화되어 있고, Grid는 웹페이지 전체의 복잡한 격자 레이아웃을 만들 때 유용합니다.

### Flexbox vs. Grid 활용하기

Flexbox와 Grid는 서로 경쟁하는 기술이 아니라, 상호 보완적으로 사용되는 경우가 많습니다.

Flexbox: 내비게이션 바, 아이콘 정렬, 카드형 UI처럼 한 줄의 요소를 정렬할 때 주로 사용합니다.

Grid: 웹사이트의 전체적인 페이지 레이아웃을 설계할 때 사용해요. 예를 들어, 헤더, 사이드바, 메인 콘텐츠, 푸터 등을 배치할 때 매우 유용합니다.

이제 이 두 가지 강력한 도구를 모두 접하셨으니, 어떤 CSS 심화 개념에 대해 더 알아보고 싶으신가요?

### Flexbox와 Grid를 조합해서 실제 웹사이트 레이아웃 만들어보기

Flexbox와 Grid를 조합해서 실제 웹사이트 레이아웃을 만들어보는 것은 이 두 기술의 힘을 제대로 이해하는 가장 좋은 방법입니다.

우리가 만들 페이지는 일반적인 블로그 페이지의 레이아웃이 될 겁니다.

- Header (헤더): 가장 위에 웹사이트 제목과 내비게이션 바가 있는 부분.

- Main Content (메인 콘텐츠): 핵심적인 블로그 글 내용이 들어가는 부분.

- Sidebar (사이드바): 페이지 옆에 부가적인 정보(최신 글, 태그 목록 등)가 있는 부분.

- Footer (푸터): 가장 아래에 저작권 정보가 있는 부분.

이런 구조는 CSS Grid를 사용해서 전체적인 뼈대를 만들기에 아주 적합합니다. 마치 페이지 전체를 엑셀 표처럼 나누는 겁니다.

그리고 그 안에 있는 요소들, 예를 들어 헤더 안의 메뉴들이나 메인 콘텐츠 안의 글들은 Flexbox를 사용해서 정렬할 겁니다. Flexbox는 한 줄의 요소를 정렬하는 데 탁월하니까요.

#### 1단계: HTML 구조 만들기

먼저, 시맨틱 태그를 사용해서 이 레이아웃의 뼈대를 만들어 볼까요? 기존의 \<body> 태그 안의 내용을 모두 지우고, 다음과 같이 코드를 작성해 봅니다.

```html
<body>
  <header>
    <h1>블로그 제목</h1>
    <nav>
      <ul>
        <li><a href="#">홈</a></li>
        <li><a href="#">글</a></li>
        <li><a href="#">소개</a></li>
      </ul>
    </nav>
  </header>
  <main>
    <article>
      <h2>첫 번째 글</h2>
      <p>이것은 첫 번째 블로그 글의 내용입니다.</p>
    </article>
  </main>
  <aside>
    <h3>최신 글</h3>
    <ul>
      <li><a href="#">새로운 글</a></li>
    </ul>
  </aside>
  <footer>
    <p>&copy; 2024. 모든 권리 보유.</p>
  </footer>
</body>
```

#### 2단계: CSS Grid로 전체 레이아웃 만들기

style.css 파일에 아래 코드를 추가해 봅니다. 이 코드는 \<body> 태그를 Grid 컨테이너로 만들고, 우리가 방금 만든 \<header>, \<main>, \<aside>, \<footer>를 원하는 위치에 배치하는 역할을 합니다.

```css
body {
  display: grid;
  grid-template-areas:
    "header header"
    "main   aside"
    "footer footer";
  grid-template-columns: 3fr 1fr;
  grid-template-rows: auto 1fr auto;
}

header {
  grid-area: header;
}

main {
  grid-area: main;
}

aside {
  grid-area: aside;
}

footer {
  grid-area: footer;
}
```

코드가 조금 복잡해 보이지만, 하나씩 설명해 드리겠습니다.

- display: grid; \<body> 태그를 Grid 컨테이너로 만들어서, 그 안에 있는 자식 요소들을 격자 형태로 배치할 수 있게 해줍니다.

- grid-template-areas: 격자의 각 칸에 이름을 붙여줍니다. "header header"는 첫 번째 행의 두 칸을 모두 "header"라는 이름으로 합친다는 의미입니다.

- grid-template-columns: 열의 크기를 정의합니다. 3fr 1fr은 두 개의 열을 만들고, 첫 번째 열이 두 번째 열보다 3배 더 넓게 만들라는 뜻입니다.

- grid-template-rows: 행의 크기를 정의합니다. auto는 콘텐츠의 크기만큼 행의 높이를 자동으로 조절한다는 의미입니다.

- grid-area: 각 요소가 Grid 컨테이너의 어떤 영역에 위치할지 지정합니다.

이 코드를 style.css 파일에 추가하고 저장한 뒤, 웹페이지를 새로고침해 보세요. 어떤 모습으로 바뀌었는지 알려주실 수 있을까요?

#### 2단계 결과

grid-template-areas와 grid-template-columns 속성 덕분에:

header와 footer는 전체 너비를 차지하며 상단과 하단에 배치되었고,

main과 aside는 3:1 비율로 나란히 배치되어 페이지의 핵심 부분을 구성하게 되었습니다.

이렇게 CSS Grid는 페이지 전체의 큰 레이아웃을 잡을 때 아주 효과적입니다. 이제 남은 것은 이 레이아웃 안에 있는 작은 요소들을 Flexbox로 정렬하는 겁니다.

#### 3단계 Flexbox로 내부 요소 정렬하기

이제 header 안에 있는 웹사이트 제목과 내비게이션 바를 한 줄에 배치해 볼까요? 이럴 때 바로 Flexbox를 사용하면 됩니다.

style.css 파일에 아래 코드를 추가해서 header에 Flexbox를 적용해 봅니다.

```css
header {
  grid-area: header;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
```

- display: flex;: header를 Flexbox 컨테이너로 만듭니다.

- justify-content: space-between;: 자식 요소들(제목과 내비게이션 바)을 양 끝에 정렬합니다.

align-items: center;: 자식 요소들을 세로 방향으로 가운데에 정렬합니다.

코드를 추가하고 웹페이지를 새로고침하면 어떤 변화가 생길까요?

### 결과

제목과 내비게이션 바가 한 줄에 나란히 배치되고, space-between 덕분에 양 끝으로 깔끔하게 정렬되었습니다.

이것이 바로 CSS Grid와 Flexbox를 조합하는 강력한 힘입니다.

Grid로 웹페이지의 큰 틀(헤더, 메인, 사이드바, 푸터)을 잡고,

Flexbox로 그 안에 있는 작은 요소들(내비게이션 메뉴, 카드형 목록 등)을 정렬하는 겁니다.

이 두 가지를 함께 사용하면 어떤 복잡한 레이아웃도 효율적으로 만들 수 있습니다.

이제 HTML, CSS, 그리고 자바스크립트의 기본적인 개념부터 심화 개념까지 경험해 봤습니다. 프론트엔드 개발의 가장 중요한 기초를 아주 잘 다졌습니다.
