const num = Number(prompt("Please type in a number"));

if (num < 0) {
  alert("I can't calculate the sumatory for negative numbers.");
}

let sum = 0;

for (let i = 0; i <= num; i++) {
  sum = sum + i;
}
alert("The summatory is: " + sum + ".");
