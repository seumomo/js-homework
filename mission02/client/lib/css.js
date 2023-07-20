/* -------------------------------------------------------------------------- */
/*                                    class                                   */
/* -------------------------------------------------------------------------- */

export function addClass(node, className) {
  if (typeof node === 'string') {
    node = getNode(node);
  }
  if (typeof className !== 'string') {
    throw new Error('addClass 함수의 두 번째 인수는 문자형이어야 합니다.');
  }
  node.classList.add(className);
}

export function removeClass(node, className) {
  if (typeof node === 'string') {
    node = getNode(node);
  }
  if (!className) {
    node.className = '';
    return;
  }
  if (typeof className !== 'string') {
    throw new Error('removeClass 함수의 두 번째 인수는 문자형이어야 합니다.');
  }
  node.classList.remove(className);
}

export function toggleClass(node, className) {
  if (typeof node === 'string') {
    node = getNode(node);
  }
  if (typeof className !== 'string') {
    throw new Error('toggleClass 함수의 두 번째 인수는 문자형이어야 합니다.');
  }
  node.classList.toggle(className);
}

/* -------------------------------------------------------------------------- */
/*                                     css                                    */
/* -------------------------------------------------------------------------- */

function setCss(node, property, value) {
  if (typeof node === 'string') {
    node = getNode(node);
  }

  if (!(property in document.body.style)) {
    throw new Error(
      'setCss 함수의 두 번째 인수인 prop은 유효한 css 속성이 아닙니다.'
    );
  }

  if (!value)
    throw new SyntaxError(
      'setCss 함수의 세 번째 인수는 필수로 입력되어야 합니다.'
    );
  node.style[property] = value;
}

function getCss(node, property) {
  if (typeof node === 'string') {
    node = getNode(node);
  }

  if (!(property in document.body.style)) {
    throw new Error(
      'getCss 함수의 두 번째 인수인 prop은 유효한 css 속성이 아닙니다.'
    );
  }

  return getComputedStyle(node)[property];
}

function css(node, property, value) {
  return !value ? getCss(node, property) : setCss(node, property, value);
}
