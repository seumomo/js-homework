/* 

1. 클릭 이벤트 활성화
2. nav 클릭시 배경 색상 변경
3. 이미지 변경
4. 텍스트 변경
5. 함수 분리

*/

const list = document.querySelector('.nav__list');
const visualImage = document.querySelector('.visual img');

function slider(event) {
  const target = event.target.closest('li');

  if (!target) return;

  for (let value of list.children) {
    value.classList.remove('is-active');
  }

  target.classList.add('is-active');

  setImage();
}

function setImage(event) {
  // visualImage.setAttribute('src', `./assets/${data[name].toLowerCase.jpeg}`);
  console.log(data[index]);
}

list.addEventListener('click', slider);
