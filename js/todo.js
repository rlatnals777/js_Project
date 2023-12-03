const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";
//todo 저장 array
let toDos = [];

function saveToDos() {
  // JSON.stringify(toDos) : 무엇이든 String으로 만들어줌 ex) "["a,"b","c"]""
  // JSON.parse(localStorage.getItem("todos")) : [a,b,c] 처럼 js가 읽을 수 있는 배열로 나옴
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}
// todo 리스트 삭제 함수
function deleteTodo(event) {
  //target은 클릭된 HTML Element
  //target은 버튼, parentElement는 li가 됨
  const li = event.target.parentElement;
  li.remove();
  //삭제하고 업데이트 후 유지
  //우리가 클릭한 li.id와 다른 toDo는 남겨두고 싶다.
  toDos = toDos.filter(toDo => toDo.id !== parseInt(li.id));
  saveToDos();
}

//새로운 Todo 그리기
function paintToDo(newTodo) {
  // html만들기
  const li = document.createElement("li");
  li.id = newTodo.id; //newTodo에 있는 Date.now()를 통해서 id 부여
  const span = document.createElement("span");
  span.innerText = newTodo.text;
  const button = document.createElement("button");
  button.innerText = "X";
  button.addEventListener("click", deleteTodo);
  // li 안에 span 넣기
  li.appendChild(span);
  li.appendChild(button);
  // span 안에 text 넣어줌
  toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
  event.preventDefault();
  // input value 저장 후 비워주기
  const newTodo = toDoInput.value;
  toDoInput.value = "";
  const newTodoObj = {
    text : newTodo,
    id : Date.now(),
  }
  toDos.push(newTodoObj);
  paintToDo(newTodoObj);
  saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

//parsedToDos.forEach((item)=> console.log("hello", item)); 아래 함수와 같은 의미
// function sayHello(item) {
//   console.log("hello", item);
// }
const savedToDos = localStorage.getItem(TODOS_KEY);
if (savedToDos) {
  const parsedToDos = JSON.parse(savedToDos);
  // 입력한 Todo를 배열 toDos에 저장(이전꺼 저장)
  toDos = parsedToDos;
  //forEach는 array에 있는 각각의 item들을 실행 시켜줌
  parsedToDos.forEach(paintToDo);
}

//2023.12.03
//filter : 이전 array에 있는 데이터를 조건에 따라 제외시키는 것
//return이 false면 제외

