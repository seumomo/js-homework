# <div align="center">Elemental Movie Poster 구현</div>

#### <div align="center">멋쟁이 사자처럼 프론트엔드 스쿨 6기<br>JavaScript Mission-02</div>

---

## 시작 가이드

- `git clone https://github.com/seumomo/js-homework.git`

- eslint 8.45.0

  - `npm i eslint`

- prettier 3.0.0

  - `npm i prettier`

- live-server 1.2.2
  - `npm i live-server`

## 목차 및 기간

- 목차

  1. <a href="#a1">Elemental Movie Poster</a>

- 기간 : 2023 / 07 / 20 ~ 2023 / 07 / 20

## Mission 요구 사항

- `Event` 처리 방식을 사용하여 `Click` `Event` 추가한다.
  - `Event` 위임
  - 반복문
- `Image`와 `Color`의 `Data`는 `data.js`에서 불러온다.
- 각 `li` 항목들을 클릭하면 배경 색상과 `Visual Image`를 변경되도록 한다.
  - 배경색 변경 : `linear-gradient`를 사용하고, `colorB`의 기본값은 `#000`으로 한다.
  - `Visual Image`가 변경되면 상단의 `name`도 변경되도록 한다.
- 함수를 분리시킨다.
  - `setBgColor` 함수
  - `setImage` 함수
  - `setNameText` 함수
- 가독성이 좋도록 `Refactoring`한다.

### 접근 방법

**_하단의 네 개의 이미지 중 아무거나 클릭_** ➡️ **_`visual` 영역의 이미지 변경_** | **_배경 색상 변경_** | **_상단의 `name` 변경_**

---

# <div align="center">기술 스택</div>

## <div align="center">환경</div>

<div align="center"><img src="https://img.shields.io/badge/visualstudiocode-007ACC?style=for-the-badge&logo=visualstudiocode&logoColor=white">
<img src="https://img.shields.io/badge/github-181717?style=for-the-badge&logo=github&logoColor=white"></div>

## <div align="center">사용 기술</div>

<div align="center">
  <img src="https://img.shields.io/badge/html5-E34F26?style=for-the-badge&logo=html5&logoColor=white">
  <img src="https://img.shields.io/badge/css3-1572B6?style=for-the-badge&logo=css3&logoColor=white">
  <img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black">
</div>

---

# 결과물

## <a id="a1">Elemental Movie Poster</a>

![characters](https://github.com/seumomo/js-homework/assets/127176650/7dae4a2e-9516-4afb-9486-faf1d9b7b781)

---

### 작업 내용 및 기본 동작

- 수업시간에 배웠던 내용들을 활용했다.

  - `모듈 프로그래밍`으로 연습해보기
    - 수업시간에 만들었던 `addClass` | `removeClass` | `getNode` | `setAttr` 함수를 재사용했다.
      > 1. `addClass` | `removeClass` ➡️ `node`에 `class`를 추가 | 제거 해주는 함수
      > 2. `getNode` ➡️ `DOM`에서 해당하는 `node`를 찾아주는 함수
      > 3. `setAttr` ➡️ `node`의 `attribute`에 `value`를 `set`해주는 함수

- 분리된 함수들을 만들어서 하나의 `Event`에 사용했다.

  - 하단 네 개의 이미지 중 `click`한 `character`에 테두리가 생기고 다른 `character`의 테두리는 제거되도록 하는 `Event`를 구현했고, 해당 `Event` 안에 3가지 함수를 사용했다.

  ```js
  const slider = (event) => {
    const target = event.target.closest('li');
    if (!target) return;
    const index = target.getAttribute('data-index') - 1;
    const dataArray = data[index];

    [...characterList.children].forEach((item) =>
      removeClass(item, 'is-active')
    );
    addClass(target, 'is-active');

    setBgColor(dataArray);
    setImage(dataArray);
    setNameText(dataArray);
  };
  ```

  > 1. 모든 이미지에 `is-active`라는 `class`가 제거되도록 `forEach`를 사용했다.
  > 2. `click`된 `target`의 이미지에 `is-active`라는 `class`가 추가되도록 했다.
  > 3. `chracters`의 정보가 담겨있는 기본 제공된 `data` 배열의 `index`를 `dataArray`라는 변수에 할당했다.

  - `character`에 맞는 배경색으로 변경되도록 하는 `setBgColor` 함수를 만들었다.

  ```js
  const setBgColor = (dataArray) => {
    const body = getNode('body');
    const [colorA, colorB = '#000'] = dataArray.color;

    body.style.background = `linear-gradient(to bottom, ${colorA}, ${colorB})`;
  };
  ```

  > `data` 배열의 `color`들을 `colorA` | `colorB`라는 변수에 구조 분해 할당하였다.<br>➡️ `colorB`의 기본값은 `#000`으로 설정했다.

  - `visual`의 이미지가 선택한 `character`의 이미지와 대체 텍스트가 변경되도록 하는 `setImage` 함수를 만들었다.

  ```js
  const setImage = (dataArray) => {
    const visualImage = getNode('.visual img');

    setAttr(visualImage, 'src', `./assets/${dataArray.name.toLowerCase()}.jpeg`);
    setAttr(visualImage, 'alt', `./assets/${dataArray.alt}`);
  };
  ```

  > `dataArray`를 활용하여 이미지 및 대체 텍스트가 변경되도록 했다.<br>➡️ `dataArray`의 `name`은 대문자이기 때문에 `toLowerCase()` 메소드를 사용했다.

  - 상단의 `name`이 선택한 `character`의 `name`이 되도록 하는 `setNameText` 함수를 만들었다.

  ```js
  const setNameText = (dataArray) => {
    const nickName = getNode('.nickName');
    
    nickName.textContent = `${dataArray.name}`;
  };
  ```

  > `dataArray`를 활용하여 상단 이미지의 `name`이 변경되도록 했다.

### 고민했던 지점

- 화살표 함수를 연습해보기 위해 모든 함수를 화살표 함수로 정의하였다.

- `setBgColor` 함수에서 `colorB`의 기본값을 설정하는 데에 어려움이 있었다.

  - `구조 분해 할당`에서 배운 기본값 설정으로 해결했다.

- 함수를 분리는 했는데, 사용하면 `index` 변수에 접근할 수 없다는 `Error`가 출력되었다.
  - 분리된 함수의 매개변수에 `dataArray`를 넣으면 해결되는 `Error`였다.
