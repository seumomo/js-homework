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

/* -------------------- */
/* input 요소 찾기 함수 */
/* -------------------- */
function getInput(type) {
  const input = document.querySelector(`[type = ${type}]`);

  if (!!input) {
    return input;
  } else {
    throw new Error('해당하는 input 요소가 존재하지 않습니다.');
  }
}

/* --------------------------------------------------------------------------------- */
/* 페이지 이동 후 뒤로가기를 했을 때 모든 input의 value와 check를 초기화되도록 한다. */
/* --------------------------------------------------------------------------------- */
window.addEventListener('pageshow', () => {
  const allInput = document.querySelectorAll('input');

  for (let i = 0; i < allInput.length; i++) {
    allInput[i].value = null;
    allInput[i].checked = false;
  }
});

/* ---------------------------------------------- */
/* input 요소에 입력되는 값을 validation하는 함수 */
/* ---------------------------------------------- */
function validation(type) {
  const input = getInput(`${type}`);
  let value = input.value;

  const validationFunctions = {
    email: emailReg,
    password: passwordReg,
  };
  const validationFunction = validationFunctions[type];
  let isInvalid = false;

  input.addEventListener('input', () => {
    value = input.value;

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
// const email = getInput('email');
// const password = getInput('password');
// let emailValue = email.value;
// let passwordValue = password.value;
// email.addEventListener('input', () => {
//   emailValue = email.value;
//   if (emailValue === user.email) {
//     return (emailValue = true);
//   }
//   console.log(emailValue);
// });
// password.addEventListener('input', () => {
//   passwordValue = password.value;
//   if (passwordValue === user.password) {
//     return (passwordValue = true);
//   }
//   console.log(user.password);
// });
// const form = document.querySelector('form');
// form.addEventListener('submit', () => {
//   event.preventDefault();
//   if (emailValue === true && passwordValue === true) {
//     window.location.href = 'welcome.html';
//   } else {
//     alert('아이디 또는 비밀번호가 옳지 않습니다.');
//   }
// });
