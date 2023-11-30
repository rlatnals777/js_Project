const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const link = document.querySelector("a");

//대문자로 쓰는 이유 : 일반적으로 string만 포함된 변수는 대문자로 표기하고 string을 저장하고 싶을 때 사용
const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
  //input의 value 얻기 loginInput.value
  //preventDefault() : 어떤 event의 기본행동이든지 발생되지 않도록 하는 함수
  //submit이 input에 글씨 쓰고 엔터치면 자동으로 새로고침 되는데 그걸 막은것임
  event.preventDefault();
  loginForm.classList.add(HIDDEN_CLASSNAME);
  const username = loginInput.value;
  //미니DB 웹 -> 어플리케이션 -> Local storage에서 확인 가능
  localStorage.setItem(USERNAME_KEY, username);
  // `Hello ${username}` == "Hello " + username;
  paingGreetings(username);
  //localStorage : 브라우저에 뭔가를 저장할 수 있도록 해줌. 나중에 가져다 쓸 수 있음
}

function paingGreetings(username) {
  greeting.innerText = `Hello ${username}`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
}

// function handleLinkClick(event) {
//   event.preventDefault();
//   console.dir(event);
// }

//addEventListener 안에 있는 함수는 직접 실행하지 않는다.
//브라우저가 실행시켜주며, 브라우저에서 해당 이벤트에 대한 정보 즉, object를 가지게 된다.
//addEventListener의 함수에서 object에 대한 자리만 할당해주면 해당 이벤트가 발생시킨 정보들에 대한 object들을 볼 수 있다.
//이 때 해당 이벤트가 가진 기본 default 값을 발생시키지 않게 하기 위해선 preventDefault를 이용하여 막을 수 있다.

// link.addEventListener("click", handleLinkClick);

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
  //show the form
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  //show the greetings
  paingGreetings(savedUsername);
}
