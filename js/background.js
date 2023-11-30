const images = ["0.jpg", "1.jpg", "2.jpg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

// js에서 html 요소를 생성(ex. img 태그 생성)
// ex) <img src=""></img>와 같다.
const bgImage = document.createElement("img");

bgImage.src = `img/${chosenImage}`;
//css로 이미지 전체화면으로 만들기
bgImage.className = `bgimage`;

// appendChild() : body에 html을 추가(함수 안의 경로에 정의한 값을 가장 뒤에서 기입함)
// prependChild() : 반대로 앞에서 기입
document.body.appendChild(bgImage);
