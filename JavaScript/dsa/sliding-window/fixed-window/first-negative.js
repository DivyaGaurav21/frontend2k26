// https://www.geeksforgeeks.org/problems/first-negative-integer-in-every-window-of-size-k3345/1


// First Negative Number in Every Window
function firstNegInWindow(arr, k) {
  let res = [];
  for (let i = 0; i <= arr.length - k; i++) {
    let found = false;
    for (let j = i; j < i + k; j++) {
      if (arr[j] < 0) {
        res.push(arr[j]);
        found = true;
        break;
      }
    }
    if (!found) res.push(0);
  }
  return res;
}

let nums = [2, -1, 3, -4, 5, -6, 1, 2, 3, 4, 5];
let k = 3;
console.log(firstNegInWindow(nums, k));
// o/p- [-1, -1, -4, -4, -6, -6, 0, 0, 0]
