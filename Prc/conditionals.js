let num1;
let num2;
function LargestNumber(num1, num2) {
  if (num1 > num2) {
    return "The Largest Number in " + num1 + " and " + num2 + " is  " + num1;
  } else if (num1 < num2) {
    return "The largest Number in " + num1 + " and " + num2 + " is  " + num2;
  } else if (num1 == num2) {
    return "They Are Equal";
  } else return "Input is Incorrect check it again";
}
let Result = LargestNumber("A", 13);
console.log("Answer: " + Result);
