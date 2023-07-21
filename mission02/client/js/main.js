import { addClass, getNode, removeClass, setAttr } from '../lib/index.js';
import { data } from './data.js';

const characterList = getNode('.nav__list');

const setBgColor = (dataArray) => {
  const body = getNode('body');
  const [colorA, colorB = '#000'] = dataArray.color;

  body.style.background = `linear-gradient(to bottom, ${colorA}, ${colorB})`;
};

const setImage = (dataArray) => {
  const visualImage = getNode('.visual img');

  setAttr(visualImage, 'src', `./assets/${dataArray.name.toLowerCase()}.jpeg`);
  setAttr(visualImage, 'alt', `./assets/${dataArray.alt}`);
};

const setNameText = (dataArray) => {
  const nickName = getNode('.nickName');

  nickName.textContent = `${dataArray.name}`;
};

const slider = (event) => {
  const target = event.target.closest('li');
  if (!target) return;
  const index = target.getAttribute('data-index') - 1;
  const dataArray = data[index];

  [...characterList.children].forEach((item) => removeClass(item, 'is-active'));
  addClass(target, 'is-active');

  setBgColor(dataArray);
  setImage(dataArray);
  setNameText(dataArray);
};

characterList.addEventListener('click', slider);
