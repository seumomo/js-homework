import { addClass, getNode, removeClass, setAttr } from '../lib/index.js';
import { data } from './data.js';

const characterList = getNode('.nav__list');

const setBgColor = (dataObject) => {
  const body = getNode('body');
  const color = dataObject.color;
  const [colorA, colorB = '#000'] = color;

  body.style.background = `linear-gradient(to bottom, ${colorA}, ${colorB})`;
};

const setImage = (dataObject) => {
  const visualImage = getNode('.visual img');

  setAttr(visualImage, 'src', `./assets/${dataObject.name.toLowerCase()}.jpeg`);
  setAttr(visualImage, 'alt', `./assets/${dataObject.alt}`);
};

const setNameText = (dataObject) => {
  const nickName = getNode('.nickName');
  nickName.textContent = `${dataObject.name}`;
};

const slider = (event) => {
  const target = event.target.closest('li');
  if (!target) return;
  const index = target.getAttribute('data-index') - 1;
  const dataObject = data[index];

  [...characterList.children].forEach((item) => removeClass(item, 'is-active'));
  addClass(target, 'is-active');

  setBgColor(dataObject);
  setImage(dataObject);
  setNameText(dataObject);
};

characterList.addEventListener('click', slider);
