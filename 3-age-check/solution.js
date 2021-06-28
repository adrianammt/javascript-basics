alert("Welcome to my website");

const visitorName = prompt("Please type in your name");
console.log(visitorName);

let birthYear = prompt("Please type in the year you were born");
console.log(birthYear);

if (birthYear.length === 0 || birthYear === null) {
  birthYear = 2021;
}

const age = 2021 - Number(birthYear);
console.log(age);

if (age < 10) {
  alert(
    "You are too young for this '" +
      visitorName +
      "', Come back when you are older."
  );
} else if (age > 10 && age < 18) {
  if (confirm("Confirm that you are with an adult: Type 'OK'")) {
    alert(
      "Welcome to my super website '" +
        visitorName +
        "'. Good, that you are not alone here!"
    );
  } else if (age === 40) {
    alert("Same year");
  } else {
    alert("Welcome to my super website '" + visitorName + "'!");
  }
}
