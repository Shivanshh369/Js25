let arr = [1, 1, 2, 3, 4, 3, 2, 4];
let arr2 = [];
for (let i = 0; i <= arr.length; i++) {
  let duplicate = false;
  for (let j = 0; j <= arr2.length; j++) {
    if (arr[i] === arr2[j]) {
      duplicate = true;
    }
  }
  if (!duplicate) {
    arr2.push(arr[i]);
  }
}
console.log(arr2);
