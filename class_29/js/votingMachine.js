/**
 * Voting machine.
 *
 * Voter age should be more than 18 and less than 80.
 * We have 2 candidate x and y.
 *
 */
const userInput = prompt("Enter your age:");
const age = Number(userInput);

if (isNaN(age) || age <= 0) {
  console.log(`Invalid Input "${userInput}". Age Must be between 18 and 80.`);
} else if (age < 18) {
  console.log(`Too young for voting. Try again in ${18 - age} years.`);
} else if (age > 80) {
  console.log("Too old for voting");
} else {
  const vote = prompt("Enter X or Y").toLowerCase();
  if (vote === "x" || vote === "y") {
    console.log(`Your vote for '${vote.toUpperCase()}' is confirmed.`);
  } else {
    console.log("Invalid vote. Press 'ctrl + r' to try again.");
  }
}
