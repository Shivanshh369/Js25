// let areSame = (pass, confirmPass) => {
//   if (pass == confirmPass) {
//     return "Password Matched";
//   } else return "Password didn't Match";
// };

// console.log(areSame("shivansh", "SHivaNsh"));

let a = "shivansh";
let b = "Shivansh";

let AreSame = (pass, confirmPass) => {
  if (pass.length == confirmPass.length) {
    for (let i = 0; i <= pass.length - 1; i++) {
      if (pass[i] !== confirmPass[i]) {
        return "Password did't Matched";
      }
    }
    return "Password Matched";
  } else return "Password didn't Matched";
};

console.log(AreSame(a, b));
