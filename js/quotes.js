// Math.random(): 0에서 1사이의 랜덤한 숫자
// random 사용 시 float 형태로 나옴.
// 소수점 뒤에 숫자를 지우기 위한 3가지 방법
// 1. Math.round() : 반올림 해주는 함수
// 2. Math.ceil() : 숫자를 천장까지 높여줌 (ex 1.1 -> 2로 출력)
// 3. Math.floor(): 숫자를 바닥까지 내려줌 (ex 1.9 -> 1로 출력)
const quotes = [
  {
    quote: "The purpose of our lives is to be happy. ",
    author: "Dalai Lama",
  },
  {
    quote: "Do not try to be original, just try to be good. ",
    author: "Paul Rand",
  },
  {
    quote: "The way get started is to quit talking and begin doing. ",
    author: "Walt Disney",
  },
  {
    quote:
      "The greatest glory in living lies not in never falling, but in rising every time we fall. ",
    author: "Nelson Mandela",
  },
  {
    quote: "Anyone who has never made a mistake has never tried anything new. ",
    author: "Albert Einstein",
  },
  {
    quote:
      "Let me assert my firm belief that the only thing we have to fear is fear itself. ",
    author: "F.D. Roosevelt",
  },
  {
    quote: "Age is no guarantee of maturity. ",
    author: "Lawana Blackwell",
  },
  {
    quote: "Sometimes even to live is an act of courage. ",
    author: "Seneca",
  },
  {
    quote: "Science is organized knowledge. Wisdom is organized life. ",
    author: "Immanuel Kant",
  },
  {
    quote: "life is not fair get used to it. ",
    author: "Bill Gates",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");
const todayQuotes = quotes[Math.floor(Math.random() * quotes.length)];

// 화면 표출
quote.innerText = todayQuotes.quote;
author.innerText = todayQuotes.author;
