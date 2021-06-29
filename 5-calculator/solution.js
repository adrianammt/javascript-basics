const operator = prompt(
  "Which operation do you want to do?\n Type one of these: +, -, *, / \n Type exit to leave. You can also leave by cancelling the prompt."
);

if (operator === "exit" || !operator) {
  alert("Thank you for participating.");
}

if (operator === "+") {
  let operand1 = prompt("Please type in a number");
  let operand2 = prompt("Please type in a second number");
  let sum = Number(operand1) + Number(operand2);
  alert("Your solution is: " + operand1 + " +" + operand2 + " = " + sum + "");
} else if (operator === "-") {
  let operand1 = prompt("Please type in a number");
  let operand2 = prompt("Please type in a second number");
  let subst = Number(operand1) - Number(operand2);
  alert("Your solution is: " + operand1 + " -" + operand2 + " = " + subst + "");
} else if (operator === "*") {
  let operand1 = prompt("Please type in a number");
  let operand2 = prompt("Please type in a second number");
  let mult = Number(operand1) * Number(operand2);
  alert("Your solution is: " + operand1 + " *" + operand2 + " = " + mult + "");
} else if (operator === "/") {
  let operand1 = prompt("Please type in a number");
  let operand2 = prompt("Please type in a second number");
  let div = Number(operand1) / Number(operand2);
  alert("Your solution is: " + operand1 + " /" + operand2 + " = " + div + "");
}
