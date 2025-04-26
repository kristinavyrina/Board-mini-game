const board = document.querySelector('#board'); //обращаемся к диву board
const colors = ['#e74c3c', '#ffA500', '#800080', '#8e44ad', '#3498db', '#e67e22', '#2ecc71',  '#ffD700', '#ff69B4', '#40E0D0', '#FF6B6B', '#A569BD','#6FE3D1', '#F4D03F' ] //массив цветов квадратов


const SQUARES_NUMBER = 700; //количество квадратов на поле

for (let i=0; i < SQUARES_NUMBER; i++) {
  const square = document.createElement('div'); //создаем квадраты и кладем их в board
  square.classList.add('square'); //присваиваем класс квадрату
  
  // square.addEventListener('mouseover', () => setColor(square)); //нормальная запись функции
  square.addEventListener('mouseover', setColor);//сокращенный вариант функции setColor()

  // square.addEventListener('mouseleave', () => removeColor(square)); //нормальная запись функции
  square.addEventListener('mouseleave', removeColor);//сокращенный вариант функции removeColor()

  board.append(square);
}

// function setColor(element) {
//   const color = getRandomColor();
//   element.style.backgroundColor = color;
//   element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
// } //нормальная запись функции setColor()
function setColor(event) {
    const element = event.target
    const color = getRandomColor();
    element.style.backgroundColor = color;
    element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
  } //сокращенный вариант функции setColor()
  

// function removeColor(element) {
//   element.style.backgroundColor = '#1d1d1d';
//   element.style.boxShadow = `0 0 2px #000`;
// } //нормальная запись функции removeColor()
function removeColor(event) {
  const element = event.target
  element.style.backgroundColor = '#1d1d1d';
  element.style.boxShadow = `0 0 2px #000`;
} //сокращенный вариант функции removeColor()

// function getRandomColor() {
//   const index = Math.floor(Math.random() * colors.length)
//   return colors[index];
// } //нормальная запись функции getRandomColor()

function getRandomColor() {
  return colors[Math.floor(Math.random()* colors.length)];
} // альтернативный вариант функции getRandomColor() (улучшеный код)
