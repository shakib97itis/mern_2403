/**
 * Some basic arithmetic functions :
 * @param: a[number], b[number]
 */
const addition = (a, b) => a + b;
const subtraction = (a, b) => a - b;
const times = (a, b) => a * b;
const division = (a, b) => a / b;
const modulus = (a, b) => a - Math.floor(a / b) * b;
const exponent = (a, b) => b ** b;
const getNumber = (position) => {
  const number = Number(prompt(`Enter ${position} number.`));
  if (number || number === 0) {
    return number;
  }
  return false;
};

// UI Code
const additionUI = document.getElementById("addition");
const subtractionUI = document.getElementById("subtraction");
const timesUI = document.getElementById("times");
const divisionUI = document.getElementById("division");
const modulusUI = document.getElementById("modulus");
const exponentUI = document.getElementById("exponent");
const resultUI = document.getElementById("result");

const a = getNumber("1st");
const b = getNumber("2nd");

if (a && b) {
  additionUI.innerText = `Addition: ${addition(a, b)}`;
  subtractionUI.innerText = `Subtraction: ${subtraction(a, b)}`;
  timesUI.innerText = `Times: ${times(a, b)}`;
  divisionUI.innerText = `Division: ${division(a, b)}`;
  modulusUI.innerText = `Modulus: ${modulus(a, b)}`;
  exponentUI.innerText = `Exponent: ${exponent(a, b)}`;
} else {
  resultUI.innerHTML =
    "Please Enter a valid number, Press ctrl + r to try again";
}
