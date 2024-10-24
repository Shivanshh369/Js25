let arr = [-1, 0, 1, 2, -1, -4];

var threeSum = function (nums) {
  let result = [];

  nums = nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length - 2; i++) {
    let subResult = [];
    for (let j = i + 1; j < nums.length - 1; j++) {
      for (let k = j + 1; k < nums.length; k++) {
        if (nums[i] + nums[j] + nums[k] === 0 && subResult.length < 3) {
          subResult.push(nums[i], nums[j], nums[k]);
          result.push(subResult);
        }
      }
    }
  }

  return result;
};

console.log(threeSum(arr));
