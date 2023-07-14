/* --------------------- */
/*    기본 user 객체     */
/* --------------------- */
const user = {
  email: 'asd@naver.com',
  password: 'spdlqj123!@',
};

/* ---------------------------------------------------------------------- */
/*                     email과 password의 정규 표현식                     */
/* ---------------------------------------------------------------------- */
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

/* ------------------------------------------------------------ */
/*                     input 요소 찾기 함수                     */
/* ------------------------------------------------------------ */
function getInput(type) {
  const input = document.querySelector(`[type = ${type}]`);

  if (!!input) {
    return input;
  } else {
    throw new Error('해당하는 input 요소가 존재하지 않습니다.');
  }
}

/* -------------------------------------------------- */
/*   input 요소에 입력되는 값을 validation하는 함수   */
/* -------------------------------------------------- */
function validation(type) {
  const input = getInput(type);
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
    } else {
      isInvalid = false;
    }

    input.classList.toggle('is--invalid', isInvalid);
  });
}

/* ------------------- */
/*      함수 실행      */
/* ------------------- */
validation('email');
validation('password');

/* --------------------------------------------------------------------------------------------------- */
/* 로그인 버튼을 누르면 user 객체의 값과 비교한 후 일치하면 로그인, 일치하지 않으면 알림창을 띄워준다. */
/* --------------------------------------------------------------------------------------------------- */
document.querySelector('form').addEventListener('submit', () => {
  event.preventDefault();

  if (
    getInput('email').value === user.email &&
    getInput('password').value === user.password
  ) {
    window.location.href = 'welcome.html';
  } else {
    alert('아이디 또는 비밀번호가 옳지 않습니다.');
  }
});

/* ----------------------------------------------------------- */
/* 페이지 이동 후 뒤로가기를 했을 때 form을 초기화되도록 한다. */
/* ----------------------------------------------------------- */
window.addEventListener('pageshow', () => {
  document.querySelector('form').reset();
});
