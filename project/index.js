// function stringValue(input) {
//   const value = Number(input);
//   if (isNaN(value)) {
//     return "Is Not a number";
//   } else return value;
// }

// console.log(stringValue("smknf"));

// function flipBoolean(input) {
//   const value = Boolean(input);
//   return !value;
// }

// console.log(flipBoolean(""));

// function whatAmI(input) {
//   if (typeof input === "number") {
//     return "I'm a number!";
//   } else if (typeof input === "string") return "I'm a String!!";
// }

// console.log(whatAmI(12));

function isItTruthy(input) {
  if (input) {
    return "it's truthy";
  } else {
    return "it's falsey";
  }
}
console.log(isItTruthy(undefined));
