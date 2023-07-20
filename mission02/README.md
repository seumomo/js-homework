<div align="center">

[![Hits](https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https%3A%2F%2Fgithub.com%2Fseumomo%2FProject-F4&count_bg=%233DACC8&title_bg=%23555555&icon=&icon_color=%23E7E7E7&title=hits&edge_flat=true)](https://hits.seeyoufarm.com)

</div>

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
- 가독성이 좋도록 Refactoring한다.

### 접근 방법

**_`email` 입력_** ➡️ **_`password` 입력_** ➡️ **_로그인 버튼 클릭_** ➡️ **_`welcome.html`로 이동_**

> **user** 객체와 일치하지 않는 **email** | **password**을 입력하였을 경우, **로그인 불가**

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

## <a id="a1">로그인 페이지</a>

![naver_login](https://github.com/seumomo/js-homework/assets/127176650/2d472fb9-6dbe-4966-8d2b-5a829d64ea17)

---

### 작업 내용 및 기본 동작

- 함수를 만들고 사용했다.

  - DOM의 input 요소를 찾는 함수 `getInput()`

    - 찾을 input 요소의 type을 함수의 인수로 넣으면, 해당 input을 반환한다.
    - 유효하지 않은 input 요소를 함수의 인수로 넣었을 때에는 Error 메세지가 출력된다.

  - input 요소에 입력되는 값을 validation하는 함수 `validation()`
    - `getInput()`를 사용하여 input을 찾고, input event를 사용하여 input에 값이 입력될 때마다 validation한다.
    - validation 기준을 충족하거나, 입력된 값을 지운 경우에는 error 메세지가 출력되지 않는다.

- 로그인 버튼을 눌렀을 때 유효한 값인지 비교하고, 유효하지 않으면 알림창을 띄워준다.
  - form에 submit event를 사용하여 입력된 값이 유효하다면 welcome.html로 이동하고, 그렇지 않으면 알림창이 출력되도록 한다.

### 고민했던 지점

- 로그인을 눌렀을 때, 유효한 값을 입력했는데도 welcome.html로 이동하지 않고 빈 페이지로 이동되었다.

  - form의 submit event의 기본 동작을 실행되지 않도록 하여 해결했다.

- 로그인 후 페이지가 이동되었다가, 뒤로가기를 했을 때 입력됐던 값과 체크됐던 것들이 초기화되지 않았다.
  - 처음엔 pageshow event를 통해 반복문을 사용하여 모든 input 요소에 null | false를 할당시켜 해결했다.
  - 리팩토링하는 과정에서 form 자체에 reset()을 사용하여 초기화되도록 했다.
