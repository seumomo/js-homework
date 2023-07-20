export const setAttr = (node, property, value) => {
  if (typeof node === 'string') {
    node = getNode(node);
  }

  if (typeof property !== 'string') {
    throw new Error('setAttr 함수의 두 번째 인수는 문자형이어야 합니다.');
  }

  if (!node[property] && property !== 'class') {
    node.dataset[property] = value;
    return;
  }

  node.setAttribute(property, value);
};
