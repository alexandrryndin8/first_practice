// Burger part

document.getElementById("burger2").addEventListener("click", function() {
    document.querySelector(".navbar").classList.toggle("open")
});

// Math part

const plus = document.getElementById("butplus");
const minus = document.getElementById("butminus");
const mult = document.getElementById("butmult");
const div = document.getElementById("butdiv");
const sin = document.getElementById("butsin");
const cos = document.getElementById("butcos");
const tg = document.getElementById("buttg");
const ctg = document.getElementById("butctg");

let first = document.getElementById("first");
let second = document.getElementById("second");
let degrees = document.getElementById("degrees");

const result = document.getElementById("result")
const value = document.getElementById("value")

let res = 0;

function degreesToRadians(degrees) {
  return degrees * (Math.PI / 180);
}

let radians = degreesToRadians(degrees);

function calculus(mark) {
  const num1 = parseFloat(first.value) || 0;
  const num2 = parseFloat(second.value) || 0;
  const num = parseFloat(degrees.value) || 0;
  switch(mark) {
    case "+":
      res = num1 + num2;
      break
    case "-":
      res = num1 - num2;
      break
    case "*":
      res = num1 * num2;
      break
    case "/":
      res = num2 !== 0 ? num1 / num2 : "Error";
      break;
  }
  result.textContent = res;
}

plus.addEventListener("click", (event) => {
  event.preventDefault()
  calculus("+");
});

minus.addEventListener("click", (event) => {
  event.preventDefault()
  calculus("-");
});

mult.addEventListener("click", (event) => {
  event.preventDefault()
  calculus("*");
});

div.addEventListener("click", (event) => {
  event.preventDefault()
  calculus("/");
});

// Trigonometric

let val = 0;
function trigonometric(operation) {
    const num3 = parseFloat(degrees.value) || 0;
    num = (num3 * Math.PI) / 180; 

    switch(operation) {
        case "sin":
            val = Math.sin(num).toFixed(2); 
            break;
        case "cos":
            val = Math.cos(num).toFixed(2);
            break;
        case "tg":
            val = Math.abs(num % Math.PI) === (Math.PI / 2) ? "Error" : Math.tan(num).toFixed(2);
            break;
        case "ctg":
            val = num % Math.PI === 0 ? "Error" : (1 / Math.tan(num)).toFixed(2);
            break;
    }
    value.textContent = val;
}

sin.addEventListener("click", (Event) => {
    Event.preventDefault()
    trigonometric("sin");
});

cos.addEventListener("click", (Event) => {
    Event.preventDefault()
    trigonometric("cos");
});

tg.addEventListener("click", (Event) => {
    Event.preventDefault()
    trigonometric("tg");
});

ctg.addEventListener("click", (Event) => {
    Event.preventDefault()
    trigonometric("ctg");
});