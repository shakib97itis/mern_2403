const userInput = window.prompt("Please enter a number");
const userInt = Number(userInput);

if (userInput === "" || isNaN(userInput) || userInt < 0) {
  console.log(`Your input "${userInput}". Please enter a positive number`);
} else {
  if (userInt % 2 == 0) {
    console.log("Even Number");
  } else {
    console.log("Odd Number");
  }
}
