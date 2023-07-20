export const getNode = (node) => {
  if (typeof node !== 'string') {
    throw new Error('getNode 함수의 인수는 문자형이어야 합니다.');
  }
  return document.querySelector(node);
};
