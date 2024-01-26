const input = document.querySelector("#input");

const one = document.querySelector("#one");
const two = document.querySelector("#two");
const three = document.querySelector("#three");
const four = document.querySelector("#four");
const five = document.querySelector("#five");
const six = document.querySelector("#six");
const seven = document.querySelector("#seven");
const eight = document.querySelector("#eight");
const nine = document.querySelector("#nine");
const zero = document.querySelector("#zero");

const point = document.querySelector("#point");
const plus = document.querySelector("#plus");
const minus = document.querySelector("#minus");
const divide = document.querySelector("#divide");
const multiply = document.querySelector("#multiply");
const calculate = document.querySelector("#calculate");
const erase = document.querySelector("#erase");

//piece of my shitcode (bad realisation)
one.addEventListener("click", () => {
    var value = input.value;
  
    value += "1";
  
    input.value = value;
});

two.addEventListener("click", () => {
    var value = input.value;
  
    value += "2";
  
    input.value = value;
});

three.addEventListener("click", () => {
    var value = input.value;
  
    value += "3";
  
    input.value = value;
});

four.addEventListener("click", () => {
    var value = input.value;
  
    value += "4";
  
    input.value = value;
});

five.addEventListener("click", () => {
    var value = input.value;
  
    value += "5";
  
    input.value = value;
});

six.addEventListener("click", () => {
    var value = input.value;
  
    value += "6";
  
    input.value = value;
});

seven.addEventListener("click", () => {
    var value = input.value;
  
    value += "7";
  
    input.value = value;
});

eight.addEventListener("click", () => {
    var value = input.value;
  
    value += "8";
  
    input.value = value;
});

nine.addEventListener("click", () => {
    var value = input.value;
  
    value += "9";
  
    input.value = value;
});

zero.addEventListener("click", () => {
    var value = input.value;
  
    value += "0";
  
    input.value = value;
});

plus.addEventListener("click", () => {
    var value = input.value;
  
    value += " + ";
  
    input.value = value;
});

minus.addEventListener("click", () => {
    var value = input.value;
  
    value += " - ";
  
    input.value = value;
});

multiply.addEventListener("click", () => {
    var value = input.value;
  
    value += " * ";
  
    input.value = value;
});

divide.addEventListener("click", () => {
    var value = input.value;
  
    value += " / ";
  
    input.value = value;
});

point.addEventListener("click", () => {
    var value = input.value;
  
    value += ".";
  
    input.value = value;
});

erase.addEventListener("click", () => {
    const value = input.value;

    if (value.length === 0) {
      return;
    }
  
    input.value = value.slice(0, value.length - 1);
});

calculate.addEventListener("click", () => {
    const values = input.value.trim().split(/\s+/); //const values = input.value.split(" ");

    if (values.length !== 3) {
      console.error("Error...");
      return;
    }
  
    const a = Number(values[0]); 
    const operation = values[1];
    const b = Number(values[2]);

    let result;

    switch (operation) {
        case "+":
          result = a + b;
          break;
        case "-":
          result = a - b;
          break;
        case "*":
          result = a * b;
          break;
        case "/":
          if (b === 0) {
            console.error("Error: Cannot divide by zero.");
            return;
          }
          result = a / b;
          break;
        default:
          console.error("Invalid operation.");
          return;
    }

    //console.log(a);
    //console.log(operation);
    //console.log(b);

    //console.log(result);
    input.value = result.toString();

});
