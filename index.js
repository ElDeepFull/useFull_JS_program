// PROGRAM 1

const sumArray = function (array) {
  let sum = 0;
  array.forEach(function (number) {
    sum += number;
  });
  return sum;
};

sumArray([2, 2, 2]);
console.log(sumArray([2, 10, 22]));

// PROGRAMM 2

const contacts = [
  "Chris:2232322",
  "Sarah:3453456",
  "Bill:7654322",
  "Mary:9998769",
  "Dianne:9384975",
];

const para = document.querySelector("p");
const input = document.querySelector("input");
const bouton = document.querySelector("button");

bouton.addEventListener("click", function () {
  let searchName = input.value;
  input.value = "";
  input.focus();
  for (let i = 0; i < contacts.length; i++) {
    let splitContact = contacts[i].split(":");
    if (splitContact[0] === searchName) {
      para.textContent =
        splitContact[0] + "'s number is " + splitContact[1] + ".";
      break;
    } else {
      para.textContent = "Contact not found.";
    }
  }
});