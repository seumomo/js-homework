const user = {
  email: 'asd@naver.com',
  password: 'spdlqj123!@',
};

function emailReg(text) {
  const re =
    // eslint-disable-next-line no-useless-escape
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  return re.test(String(text).toLowerCase());
}

function passwordReg(text) {
  const re = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^*+=-]).{6,16}$/;

  return re.test(String(text).toLowerCase());
}

/* -------------------------------------------------------------------------- */
/*                               input 요소 찾기 함수                         */
/* -------------------------------------------------------------------------- */
function getInput(type) {
  const input = document.querySelector(`[type = ${type}]`);

  if (!!input) {
    return input;
  } else {
    throw new Error('해당하는 input 요소가 존재하지 않습니다.');
  }
}

/* -------------------------------------------------------------------------- */
/*                     input 요소에 입력되는 값을 validation하는 함수         */
/* -------------------------------------------------------------------------- */
function validation(type) {
  const input = getInput(`${type}`);
  let value = input.value;

  const validationFunctions = {
    email: emailReg,
    password: passwordReg,
  };
  const validationFunction = validationFunctions[type];

  input.addEventListener('input', () => {
    value = input.value;
    let isInvalid = false;

    if (value) {
      isInvalid = !validationFunction(value);
    }

    input.classList.toggle('is--invalid', isInvalid);
  });
}
/* ------------------------------------------------------------------------------------------------ */
/*               해당하는 input 요소를 찾고, 그 요소에 입력된 값을 validation하는 함수              */
/* ------------------------------------------------------------------------------------------------ */
function inputValidation(type) {
  getInput(`${type}`);
  validation(`${type}`);
}

// 1. email 정규표현식을 사용한 validation
// 2. pw 정규표현식을 사용한 validation
inputValidation('email');
inputValidation('password');

// 3. 상태 변수 관리
// 4. 로그인 버튼을 클릭시 조건처리
function checkInput(type) {
  const input = getInput(`${type}`);
  let value = input.value;

  input.addEventListener('input', () => {
    value = input.value;

    if (value === user[`${type}`]) {
      return console.log(true);
    } else {
      console.log(`${type}이(가) 옳지 않습니다.`);
    }
  });
}
const checkEmail = checkInput('email');
const checkPassword = checkInput('password');
if (checkEmail === true && checkPassword === true) {
  window.location.href = 'welcome.html';
}
