alert("Welcome to my website");

const visitorName = prompt("Please type in your name");

const rollingYear = 2021;

let birthYear = Number(prompt("Please type in the year you were born"));

// When the value is 0 or they clicked cancel or typed in text:
if (birthYear === 0 || birthYear === null) {
  birthYear = rollingYear;
}

const visitorAge = rollingYear - birthYear;

if (visitorAge < 10) {
  alert(
    `You are too young for this ${visitorName}, Come back when you are older.`
  );
} else if (visitorAge >= 10 && visitorAge < 18) {
  const userWithCompany = confirm(
    "Confirm that you are with an adult: Type 'OK'"
  );
  if (userWithCompany) {
    alert(
      `Welcome to my super website ${visitorName}. Good, that you are not alone here!`
    );
  } else {
    alert(`You are too young ${visitorName}. You need an adult to continue`);
  }
} else if (visitorAge === 40) {
  alert("Same year");
} else {
  alert(`Welcome to my super website ${visitorName}!`);
}

console.log(visitorAge);
