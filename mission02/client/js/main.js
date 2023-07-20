/* 

1. 클릭 이벤트 활성화
2. nav 클릭시 배경 색상 변경
3. 이미지 변경
4. 텍스트 변경
5. 함수 분리

*/

const list = document.querySelector('.nav__list');
const li = document.querySelectorAll('li');
const visualImage = document.querySelector('.visual img');

function slider(event) {
  const target = event.target.closest('li');
  if (!target) return;

  const index = target.getAttribute('data-index') - 1;
  const imageName = data[index].name.toLowerCase();

  for (let value of list.children) {
    value.classList.remove('is-active');
  }

  target.classList.add('is-active');

  visualImage.setAttribute('src', `./assets/${imageName}.jpeg`);
  visualImage.setAttribute('alt', `./assets/${data[index].alt}`);

  const body = document.querySelector('body');
  body.style.background = `linear-gradient(to bottom, ${data[index].color[0]}, ${data[index].color[1]})`;

  let nickName = document.querySelector('.nickName');
  nickName.innerHTML = data[index].name;
}

list.addEventListener('click', slider);
