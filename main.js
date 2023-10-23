import { Rectangle, Square, Circle } from './shape.js';

let sideA = document.getElementById('side-a');
let sideB = document.getElementById('side-b');
let side = document.getElementById('side');
let radius = document.getElementById('radius');
var triangleResult = document.getElementById('triangle-result');
var squareResult = document.getElementById('square-result');
var circleResult = document.getElementById('circle-result');

let triangleArea = document.getElementById('triangle-area');
let trianglePerimeter = document.getElementById('triangle-perimeter');
let squareArea = document.getElementById('square-area');
let squarePerimeter = document.getElementById('square-perimeter');
let circlePerimeter = document.getElementById('circle-area');
let circleArea = document.getElementById('circle-perimeter');
triangleArea.addEventListener('click', () => {
  const rectangle = new Rectangle(sideA.value, sideB.value);
  triangleResult.innerHTML = 'The area of the triangle is ' + rectangle.area();
});
trianglePerimeter.addEventListener('click', () => {
  const rectangle = new Rectangle(sideA.value, sideB.value);
  triangleResult.innerHTML = 'The Perimeter of the triangle is ' + rectangle.perimeter();
});
squareArea.addEventListener('click', () => {
  const square = new Square(side.value);
  squareResult.innerHTML = 'The Area of the Square is ' + square.area();
});
squarePerimeter.addEventListener('click', () => {
  const square = new Square(side.value);
  squareResult.innerHTML = 'The Perimeter of the Square is ' + square.perimeter();
});
circlePerimeter.addEventListener('click', () => {
  const circle = new Circle(radius.value);
  circleResult.innerHTML = 'The Perimeter of the Circle is ' + circle.perimeter();
});
circleArea.addEventListener('click', () => {
  const circle = new Circle(radius.value);
  circleResult.innerHTML = 'The Area of the Circle is ' + circle.area();
});
