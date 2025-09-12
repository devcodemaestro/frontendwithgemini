## CSS 애니메이션

우리가 지금까지 배운 CSS는 정적인 웹페이지를 꾸미는 데 사용되었지만, CSS 애니메이션을 사용하면 웹페이지의 요소들을 움직이거나 변하게 만들 수 있습니다.

예를 들어, 버튼에 마우스를 올렸을 때 색깔이 부드럽게 변하거나, 이미지가 통통 튀어 오르는 효과를 만들 수 있습니다.

CSS 애니메이션을 만드는 방법은 크게 두 가지가 있습니다.

- transition (전환): 요소의 상태가 변할 때(예: 마우스 올리기) 부드러운 효과를 주는 방법입니다.

- @keyframes와 animation: 더 복잡하고 연속적인 움직임을 만드는 방법입니다.

가장 간단하고 자주 사용되는 **transition** 부터 함께 알아볼까요?

### transition

transition은 요소의 상태가 변할 때, 즉 마우스 올리기나 클릭 같은 상호작용이 발생했을 때, 그 변화를 즉각적으로 보여주지 않고 부드럽게 만들어주는 속성입니다.

예를 들어, 우리가 만든 '데이터 불러오기' 버튼에 마우스를 올리면 색깔이 순식간에 변하는데, transition을 사용하면 이 변화를 부드럽게 만들 수 있습니다.

transition 속성은 다음과 같이 세 가지 정보를 지정합니다.

- transition-property: 어떤 속성을 부드럽게 변화시킬지 지정합니다. (예: background-color, transform 등)

- transition-duration: 변화가 얼마나 오래 걸릴지 지정합니다. (예: 0.3s - 0.3초)

- transition-timing-function: 변화 속도를 어떻게 할지 지정합니다. (예: ease, linear 등)

자, 그럼 우리가 만든 '데이터 불러오기' 버튼에 마우스를 올렸을 때 배경색이 부드럽게 변하도록 만들어볼까요?

style.css 파일 수정:

아래 코드를 style.css 파일에 추가해 봅니다.

```css
#load-button {
  padding: 10px 15px;
  border: none;
  background-color: #007bff;
  color: white;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease; /* transition 추가 */
}

#load-button:hover {
  background-color: #0056b3; /* 마우스를 올렸을 때의 색깔 */
}
```

- transition: background-color 0.3s ease;는 "배경색(background-color)을 0.3초(0.3s) 동안 부드럽게(ease) 변화시켜라"라는 뜻입니다.

#load-button:hover는 '마우스를 올렸을 때'를 의미하는 가상 클래스 선택자입니다. 이 안에 마우스를 올렸을 때 적용될 스타일을 정의합니다.

코드를 추가하고 웹페이지를 새로고침한 뒤, '데이터 불러오기' 버튼에 마우스를 올려봅니다. 어떤 변화가 생겼나요?

### transition 결과

버튼 위에 마우스를 올리면 색상이 천천히, 그리고 부드럽게 바뀌었을 겁니다. 바로 transition 속성이 제 역할을 한 겁니다.

transition은 이렇게 두 가지 상태(평소 상태와 마우스를 올린 상태) 사이의 변화를 부드럽게 만들어주는 역할을 합니다. 이 간단한 효과 하나만으로도 웹사이트가 훨씬 더 전문적이고 사용자 친화적으로 보일 수 있습니다.

### @keyframes와 animation

transition이 두 상태 사이의 부드러운 전환이었다면, @keyframes와 animation은 더 복잡하고 연속적인 애니메이션을 만들 때 사용합니다. 마치 애니메이션의 각 프레임을 직접 정의하는 것과 비슷합니다.

@keyframes의 원리
@keyframes는 애니메이션의 **각 단계(프레임)** 에서 요소의 스타일을 어떻게 바꿀지 정의하는 규칙입니다.

from 또는 0%: 애니메이션의 시작 지점.

to 또는 100%: 애니메이션의 끝 지점.

0%~100% 사이의 특정 비율: 애니메이션의 중간 지점.

이러한 단계들을 정의한 후, animation 속성을 사용해서 어떤 요소에 그 애니메이션을 적용할지, 얼마나 오래 재생할지 등을 설정합니다.

### 애니메이션 만들어보기: 버튼 톡톡 튀기기

그럼 '데이터 불러오기' 버튼이 웹페이지가 로드될 때 아래에서 위로 살짝 튀어 오르는 애니메이션을 만들어 보겠습니다.

1. @keyframes 규칙 정의하기: style.css 파일에 아래 코드를 추가합니다. 애니메이션 이름을 jump라고 정했습니다.

   ```css
   @keyframes jump {
     from {
       transform: translateY(20px);
       opacity: 0;
     }
     to {
       transform: translateY(0);
       opacity: 1;
     }
   }
   ```

   - transform: translateY(20px): 요소를 세로 방향으로 20px 아래로 이동시킵니다.

   - opacity: 0: 요소의 투명도를 0으로 만들어 보이지 않게 합니다.

   - 이 규칙은 "처음에는 20px 아래에 있고 투명하게 시작해서, 마지막에는 원래 위치로 돌아오고 완전히 보이게 하라"는 뜻입니다.

2. animation 속성 적용하기: 이제 jump라는 애니메이션을 #load-button에 적용합니다.

   ```css
   #load-button {
     padding: 10px 15px;
     border: none;
     background-color: #007bff;
     color: white;
     border-radius: 5px;
     cursor: pointer;
     opacity: 0; /* 애니메이션 시작 전에는 투명하게 */
     animation: jump 1s forwards; /* jump 애니메이션 적용 */
   }
   ```

   - animation: jump 1s forwards;: "jump라는 애니메이션을 1초 동안 재생하고, 애니메이션이 끝난 후 마지막 상태를 유지하라"는 뜻입니다.

### @keyframe과 animation의 결과

animation과 @keyframes 덕분에 버튼이 아래에서 위로 부드럽게 나타나는 효과가 만들어졌을 겁니다.

이것이 바로 transition과 animation의 가장 큰 차이점입니다.

- **transition** 은 마우스를 올리는 것처럼 특정 이벤트가 발생했을 때만 작동합니다.

- **animation** 은 이벤트와 관계없이 페이지가 로드될 때처럼 지정된 시점에 자동으로 시작되는 더 복잡한 움직임을 만들 때 사용됩니다.

이 두 가지를 잘 활용하면 웹페이지의 사용자 경험을 크게 향상시킬 수 있습니다.

### 다음으로

이제 CSS 애니메이션의 핵심을 모두 경험해 봤습니다. 애니메이션에는 이 외에도 더 많은 속성들이 있습니다.

- animation-iteration-count: 애니메이션을 몇 번 반복할지 설정합니다. (infinite로 설정하면 무한 반복)

- animation-delay: 애니메이션이 시작되기 전, 몇 초 동안 대기할지 설정합니다.

- animation-direction: 애니메이션을 역방향으로 재생할지 설정합니다.

이러한 속성들을 사용하면 더 다양하고 창의적인 애니메이션을 만들 수 있습니다.
